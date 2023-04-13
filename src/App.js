import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from 'react-router-dom';
import CreateShipment from './pages/CreateShipment';
import { action as CreateShipmentAction } from './components/CreateShipmentForm';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ShippingOrderConfirmation from './pages/ShippingOrderConfirmation';
import ShippingOrderDetail from './pages/ShippingOrderDetail';
import ShippingOrderSearchPage from './pages/ShippingOrderSearchPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/createShipment',
        element: <CreateShipment />,
        action: CreateShipmentAction,
      },
      { path: '/searchShipment', element: <ShippingOrderSearchPage /> },
      {
        path: '/shippingOrderConfirmation',
        element: <ShippingOrderConfirmation />,
      },
      {
        path: '/shippingOrder/:shippingOrderId',
        element: <ShippingOrderDetail />,
        //loader: shippingOrderDetail,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
