# React Router

## Lesson Objectives:

- Describe the difference between server-side and client-side routing
- Add client-side routing to our React apps using React Router
- Set up React Router to enable common browser behavior
- Understand built in React Router components (Route, Router, Switch, Link, Redirect)

## Client-side Routing

Client-side `routing` is a bit of a misnomer.

On the server, `routing` generally refers to the way we
define the URLs and RESTful resources that make up our application. Whether
we are asking for data from the database or persisting data, our server
needs to know where the data lives. Server `routes` help us keep track of this information.

In the browser, things are a little different. When we build Single-Page Applications, we render
our data inside of the browser. The data lives on a server, so our data's "addresses" have
been defined elsewhere. We only need to know what these pre-defined addresses are to consume them.
We'll still have a lot of different `views` for our data, and we won't want to
show all of them on the page at once. Client-side `routing` is how we'll describe
which views we are showing on the page at any given time.

## Routing in React

React does not provide built-in functionality for client-side routing. However, we can use external libraries specifically designed for this purpose, such as React Router. React Router is a popular routing library that allows us to handle client-side routing seamlessly in our React applications.

In this lesson, we will focus on React Router v6, the latest version of the library. React Router v6 introduced significant changes and improvements over previous versions. It offers a simpler and more intuitive API, enhanced nested routing capabilities, and improved programmatic navigation.

To get started with React Router v6, let's set it up in a new React application:

- Create a new React application using `npx create-react-app`.
- Navigate to the project directory.
- Install React Router v6 using `npm install react-router-dom@next`

### LAB: Adding Debits and Credits

Let's add some more features to our banking app, using the following `User Stories`!

- The Debits index endpoint is located at `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits`
- The Credits index endpoint is located at `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits`

#### Updating the Account Balance

```text
Making the Account Balance dynamic:

GIVEN I am on any page displaying the Account Balance
WHEN I view the Account Balance display area
THEN I should see an Account Balance that accurately represents my Debits subtracted from my Credits
AND I should be able to see a negative account balance if I have more Debits than Credits
```

#### Adding Debits

```text
Viewing the Debits page:

GIVEN I am on the Home Page
WHEN I click on 'Debits'
THEN I should be redirected to the Debits page
AND I should see a title of 'Debits' on the page
```

```text
Displaying debits:

GIVEN I am on the Debits page
WHEN I view the Debits display area
THEN I should see all of my debits displayed
AND each Debit should display a Debit description
AND each Debit should display a Debit amount
AND each Debit should display a Debit date
```

```text
Viewing the Account Balance on the Debits page:

GIVEN I am on the Debits page
WHEN I view the Account Balance display area
THEN I should see my Account Balance displayed
```

```text
Adding debits:

GIVEN I am on the Debits page
WHEN I enter a new Debit description
AND WHEN I enter a new Debit amount
AND WHEN I click 'Add Debit'
THEN I should see my new debit added to the Debits display area with the current date
AND I should see my Account Balance updated to reflect the new Debit
```

```text
Viewing the Account Balance on the Debits page:

GIVEN I am on the Debits page
WHEN I view the Account Balance display area
THEN I should see my Account Balance displayed
```

#### Adding Credits

```text
Viewing the Credits page:

GIVEN I am on the Home Page
WHEN I click on 'Credits'
THEN I should be redirected to the Credits page
AND I should see a title of 'Credits' on the page
```

```text
Displaying debits:

GIVEN I am on the Credits page
WHEN I view the Credits display area
THEN I should see all of my Credits displayed
AND each Debit should display a Debit description
AND each Debit should display a Debit amount
AND each Debit should display a Debit date
```

```text
Viewing the Account Balance on the Credits page:

GIVEN I am on the Credits page
WHEN I view the Account Balance display area
THEN I should see my Account Balance displayed
```

```text
Adding Credits:

GIVEN I am on the Credits page
WHEN I enter a new Debit description
AND WHEN I enter a new Debit amount
AND WHEN I click 'Add Debit'
THEN I should see my new debit added to the Credits display area with the current date
AND I should see my Account Balance updated to reflect the new Debit
```

```text
Viewing the Account Balance on the Credits page:

GIVEN I am on the Credits page
WHEN I view the Account Balance display area
THEN I should see my Account Balance displayed
```