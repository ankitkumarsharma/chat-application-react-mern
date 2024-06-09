# chat-application-react-mern
Chat App | React | Express | NodeJS | MongoDB | Fullstack

# Start server
We can start server with below commands
 - npm start 
 - npm run start
 - npm run watch 
 
## npm packages
 - express -> Express JS framework for node js
 - dotenv -> for environment variables
 - cookie-parser -> for use of cookies
 - bcryptjs -> for encrypted binary password
 - mongoose -> for mongo db
 - socket.io  -> For realtime chat 
 - jsonwebtoken -> for jwt token for auth

## API List
We are using, Router and Controllers for routing.
 - login -> for login the application
 - logout -> for logout the application
 - signup -> for sign up the application
 - send message -> for send the messages
 - get message -> for get the message
 - get users -> for get the users

## Steps for All Applications
 - create index file then add npm package and configure all in app.
 - configure mongoose with create seperate file and import in index file.
 - create auth route and then create routes folder and create authRoutes.js file.
 - In authRoutes.js file, create Router with express() and configure routes for login, logout and signup.
 - Now create User module in module folder , with new mongoose schema. then back to authRoutes.
 - Now create new controller folder and create auth controller that will import in authRoutes.
 - in Auth controller, we'll create login, logout and signup routes functionality one by one.
 - same as we'll create steps for messages and users.

