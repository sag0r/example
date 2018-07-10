## XXX Automated Test by Puppeteer

### Get It Ready
1. Clone this repo: `git clone XXX`
2. Get inside: `cd buz5-automated-test`
3. Checkout to DEV Branch: `git fetch && git checkout dev`
4. Install packages:   `npm i`
5. Run: `npm start`

### Run Tests (advanced usage)
* #### Test SignUp, only: 
  ```cmd
  npm run signup
  ```
* #### You can even provide an email address to do the signup (optional): 
  ```cmd
  npm run signup email@luminuxtech.com
  ```
* #### Do multiple signup at the same time: 
  ```cmd
  npm run signup multiple
  ```
* #### How many? (optional, defaults to 4)
  ```cmd
  npm run signup multiple 10 
  ```
* #### Test UIs (no signup): 
  ```cmd
  npm run mybuz
  ``` 
* #### Want to do role-based testing? (optional, defaults to **admin**)
  ```cmd
  npm run installer
  ```
  > use any of the folowing roles: `admin, installer, customer`
  
* #### Run all tests: 
  ```cmd
  npm start
  ```

### Hints
1. Add or Change URLs in **common/urls.js**.
2. Add or Edit Users in **common/users.js**.
