import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Layout from "./Layout.jsx";

import DonorForm from "./pages/DonorForm.jsx";
import Donors from "./pages/Donors.jsx";
import BloodRequestForm from "./pages/BloodRequestForm.jsx";
import RequestList from "./pages/RequestList.jsx";
import DonorProvider from "./provider/DonorProvider.jsx";
import RequestProvider from "./provider/RequestProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <DonorForm></DonorForm>,
      },
      {
        path: "/donors",
        element: <Donors></Donors>,
      },
      {
        path: "/request",
        element: <BloodRequestForm></BloodRequestForm>,
      },
      {
        path: "/requestlist",
        element: <RequestList></RequestList>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DonorProvider>
      <RequestProvider>
        <RouterProvider router={router} />
      </RequestProvider>
    </DonorProvider>
  </StrictMode>
);
