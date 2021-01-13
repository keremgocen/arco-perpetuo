[![Netlify Status](https://api.netlify.com/api/v1/badges/a70a4031-c9b5-4f71-8853-7076121f406d/deploy-status)](https://app.netlify.com/sites/distracted-brown-345b1f/deploys)

# Just another toy project using Next.js/Typescript/Material-UI
[Based on TypeScript Next.js example](https://github.com/vercel/next.js/tree/canary/examples/with-typescript)

arco-perpetuo name comes from the font face I tried to use
## How to use it?

### Clone & Install
```
git clone git@github.com:keremgocen/arco-perpetuo.git && cd arco-perpetuo
npm i
npm run dev
```

### A local run with complementary backend fun-with-django-rest

[fun-with-django-rest](https://github.com/keremgocen/fun-with-django-rest) is another toy project I created to serve as a `pin_code` validator for this app.

- double check API_PINCODE_URL env var is set to where fun-with-django-rest is running, default is http://127.0.0.1:8000/api/customer_login/
- follow the instructions in readme for fun-with-django-rest to run it locally
- (optional) create a user using either the /admin or /customers endpoint of the backend project with a valid pin_code (5-digits)
- enter various pin_code values to test the functionality

## Notes

- some important integration testing is skipped (I hope to add them at some point in the future)
- UI could benefit from more media queries to support a wider variety of devices
- input validation is limited to a tiny Popper to keep things simple 
