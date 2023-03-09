# AngularRxjsPractice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Purpose of the exercise

Primary goal: Improving my understanding of rxjs (observables, behaviorSubjects, etc) and create a One Page Application that operates based on rxjs as much as possible.
Secondary goal: Enhance my understanding of using angualr features such as gurads and resolvers.

## App Info

As a "guest" (not signed in user) the user can have a look at the list of pets, and add new pets to the list by clicking on the "ADD" button at the top of the list.
Other operations are locked for unauthorized users (such as looking at the pet details page, or deleting/editing an existing pet).

To log in - the user clicks on the "login/signup" button at the top right side of the navbar.
The signup component allows the user to insert their info (name, username, password), and once saved the user is stored in local storgae.
Once logged in, additional features are available in the app, such as the possibility to delete/edit any pet from the list (try hovering over an existing pet and the action buttons will appear), or clicking on a pet name, which will redirect to the pet details page.

## Tech Stack

Angular 15.0.4, (Angular router, Angular guards, Angular resolvers)
RXJS,
TypeScript,
HTML,
SCSS
