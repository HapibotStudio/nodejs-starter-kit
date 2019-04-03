
# Node.js Starter Kit

Starter Kit aimed for authoring data API backends with Node.js and PostgreSQL. 


## Tech Stack

* [Docker](https://www.docker.com/), [Node.js](https://nodejs.org/en/) — core platform and dev tools
* [Express](https://expressjs.com/) — common HTTP-server feature
* [PostgreSQL](https://www.postgresql.org/) — SQL, document, key/value data store; data acess and migrations
* [Mocha](https://mochajs.org/) - JavaScript Test Framework
* [Chai](https://www.chaijs.com/) - BDD/TDD assertion library

## Directory Layout

```bash
.
├── /models/                                # Base classes to define the business objects of the application
│   ├── /index.js                           
│   ├── /user.js                             
├── /seeders/                               # Scripts with sample data
│   ├── /users.js                            
├── /server/                                # Entry point for the API routes
│   ├── /api/                               
│   |   ├── /model/                         # Models controllers
│   |   |   ├── /controller.js              
│   |   |   ├── /routes.js                   
│   |   ├── /user/                          
│   |   |   ├── /controller.js              
│   |   |   ├── /routes.js                  
│   |   ├── /api.js                         
│   ├── /config/                             
│   |   ├── /middlewares.js                  
│   ├── /utils/                              
│   |   ├── /helper.js                      # Useful methods used across the application
│   ├── /server.js                          
├── /test/                                  # Test methods
│   ├── /user/                              
│   |   ├── /user.test.js                   
│   ├── /utils/                             
│   |   ├── /helpers.test.js                
├── docker-compose.yml                      # Defines Docker services, networks and volumes
├── Dockerfile                              # Commands for building a Docker image
├── index.js                                # Express.js application
├── package.json                            # List of project dependencies
├── .env-example                            # .env file structure example
└── postgres-initdb.sh                      # Configuration script for the PostgreSQL Docker container
``` 


## Prerequisites

* [Docker](https://www.docker.com/) Community Edition v17 or higher
* [VS Code](https://code.visualstudio.com/]) editor (preferred)

## Getting Started

Clone the repo, create an ```.env``` file based on ```.env.example``` file and changing the content to match your specifications and run `docker-compose up`:

```bash
git clone https://github.com/HapibotStudio/nodejs-starter-kit.git
cd nodejs-starter-kit                 # Change current directory to the newly created one
docker-compose up --build             # Launch Docker containers with the Node.js API app running inside
```

The API server must become available at [http://localhost:3000](http://localhost:3000).

In order to open a shell from inside the running "api" container, run:

```bash
docker exec -it api sh
```

Similarly, if you need to open a PostgreSQL shell, on "database-api" container, execute this command:

```bash
docker exec -it database-api sh
```

For the full list of automation scripts available in this project, please reffer to "scripts"
section in the [`package.json`](./package.json).


## Testing

First, on "Dockerfile" file, change ``` CMD ["npm", "start"] ``` to ``` CMD["npm", "run", "test"] ```. 
Then, just run:

```bash
docker-compose up
```




