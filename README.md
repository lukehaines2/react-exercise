# Circus Street React Exercise

## Luke Haines

Hi guys, just thought I'd put a few notes in here for your perusal.

### Assumptions:

- Lessons data has been pre-fetched from `staticData`.
- There will never be checked lessons on first render (meaning I built a more naive component).

### Notes:

- Using `isLoading` for network requests and async blocking.
- Delay included to make sure we see the disabled state while submitting.
- Didn't use `Moize` package.
- Testing isn't my strong suit (not required in my day job)! So I didn't go further than writing+passing the suggested examples.

### Structure:

- Components -> compartmentalised JS, SCSS and tests.
- Actions
- Store -> Reducers, Static Data, Selectors.
- Style -> containing a few global styles.
- Package.json, untouched but modules updated for audit.

Thanks for your time!

<br>

This is a read-only repo. Please fork to your own github and commit your changes there.

## Description:

We want to build a small app that will give us a list of lessons to select and then submit to an API. 
For the purposes of this exercise, the API does not exist so we are making an async request before catching the error and returning a successful response.
After sending the data to the API, the page must disable any further interaction before the response is received. Once the successful response is received, the page can enable again, allowing you do make changes and submit you selection again.
The format of the selected lessons to send to the API should be as follows:

POST: https://admin.circusstreet.com/fake (this does not exist but you can use the address for the sake of argument)

BODY: 
`{
  lessonIds:[61,62,63]
}`


### Designs:
Here are the 3 states for the app:

1. Initial state 
![picture alt](./readme/1-unchecked.png "Initial state")

2. Some lessons selected
![picture alt](./readme/2-lessons-checked.png "Some lessons selected")

3. Saving the selected lessons 
![picture alt](./readme/3-waiting-for-response.png "Saving the selected lessons")

## Files:

You will find the following files in the src dir. Some of these files are complete and you will not need to change them and in the other files you will need to add some code to make the app work as desired.

In the test suite there are also a few tests for you to write to test some of your code

### No need to change these:
* all-lessons.json: lesson fixture data
* index.js: main setup file is set up for you
* reducer.js: the root reducer
* setupTests.js: test setup file

### Code will need adding to these files:
* index.js
* index.js: the main connected component view
* SelectedLessons.test.js: the test suite for the SelectedLessons component
* index.js: the reducer for selected lessons
* styles.scss: the SASS
* updateSelectedLessons.js

These files are in place as a guide to help, but don't feel you need to rigidly stick to this. Feel free to add code anywhere you like to make this work the way you think it should. If you want to place code in new files, create them, if you don't need the existing one, delete them!

## Getting started:

Please start by forking this repo to your own account.

Then clone the repo into your local environment

run `npm i` to get the dependencies

run `npm start` to start the app

run `npm test` to run the test suite 

Make commits at any point you feel appropriate

Once you are satisfied with your work, push the code up to the repo on your own account and give us access.

Good Luck!
