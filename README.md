# ETROS_kilometer_track

### README WIP 🤪

#### Workflow when the user uses the application : 
https://whimsical.com/etros-kilometre-app-admin-S23fJhPQUWWo2pTZY1GGBE

#### 2 Design suggestions to build our frontend: 

https://www.figma.com/file/OJ0EL4J4LTljPRVTKCxYZQ/Etros-Cars?node-id=0%3A1

https://www.figma.com/file/nIsrrvRJPYscmc5uhrez3q/ETROS-Car-Renting-Appliction?node-id=13%3A864


# Setup backend environment 

### Requirement:

* [Docker](https://www.docker.com/products/docker-desktop/)
* [Node ](https://nodejs.org/en/download/) 

## Install dependencies

* have docker up and running.

* go into the folder server_etros_kilometer_track and run the command line:
This command will install yarn, download postgres image and create the container for the application and run the migration to create the database and the tables. 


`npm install --global yarn && yarn  && docker build -t my-postgres-db ./ && docker run --name Etros_kilometer_tracker -e POSTGRES_PASSWORD=docker -p 5432:5432 -d my-postgres-db && yarn typeorm migration:run`

* After this command you have the backend environment ready. So to start the server by running 

`yarn dev:server`
