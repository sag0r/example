const collection = await I.xlsx.getAllQuoteDetails();

// get all control-groups
const controlGroups = await page.$$('.control-group');

// loop-in
for (const control of controlGroups) {

    // get the <label>
    const label = await control.$eval('label', l => l.textContent);

    // use the label as 'key' and get 'value' from excel
    const item = collection.find(i => i.key == label);
    // because puppeteer can only type Strings
    const value = item && !isNaN(item.value) ? item.value.toString() : item.value;

    // it's certainly possible!
    if (!value) {
        const msg = `Couldn't find any value for '${label}' in excel`;
        await I.log.logTestStatus(false, msg, true);
        continue;
    }

    // get the control (<input> / <select> / <textarea>)
    const isSelectElement = await control.$('select');
    const isInputElement = await control.$('input');
    const elementType = isSelectElement ? 'select' : 'input';

    // as I haven't checked all the inventory groups
    // and all of the control types, I'm not sure
    if (!isSelectElement || !isInputElement) {
        const msg = `${label} is not a <select> or <input> element`;
        await I.log.logTestStatus(false, msg, true);
        continue;
    }

    // we must get a selector/identifier for the control
    const elementId = await control.$eval(elementType, i => i.id);

    // ok, make sure the control is not disabled;
    try {
        await page.waitForSelector(`#${elementId}:not([disabled])`, { visible: true, timeout: 1500 });
    } catch (error) {
        const msg = `'${label}' is still disabled after 15 seconds!`;
        await I.log.logTestStatus(false, msg, true);
    }

    // what kind of control is it?
    if (isSelectElement) {
        await page.type(`#${elementId}`, value);
        await I.log.logTestStatus(true, `${label}: ${value}`);
        continue;
    }

    // input type can be text/number or file
    // get the type
    const inputType = await page.$eval(`#${elementId}`, e => e.type);

    if (inputType == 'file') {
        // where to get the file to upload?
        const filePath = path.resolve(`./upload/dummy.txt`);
        const selector = await page.$(`#${elementId}`);
        await selector.uploadFile(filePath);
        await I.log.logTestStatus(true, `Uploaded: ${filePath}`, true);
        continue;
    }

    // that's a long way down the road
    await page.type(`#${elementId}`, value);
    await I.log.logTestStatus(true, `${label}: ${value}`);
}
