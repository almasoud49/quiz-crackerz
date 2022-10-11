import {children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Home/Blog/Blog';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
  {
  path: '/', 
  element:<Main></Main>,
  children:[
  {path:'/home', element:<Home></Home>},
  {path:'/topics',
  loader:()=>{
    return fetch('https://openapi.programming-hero.com/api/quiz')
  } ,
  element:<Topics></Topics>},
  {path: '/Statistics',
  loader: () =>{

  },
  element:<Statistics></Statistics>},
  ]
  },

{path: '/blog', element:<Blog></Blog>},
{path:'*', element:<div>This route not found 404!.</div>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      {/* <div className="navbar bg-red-400 w-full h-3">
  <div className="">
    <a className="btn btn-ghost normal-case text-xl">Quiz Contest</a>
  </div>
  <div className="flex bg-green-200">
    <ul className="menu menu-horizontal p-0">
      <li><a>Home</a></li>
      <li><a>Topics</a></li>
      <li><a>Statistics</a></li>
      <li><a>Blog</a></li>
    </ul>
  </div>
</div> */}
    </div>
  );
}

export default App;


