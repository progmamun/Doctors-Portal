## Technology that use

- tailwind css, plugin daisyui
- react.js
- react router 6
- React DayPicker v8
- Firebase
- react-hook-form
- react-toastify
- react-query

- **NPM Package:**
- tailwind `npm install -D tailwindcss` `npx tailwindcss init` plugin `npm i daisyui`
- `npm install react-router-dom@6`
- `npm install react-day-picker date-fns`
- `npm install firebase`, `npm install --save react-firebase-hooks`
- `npm install react-hook-form`
- `npm install --save react-toastify`
- `npm i react-query`
- `npm install --save @stripe/react-stripe-js @stripe/stripe-js`

### vs code

- ctrl+shift+right arrow
- shift+end (every cursor line select )

---

## 3 ways to store images

1.  Third party storage :Free open public storage is ok for Practice project
2.  Your own storage in your own server (file system)
3.  Database: Mongodb

- YUP: to validate file: Search:- Yup file validation for react hook form

## Payment Steps:

1. install stripe react stripe js
2. open stripe account on stripe website
3. get publishable key pk\_\_\_
4. Create Elements wrapper using publishable key
5. Create Checkout Form using Card element, useStripe, useElements
6. get card elements info(credit card info)
7. get credit card info/error + display card error (if any)

---

9.  get client secret from backend via payment intent post api
10. store client secret on the client side
11. Create card payment confirmation
12. once payment is confirmed save payment information to the server
13. display transaction id
