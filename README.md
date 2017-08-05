# My Reads React Nanodegree Project 1
My Read is a react application allow user to search, select and categorize book in their nominated bookshelf. The application is created with create react app, and react-router

## Backend Server

[`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## To Start The application
* Clone the repository
* Run `npm install`
* After all the dependency installed, run `npm start`
* The App can be access in `localhost:3000`
