# React-Trello

This project is very simple trello clone.<br>
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Current technologies stack:
* React
* Bootstrap

## Instruction

In the project directory:

### `npm install`
Install all dependencies

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder.

### `serve -s build`
Run static server, should be installed serve `npm install -g serve`

## Technical requirements
 
On front-end:
- [X] Angular or Angularjs or React or Vue
- [X] any css framework of your choice(bootstrap, materialize, semantic-ui,  ui-kit)
- [ ] any helpful npm/yarn packages(for example: lodash)

On back-end:
- [ ] Node.js web framework of your choice(such as express, koa, etc)
- [ ] SQL, or NoSQL database to store data(MySQL, PostgreSQL, MongoDB, etc)
- [ ] any helpful npm/yarn packages of your choice

Unauthorized users can: 
- [X] only view a board, with groups of task, login/register to app to do more

Authorized users can: 
- [X] create, 
- [X] delete, 
- [X] update tasks and groups, 
- [X] log out,
- [X] drag’n’drop tasks inside the group and between groups, 
- [X] view its details(in modal window).

Task-item should have: 
- [X] id
- [X] title(which is viewed on a board-view and in modal)
- [X] description(only in modal)
- [X] due date(which is viewed on a board-view and in modal)
- [ ] *attachments(images upload, viewed only in modal)

Group-item should have: 
- [X] id
- [X] title

User should have: 
- [ ] name
- [ ] email

General

- [X] Modal opens by click on task by authorized user
- [X] When unauthorized user clicks on tasks modal contains a log-in/register form

- [ ] Authorization should be implemented with jwt-tokens
- [ ] *Authorization with social network(google+, facebook, twitter, etc)

- [ ] Writing tests(unit, integration, etc) is a big plus <br>

Additional tasks marked with * (completing them is a plus)