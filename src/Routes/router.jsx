  import React from 'react';
  import { createBrowserRouter } from "react-router";
  import Root from '../Root/Root';
  import Home from '../Pages/Home';
  import Books from '../Pages/Books';
  import BooksDetails from '../Pages/BookDetails';
  import AddBook from '../Pages/AddBook';
  import UpdateBook from '../Pages/UpdateBook';
  import MyBooks from '../Pages/MyBooks';
  import Login from '../Pages/Login';
  import Register from '../Pages/Register';
  import Reset from '../Pages/Reset';
  import PrivateRoute from '../Provider/PrivateRoute';
  import ErrorPage from '../Pages/ErrorPage';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: () => fetch("http://localhost:3000/latest").then(res => res.json())
        },
        {
          path: "all-books",
          element: <Books />,
          loader: () => fetch("http://localhost:3000/books").then(res => res.json())
        },
        {
          path: "book-details/:id",
          element: (
            <PrivateRoute>
              <BooksDetails />
            </PrivateRoute>
          )
        },
        {
          path: "add-book",
          element: (
            <PrivateRoute>
              <AddBook />
            </PrivateRoute>
          )
        },
        {
          path: "update-book/:id",
          element: (
            <PrivateRoute>
              <UpdateBook />
            </PrivateRoute>
          ),
          loader: ({ params }) => fetch(`http://localhost:3000/books/${params.id}`)
        },
        {
          path: "my-books",
          element: (
            <PrivateRoute>
              <MyBooks />
            </PrivateRoute>
          )
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "reset",
          element: <Reset />
        },
        {
          path: "/*",
          element: <ErrorPage/>
        }
      ]
    },
  ]);

  export default router;