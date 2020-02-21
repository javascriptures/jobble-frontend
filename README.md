# Jobble

## About

Jobble is a job seeker app which allows users to curate their own personal lists of jobs they are interested in applying for. It allows users to apply for jobs directly from the app.

## Links
- Deployed Front End: https://jobble-frontend.herokuapp.com/
- Back End Repo: https://github.com/qusaifares/jobble-backend
- Deployed Back End: https://jobble-backend.herokuapp.com/

## Technologies Used

- ReactJS
- React Router
- Express
- MongoDB
- Mongoose
- [Material UI](https://material-ui.com/guides/composition/#button)
- [react-hooks-global-state](https://www.npmjs.com/package/react-hooks-global-state)
- Enzyme/Jest
- Mocha/Chai

## 3rd Party APIs Used

- GitHub Jobs API
  - https://jobs.github.com/api

## User Stories

- As a user, I want to to sign into Jobble and create a unique username/account
- As a user, I want to view jobs downloaded from GitHub Jobs which are of interest to me
- As a user, I want to save the jobs which I am intersted in into my own personal list
- As a user, I want to view my saved jobs list
- As a user, I want the ability to delete my account

## How to Use Jobble

- On mobile or desktop, connect to the front end at https://jobble-frontend.herokuapp.com/

## How to Build Jobble

- Clone this repo, run 'npm install', and then bring up the front end on your machine by running 'npm start'
- In order to run the front end tests, you will need to run 'yarn install'

## Contribution Guidelines

If you'd like to contribute to this application, feel free to make a pull request! Any suggestions or bug reports are welcome in the repository issues tab.

## Future TODOs

- Incorporate the Login flow for users who have already gone through the SignUp flow.
- Interact with the Jobble API to retrieve and update the unsavedJobs, savedJobs, and discardedJobs collections for each user.
- Allow each user to directly call the GitHub Jobs API to populated a job list for review.
- All each individual use to apply different search criteria when calling the GitHub Jobs API.
- Minor tweaking to make the design more responsive on mobile/tablet.
- Test the Delete API call once that API route is working.
- More seamless incorporation of the react-global-state
