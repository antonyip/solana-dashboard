import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage'
import RootPage from './pages/RootPage'
import Index from './pages/Index'
import Fees from './pages/Fees'
import NFT from './pages/NFT'
import Blockchain from './pages/Blockchain'
import Speed from './pages/Speed'
import Users from './pages/Users'
import AboutPage from './pages/AboutPage'
import Resources from './pages/Resources'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
          path: 'Blockchain/',
          element: <Blockchain />,
        },
        {
          path: 'Speed/',
          element: <Speed />,
        },
        {
          path: 'Users/',
          element: <Users />,
        },
        {
          path: 'NFT/',
          element: <NFT />,
        },
        {
          path: 'Fees/',
          element: <Fees />,
        },
        {
          path: 'About/',
          element: <AboutPage />,
        },
        {
          path: 'Resources/',
          element: <Resources />,
        },
      ],
    },

  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

