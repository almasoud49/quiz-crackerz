
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Home/Blog/Blog';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics.js';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
  {
  path: '/', 
  element:<Main></Main>,
  errorElement:<ErrorPage/>, 
  children: [
    {
      path:'/home',
      loader:async()=> {
      return fetch('https://openapi.programming-hero.com/api/quiz')
      }, 
      element:<Home></Home>
  },
  {
    path:'/topics',
      loader:async()=> {
      return fetch('https://openapi.programming-hero.com/api/quiz/01')
      }, 
    element:<Topics></Topics>
    
},
  {
      path: '/statistics',
    loader: async() =>{
      return fetch('https://openapi.programming-hero.com/api/quiz')
    },
    element:<Statistics></Statistics>
  },
    {path: '/blog', element:<Blog></Blog>},

  ]},
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;


