# Neural Network

## Prerequisites

Before you begin, ensure you have met the following requirements:

* install node.js (from their website) LTS version
* yarn (brew install yarn) if you have homebrew
* python3
* python-dotenv (pip install python-dotenv)
* flask (pip install flask)

## Installing the react-flask-app

To install react-flask-app follow these steps:

```
git clone the repo down
```
IF IT IS YOUR FIRST TIME CLONING: 
```
cd react-flask-app
cd api
```
RUN THESE 3 COMMANDS (If first time cloning)
```
python3 -m venv venv
. venv/bin/activate
pip install flask python-dotenv
```
* creates venv inside api dir
* activates it
* installs flask and python-dotenv

To run the application:
```
cd react-flask-app
npm install
yarn start
yarn start-api
```

Notes for running the app:
* yarn start - runs the frontend, opens the react app, leave it opened in a terminal and it monitors the frontend files (if a change is made, the project restarts automatically)
* yarn start-api - runs the flask backend, leave it opened in a terminal, 


### Using the react-flask-app: `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Contributing to neural network

To contribute to neural network, follow these steps:

1. Create a branch: `git checkout -b <branch_name>`.
2. Make your changes and commit them: `git commit -m '<commit_message>'`
3. Push to the original branch: `git push origin <project_name>/<location>`
4. Create the pull request.

