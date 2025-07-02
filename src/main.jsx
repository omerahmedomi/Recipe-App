import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './routes/About';
import Contact from './routes/Contact';
import Meals from './routes/Meals.jsx';
import Meal_Info from './routes/Meal_Info.jsx';
import Recipe from './routes/Recipe.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path:"/meals",
    element:<Meals/>
  },
  {
    path:'/meals/:meal_id',
    element: <Meal_Info/>
  },
  {
    path:'/meals/:meal_id/recipe',
    element:<Recipe/>
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
)
