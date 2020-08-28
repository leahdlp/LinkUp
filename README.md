# README

## Name
[LinkUp](https://link-ups.herokuapp.com/) is a full stack website clone of Meetup. The site is for finding and building local communities; while meeting new people, learning new things, finding support, getting out of comfort zones, and exploring passions together.

## Description
This is a single page web application using React, Redux, and SCSS on the frontend, while implementing Ruby on Rails for the backend.

## Features
In the current production version of LinkUp, the features include:
  * User Authorization and Authentification
    * Demo User: visitor of site can both login or sign up as one
    * Visitor of site can create their own account and login under it
    * User stays logged in between individual browsing sessions
  * Groups
    * Any visitor of the site has access to a list of all the groups on the site
    * Any visitor of the site can create a group and view individual group pages
      * in creating a group, the user is allowed to specify name and description and pick a location and category from list of available choices
    * Creator of a group is able to edit and delete their group
  * Members
    * A current member of a group is able to leave the group and no longer be a member
    * A current non-member of a group is able to join the group and become a member
    * The group creator has no membership options, and is only able to edit or delete the group

## Website Visuals
[signup]: https://github.com/leahdlp/LinkUp/blob/master/app/assets/images/signup.png
[login]: https://github.com/leahdlp/LinkUp/blob/master/app/assets/images/login_page.png
[dropdown]: https://github.com/leahdlp/LinkUp/blob/master/app/assets/images/dropdown.png
[createForm]: https://github.com/leahdlp/LinkUp/blob/master/app/assets/images/create_group.png
[errors]: https://github.com/leahdlp/LinkUp/blob/master/app/assets/images/errors.png
[show]: https://github.com/leahdlp/LinkUp/blob/master/app/assets/images/group_show.png
[members]: https://github.com/leahdlp/LinkUp/blob/master/app/assets/images/members.png
[groupOwner]: https://github.com/leahdlp/LinkUp/blob/master/app/assets/images/group_owner.png

### Sign Up Page
![alt text][signup]
* User is able to sign up as a Demo User or create an account with name, email, and password (length must be at least 10 characters)

### Login Page
![alt text][login]
* User is able to login under Demo User account

### Dropdown Menu
![alt text][dropdown]
* A dropdown menu when mouse hovers

### Create Group Form
![alt text][createForm]
* Form to create a group with dropdown menus where user can select location and category from list of possibilities

### Rendering Errors
![alt text][errors]
* Errors render above forms

### Group Show Page
![alt text][show]
* User show page that allows you to switch between tabs with options of: About, Events, Members, and Photos
  * Members tab displays the list of current grouop members
  * About tab dispays the description set by the group creator
* Displays members in a side section and subcategories on the lower section of the page

### Fluctuation of Membership Button and List Display
![alt text][members]
* Members are displayed and updated dependingo on button state
  * Button state changes depending on whether User is able to join or leave the group
  
### Fluctuation of Show Page Nav Buttons - Owner of Group may Delete or Edit It
![alt text][groupOwner]
* When current user is the creator of the group they do not have buttons that fluctuate membership, and instead of displayed buttons to edit or delete the current group

## Code Visuals 
[actions]: https://github.com/leahdlp/LinkUp/blob/master/app/assets/images/actions.png
[authRoutes]: https://github.com/leahdlp/LinkUp/blob/master/app/assets/images/auth_routes.png
[errorsReducer]: https://github.com/leahdlp/LinkUp/blob/master/app/assets/images/errors_reducer.png
[groupCon]: https://github.com/leahdlp/LinkUp/blob/master/app/assets/images/group_controller.png
[groupRed]: https://github.com/leahdlp/LinkUp/blob/master/app/assets/images/group_reducer.png
[index]: https://github.com/leahdlp/LinkUp/blob/master/app/assets/images/index.png
[authModel]: https://github.com/leahdlp/LinkUp/blob/master/app/assets/images/user_auth_code.png
[schema]: https://github.com/leahdlp/LinkUp/blob/master/app/assets/images/schema.png

### The Database Schema
![alt text][schema]

### The User Model with User Auth Implementation
![alt text][authModel]

### The Groups Controller
![alt text][groupCon]

### The Auth Routes: Users can only visit certain routes conditionally depending on login satus
![alt text][authRoutes]

### Groups Actions
![alt text][actions]

### Groups Reducer
![alt text][groupRed]

### Reducer for handling errors (group errors in this example)
![alt text][errorsReducer]

### Component that Renders Group Index
![alt text][index]

## Installation and Documentation
  * run `bundle install` to install Ruby on Rails gems
  * run `npm install` to install package json and dependencies
  * run `npm start` to start webpack
  * run `rails s` or `rails server` to start server, then navigate to `localhost:3000` in browser
  
## Project Status
Project is still being developed. Features to come are:
  * Events Feature:
    * users may create, delete, and edit events as long as they are the creator of the group in which the event belongs to
    * any user may see an event's page and the events index
    * users can see upcoming events on each group's page
  * Search Bar Feature:
    * allows user to search for group/event by entering in name or category and specifying location
