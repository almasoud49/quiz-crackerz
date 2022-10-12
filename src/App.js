// import {children } from 'react';
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
  children: [
    {path:'/home', element:<Home></Home>},
    {path:'/topics', 
    loader:async()=> {
      return fetch('https://openapi.programming-hero.com/api/quiz')
    },
    element:<Topics></Topics>},

    {path: '/Statistics/:id',
    loader: async({params}) =>{
      return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
    },
    element:<Statistics></Statistics>},
    {path: '/blog', element:<Blog></Blog>},

  ]},
  {path:'*', element:<div>This route not found 404!.</div>}

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;


