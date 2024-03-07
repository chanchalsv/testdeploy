### Haze App
Haze App is a powerful tool that enables users to unleash their creativity through extensive customization options. Elevate your customer's experience by offering seamless customization features. Boost sales, engage customers, and improve conversion rates for your e-commerce store.


## Tech Stack
**Frontend**:
ReactJs,
Redux,
Redux Toolkit,
Bootstrap,
HTML,
CSS
Axios,

**Backend**:
Node.js,
Express.js,
MongoDB,
Mongoose,

**Development Tools**:
NPM,
Babel,
Webpack,
ESLint,
Prettier,
GIT,
Visual Studio,

**Database**: MongoDB



**Authentication**:  Email- Password Authentication

## .env File for Local Testing (Backend)


``` bash
MONGO_URL='mongodb://localhost:27017/hazeapp'
PORT=8080
JWT_SECRET="ABC12345"
```
##  Insturction for running Frontend Locally:
```bash

 npm i or npm i --force

 npm start

```

## Instructions for Running Backend Locally:
Add values to the variables in the local .env file.
Run the following commands:
```bash
npm i or npm i --force
npm start

```

** API Endpoints (Local Testing) **:
Check Endpoints Locally: ```http://localhost:8080/api/test/test-user```

Register User: ```http://localhost:8080/api/auth/register```

Login: ```http://localhost:8080/api/auth/login```

Logout: ```http://localhost:8080/api/auth/logout```

Get All Users: ```http://localhost:8080/api/profile/getuser```

Update User: ```http://localhost:8080/api/profile/updateuser```

Update Password: ```http://localhost:8080/api/profile/updatepassword```

Reset Password: ```http://localhost:8080/api/profile/resetpassword```

Delete User: ```http://localhost:8080/api/profile/deleteuser/:id```

Save Product: ```http://localhost:8080/api/product/save```

Get All Products: ```http://localhost:8080/api/product/getAll```

Save Customizer Data: `POST http://localhost:8080/api/data/customizer`

Get Customizer Data: `GET http://localhost:8080/api/data/customizer`

Save Layer Data: `POST http://localhost:8080/api/data/layerdata`

Get Layer Data: `GET http://localhost:8080/api/data/layerdata`

Post Profile details: `POST http://localhost:8080/api/profile/addprofiledetails`

Get Profile details : `GET http://localhost:8080/api/profile/getprofiledetails`

**Body for registering user** :
```
{
    "email":"",
    "password":""
}
```

** Body for login user ** :

{
    "email":"",
    "password":""
}

####  You need to pass token after login to the headers in 
``
Authorization : Bearer `token`
``
