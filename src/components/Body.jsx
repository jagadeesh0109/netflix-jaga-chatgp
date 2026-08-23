import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {addUser} from "../utills/UserSlice"


const Body = () => {
  const dispatch = useDispatch();
useEffect(() => {
  console.log("ln12--->");
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid, email, displayName} = user;
      console.log("ln15--->user-",user, "uid-",uid);
      dispatch(addUser({uid: uid, email: email, displayName: displayName}))
    } else { /* empty */ }
  });
})

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/browse",
    element: <Browse/>
  }
]);

  return (
    <div>
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body