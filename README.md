# Jobble - Job Posting Management for Job Seekers

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
- Material UI
  - [Material Icons](https://material-ui.com/components/icons/#icons)
  - [TextField](https://material-ui.com/components/text-fields/)
  - [Button](https://material-ui.com/guides/composition/#button)
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
- As a user, I want to be able to apply for a job from within the app
- As a user, I want the ability to delete my account

## How to Use Jobble

- On mobile or desktop, connect to the front end at https://jobble-frontend.herokuapp.com/

## How to Build Jobble

- Clone this repo, run 'npm install', and then bring up the front end on your machine by running 'npm start'
- In order to run the front end tests, you will need to run 'yarn install'

## Contribution Guidelines

If you'd like to contribute to this application, feel free to make a pull request! Any suggestions or bug reports are welcome in the repository issues tab.

## Future TODOs

### Future Fixes
- Front end to call DELETE API call to back end when deleting user
- More seamless incorporation of the react-global-state
- Minor tweaking to make the design more responsive on mobile/tablet.


### Future Features
- Refactor Mongo schema to support intended functionality (Switch back end to mySQL?)
- Allow each user to directly call the GitHub Jobs API with individualized search criteria, to populate their unsavedJobs array.
- Actual login, password management, and session management
- Add swipe right/swipe left functionality. Swiping (or using the prev/next button) will bring up the next job post.
- Redo mobile hamburger navigation in Material UI
- Redo additional UI elements in Material UI
