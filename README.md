## XXX Automated Test by Puppeteer

### Get It Ready
1. Clone this repo: `git clone XXX
2. Get inside: `cd buz5-automated-test`
3. Checkout to DEV Branch: `git fetch && git checkout dev`
4. Install packages:   `npm i`
5. Run: `npm start`

### Run Tests
* Run all tests: 
  ```cmd
  npm start
  ```
* Test SignUp, only: 
  ```bash
  npm run signup
  ```
* You can even provide an email address to do the signup: 
  ```command
  npm run signup email@luminuxtech.com
  ```
* Do multiple signup at the same time: 
  ```node
  npm run signup multiple
  ```
* How many? 
  ```javascript
  npm run signup multiple 10 
  //default is 4 in case not provided
  ```
* Test UIs (no signup): 
  ```javascript
  npm run mybuz
  ``` 
* Want to role-based test? 
  ```javascript
  npm run installer
  ```
  > use any of the folowing roles: `admin, installer, customer`

