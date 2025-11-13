import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../Pages/Home';
import Books from '../Pages/Books';
import BookDetails from '../Pages/BookDetails';
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
        loader: () => fetch("https://book-haven-server-alpha.vercel.app/latest").then(res => res.json())
      },
      {
        path: "all-books",
        element: <Books />,
        loader: () => fetch("https://book-haven-server-alpha.vercel.app/books").then(res => res.json())
      },
      {
        path: "book-details/:id",
        element: (
          <PrivateRoute>
            <BookDetails />
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
        loader: ({ params }) => fetch(`https://book-haven-server-alpha.vercel.app/books/${params.id}`).then(res => res.json())
      },
      {
        path: "my-books",
        element: (
          <PrivateRoute>
            <MyBooks />
          </PrivateRoute>
        ),
        loader: () => fetch("https://book-haven-server-alpha.vercel.app/my-books").then(res => res.json())
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
      }
    ]
  },
]);

export default router;