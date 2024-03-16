# Nawyha
In the heart of Veridian, where the city's pulse thrummed through towering skyscrapers, a revolutionary app called Nawyha reshaped apartment hunting. Created by visionary Mostafa Essam, Nawyha simplified the search with its sleek interface and curated listings.

Sarah, a young professional yearning for the perfect abode, turned to Nawyha. Within moments, she found herself immersed in a world of stunning apartments tailored to her preferences. Filtering options effortlessly, she discovered a charming loft overlooking the city park.

With a few taps, Sarah scheduled a viewing. As she stepped into the sunlit rooms, she knew she had found her sanctuary. Thanks to Nawyha, her dream apartment was no longer just a fantasy—it was a tangible reality.

## About The Project
> A simple listing apartments app that allow the user to see more details about each apartment.

## Functionality requirements:
- Backend Application:
    - An API endpoint for listing apartments.
    - An API endpoint for getting apartment details.
    - An API for adding apartments.
- Database:  
    - NoSQL database 
- Responsive Frontend Application:
    - Apartment listing page.
    - Apartment details page.

- Mobile applications:
    - Apartment listing page.
    - Apartment details page.
## Built with
- Backend: [ExpressJs](https://expressjs.com), [NodeJs](https://nodejs.org)
- Frontend: [NextJs](https://nextjs.org/)
- Mobile App: [React Native](https://reactnative.dev/)
- Database: [MongoDB](https://www.mongodb.com/) 
- ODM: [mongoose](https://mongoosejs.com/)
- Containerization: [Docker](https://www.docker.com)

## Getting Started

> This is an list of needed instructions to set up your project locally, to get a local copy up and running follow these instructions.

## Installation

**Install docker**:

```sh
https://docs.docker.com/engine/install/
```

**_Clone the repository_**

```sh
git clone git@github.com:GeekMind00/Nawyha.git
```

**_Navigate to repository directory_**

```sh
$ cd Nawyha
```  
## Project Setup
**Create .env file**
- Navigate to the config folder in Backend
```sh
$ cd backend/config
``` 
- Add api.env file to current directory with the following variable
```console
MONGO_URI='mongodb://database:27017/nawyha'
``` 

**Run the Backend & Database**
```sh
$ docker-compose up
``` 
**Run the Frontend app on another terminal**

```sh
$ cd frontend
```  
```sh
$ cd npm run dev
```  
**Run the Mobile App on another terminal**

```sh
$ cd mobile\ app
```  
```sh
$ cd npm start
```  

## Postman Use Case Examples
[Nawyha Collection](https://www.postman.com/lunar-water-612381/workspace/nawyha): Containing all the examples of the app routes 