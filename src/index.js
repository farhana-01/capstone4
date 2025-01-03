import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './componands/Layout/Layout';
import SignUp from './componands/SignUp/SignUp';
import SignIn from './componands/SignIn/SignIn';
import Error from './componands/ErorrPage/Erorr';
import MyAccount from './componands/My account/MyAccount';
import UpdateProfile from './componands/My account/update-profile/UpdateProfile';
import ProtectedRoute from './componands/Protecte/Protecte';
import ProductDetail from './componands/Product-Details/ProductDetail';
import MobileDetaile from './componands/Mobile-section/MobileDetaile';
import TrimerDetail from './componands/Trimer-Section/TrimerDetail';
import WatechesDetails from './componands/Wateches/WatechesDetails';
import OrderDelivery from './componands/OrderDelevryCompo/OrderDelvry';
import { Provider } from 'react-redux';
import { store } from './store';
import TrackOder from './componands/TrackOder/TrackOder';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <App />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
            path: "/sign-in",
            element: <SignIn />,
          },
          {
            path: "/account",
            element: <ProtectedRoute> <MyAccount /></ProtectedRoute>,
          },
          {
            path: "/track-order",
            element:<TrackOder/> 
          },
          
          {
            path: "/profile",
            element: <ProtectedRoute><UpdateProfile/></ProtectedRoute> 
          },
          {
            path: "/product-Details/:id",
            element: <ProtectedRoute><ProductDetail/></ProtectedRoute> 
          },
          {
            path: "/mobile-Detail/:id",
            element: <ProtectedRoute><MobileDetaile/></ProtectedRoute> 
          },
          {
            path: "/trimer-Detail/:id",
            element: <ProtectedRoute><TrimerDetail/></ProtectedRoute> 
          },
          {
            path: "/wateches-Detail/:id",
            element: <ProtectedRoute><WatechesDetails/></ProtectedRoute> 
          },
          {
            path: "/order-delvry",
            element: <ProtectedRoute><OrderDelivery/></ProtectedRoute> 
          }
    
    
    
    
    
      ],
      errorElement: <Error/>
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Provider store={store}>
       <RouterProvider router={router} />
  </Provider>,
);


