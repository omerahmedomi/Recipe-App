import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './routes/About';
import Contact from './routes/Contact';
import Meals from './routes/Meals.jsx';
import Meal_Info from './routes/Meal_Info.jsx';
import Recipe from './routes/Recipe.jsx';
import ErrorElement from './components/ErrorElement.jsx';
import ThankYou from './routes/ThankYou.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
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
    path: "/meals",
    element: <Meals />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/meals/:meal_id",
    element: <Meal_Info />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/meals/:meal_id/recipe",
    element: <Recipe />,
    errorElement: <ErrorElement />,
  },
  {
    path:'/thank-you',
    element: <ThankYou/>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
)
