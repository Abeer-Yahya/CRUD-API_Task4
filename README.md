# REST API Task

In this repo, you can find **REST API** with full **CRUD** functionality and stores data in a **PostgreSQL Database**.

To **add new painting, update or remove an existing one**, you must **register** as a new user then **login** with your username and password,

Also, there is a **logger** that records the user's IP and the endpoints accessed with their respective HTTP methods in **MongoDB**.

[API Demo]()

## API EndPoints

### Register and Login:

- **Register a new user** POST: /api/v1/paintings/register
- **Login with an existing user** POST: /api/v1/paintings/login

### CRUD operations:

- **Get All data** GET: /api/v1/paintings

- **Get single item** GET: /api/v1/paintings/:id

- **Create new item** POST: /api/v1/paintings

```JSON
// Request body
{
 "title" : "text",
 "year": number,
 "artist": "text",
 "url": "link from google art",
 "location": "text"
}
```

- **Update an item** PUT: /api/v1/paintings/:id

```JSON
// Request body
{"location" : "text"  }
```

- **Delete an item** DELETE: /api/v1/paintings/:id

### Logs:

- **Get All Logs** GET: /api/v1/paintings/mongo/logs

## Getting started

1. run npm i
2. Create PostgreSQL tables as in the schema.sql file
3. run nodeman server

## Technologies Used

- Node.js

### NPM packages

- [Express](https://www.npmjs.com/package/express) : web framework for Node.js.
- [Joi](https://www.npmjs.com/package/joi) : For input validation.
- [dotenv](https://www.npmjs.com/package/dotenv) : To use .env file.
- [prisma](https://www.npmjs.com/package/prisma) : a server-side library that helps with reading and writing data to the databasee in an efficient way.
- [@prisma/client](https://www.npmjs.com/package/@prisma/client) : Auto-generated and type-safe query builder for Node.js.
- [bcrypt](https://www.npmjs.com/package/bcrypt) : To hash passwords.
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) : to parse Cookie header and populate req.cookies with an object keyed by the cookie names..
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) : To implement json web tokens.
- [mongoose](https://www.npmjs.com/package/mongoose) : To use MongoDB.
- [nodeman](https://www.npmjs.com/package/nodeman) : To restart app automatically after every change.
