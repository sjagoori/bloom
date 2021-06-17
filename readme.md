<p float="left">
<img src="https://img.shields.io/badge/nextjs-%23000000.svg?style=flat&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white">
<img src="https://img.shields.io/badge/redis-%23DD0031.svg?style=flat&logo=redis&logoColor=white">
<img src="https://img.shields.io/badge/License-GPL%20v3-yellow.svg">
<img src="https://visitor-badge.glitch.me/badge?page_id=sjagoori.bloom">
</p>


![Logo](https://user-images.githubusercontent.com/13199349/117996907-d6ecf900-b342-11eb-90e6-20cd78557a99.png)

# Bloom

Bloom is an application built by students from the minor _[Web Development (dutch)](https://everythingweb.org/)_ that is given by the University of Amsterdam. 

Together with an alumni from the study Communication and Multimedia Design we are realizing her graduation project with the skills we have learned within this minor.

Bloom is an application for patients who's cancer is in remission. They can find guidance and support from people who are or went through a similar process.

## Features

Based on the scope and time of this project the following features will be implemented in this version of the application.

- Finding information with themes
    - As an user, I want information about relevant themes about cancer and remission, so that I would know how to act and expect accordingly in this stage of the process.
- Contact with other people on this application.
    - As an user, I want to have personal contact with people in similar situations, so that I can discuss and reflect on my experiences, and further develop my coping strategies.

  
## Demo

https://bloom-blush.vercel.app/

  
## Run Locally

Clone the project

```bash
  git clone https://github.com/sjagoori/bloom.git
```

Go to the project directory

```bash
  cd bloom
```

Install dependencies

```bash
  npm install
```

Start the server🎉

  
## Installation 

Install bloom with npm

```bash 
  npm install bloom
  cd bloom
  # Run development
  # Terminal 1
  cd backend && nodemon server.js
  # Terminal 2
  cd frontend && npm run dev
```
Alternatively run the project with a global [concurrently](https://www.npmjs.com/package/concurrently) e.g. 
```bash
concurrently "cd bloom/backend && nodemon server.js" "cd bloom/frontend && npm run dev
```

    
## Tech Stack

**Client:** NextJS, React

**Server:** Node, Express

**Issue & Project tracking:** Github projects & issues

### Data


```JSON5
// Example of a document within MongoDB
{
  "_id": {
    "$oid": "60c24e1c1705722b8018228a"
  },
  "email": "nathanb@gmail.com",
  "user_id": "$2b$10$FPpxR8ZPd4tqqtB56HmXKeB8olg0httdMxY4JB2tpLfZ5GDT6PDN6",
  "password": "$2b$10$FPpxR8ZPd4tqqtB56HmXKeHB6VUfNQflgeX/RQRFN7fPnSQZ6F3Zu",
  "name": "Nathan",
  "birthDate": "1990-05-11",
  "residence": "Amsterdam",
  "gender": "man",
  "kankerType": ["Huidkanker"],
  "pictogram": "pictogram-3",
  "about": "Hi, ik ben een student die gelukkig vroeg ontdekte dat ik een vorm van kanker heb, door deze ontdekking..."
}
```

### Git Conventions

|Symbol|What does it do|
|:-:|:--|
| `+` |Commit when successful.|
| `-` |Commit a deletion, be it a file or code.|
| `~` |Commit when something is broken or changed, such as logic or formatting.|
|`[WIP]`|Commit when something is unfinished. <span style="color: red">Refrain from committing unfinished work.</span> |

### Tooling and more

**[Next.js](https://nextjs.org/), The React Framework for Production**  
Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

**[MongoDB](https://www.mongodb.com/)**  
The database for modern napplications. MongoDB is a general purpose, **document-based**, distributed database built for modern application developers and for the cloud era. 

**[Socket.io](https://socket.io/)**  
Socket.IO enables real-time, bidirectional and event-based communication.
It works on every platform, browser or device, focusing equally on reliability and speed. 

**[redis.io](https://redis.io/)**  
Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker.

#### Frontend Dependencies
|Name|Purpose|
|:--|:--|
|[dotenv](https://www.npmjs.com/package/dotenv)|Storing sensitive credentials in a safe environment.|
|[Socket.io](https://www.npmjs.com/package/socket.io)|Two way real time communication.|
|[boring-avatars](https://www.npmjs.com/package/boring-avatars)|Tiny JS React library that generates custom, SVG-based, round avatars.|
|[cookie](https://www.npmjs.com/package/cookie)|HTTP server cookie parsing and serialization.|
|[react-cookie](https://www.npmjs.com/package/react-cookie)|Universal cookies for react.|
|[formik](https://www.npmjs.com/package/formik)|Build forms in React, without the tears.|
|[React-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views)|React component for swipeable views on the web.|

#### Backend Dependencies
|Name|Purpose|
|:--|:--|
|[bcrypt](https://www.npmjs.com/package/bcrypt)|A library to help you hash passwords.|
|[Socket.io](https://www.npmjs.com/package/socket.io)|Two way real time communication.|
|[cors](https://www.npmjs.com/package/cors)|NodeJS package for providing a Connect/Express middleware that can be used to enable CORS with options.|
|[dotenv](https://www.npmjs.com/package/dotenv)|Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. |
|[express](https://www.npmjs.com/package/express)|Fast unopinionated, minimalist web framework for node.|
|[mongodb](https://www.npmjs.com/package/mongodb)|MongoDB driver for NodeJS.|
|[async-redis](https://www.npmjs.com/package/async-redis)|Light-weight wrapper over node_redis library with first class async & promise support.|

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

|Key|Value|
|:-|--|
|`MONGO_USER`|username from the url string|
|`MONGO_PASS`|password that matches the username|
|`MONGO_CLUSTER`|cluster url|
|`AUTH0_SECRET`|a string for AUTH0|
|`AUTH0_CLIENT`|client_id generated by JWT|
|`AUTH0_DOMAIN`|JWT domain for the project|
|`AUTH0_CALLBACK_URL`|callback url for the project|
|`COOKIE_SECRET`|A random string for the cookie hashing|
|`JWT_SECRET_KEY`|JTW string to hash the token|
|`REDIS_URL`|Redis URL generated by redis|
|`REDIS_PASS`|Password for the redis project|
|`REDIS_PORT`|port redis is running on, can be found in url or redis project|

## Documentation

To learn more about the proces of this particular subject, please read the documentation in notion.  
**Disclaimer:** documentation is written in dutch.

[Notion - Bloom - Meesterproef 2021](https://www.notion.so/Bloom-Meesterproef-2021-56ad671624ce4876a17f99848f28a576)

  
## FAQ

#### What is remission?

Remission means that the signs and symptoms of your cancer are reduced. Remission can be partial or complete. In a complete remission, all signs and symptoms of cancer have disappeared.  
If you remain in complete remission for 5 years or more, some doctors may say that you are cured.

Remission is the period between recovery and staying in the hospital for treatment.

#### What will this application not do?

This project is strictly for the mobile environment such as smartphones and tablets, this was a careful consideration from the product owner throughout her graduation project.
The reasoning behind this is because people in remission tend to be a mobile user and prefer chatting through a phone or tablet rather than a desktop or laptop.

For this reason this particular application will not be fully usable in a desktop environment.

## Authors

- [@sjagoori](https://www.github.com/sjagoori)
- [@dewarian](https://www.github.com/dewarian)
- [Eva Valkenburg](https://www.evavalkenburg.nl/)


## Bibliography

L., A. (2019, June 17). Understanding Cancer Prognosis. National Cancer Institute. https://www.cancer.gov/about-cancer/diagnosis-staging/prognosis#:%7E:text=Remission%20means%20that%20the%20signs,say%20that%20you%20are%20cured.


## License

[MIT](https://choosealicense.com/licenses/gpl-3.0/)

  