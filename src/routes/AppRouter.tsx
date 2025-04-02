import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));
const EzyStoreLayout = lazy(() => import("@layouts/MainLayout/EzyStoreLatout"));
const AuthLayout = lazy(() => import("@layouts/MainLayout/AuthLayout"));

// components
import { LottieHandler, PageSuspenseFallback } from "@components/feedback";
import Error from "@pages/Error";
import Shop from "@pages/Shop";
import ProductDetails from "@pages/ProductDetails";
import ForgotPassword from "@pages/ForgotPassword";
import ResetPassword from "@pages/ResetPassword";
import Cart from "@pages/Cart";
import Contact from "@pages/Contact";

// pages
const Home = lazy(() => import("@pages/Home"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const HomePage = lazy(() => import("@pages/HomePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <LottieHandler type="loading" message="Loading please wait..." />
        }
      >
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PageSuspenseFallback>
            <Home />
          </PageSuspenseFallback>
        ),
      },
    ],
  },
  {
    path: "/EzyStore",
    element: (
      <Suspense
        fallback={
          <LottieHandler type="loading" message="Loading please wait..." />
        }
      >
        <EzyStoreLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PageSuspenseFallback>
            <HomePage />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "shop",
        element: (
          <PageSuspenseFallback>
            <Shop />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "cart",
        element: (
          <PageSuspenseFallback>
            <Cart />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "product/:id",
        element: (
          <PageSuspenseFallback>
            <ProductDetails />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "contact",
        element: (
          <PageSuspenseFallback>
            <Contact />
          </PageSuspenseFallback>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <Suspense
        fallback={
          <LottieHandler type="loading" message="Loading please wait..." />
        }
      >
        <AuthLayout />
      </Suspense>
    ),
    children: [
      {
        path: "login",
        element: (
          <PageSuspenseFallback>
            <Login />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "register",
        element: (
          <PageSuspenseFallback>
            <Register />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "forgetPassword",
        element: (
          <PageSuspenseFallback>
            <ForgotPassword />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "resetPassword",
        element: (
          <PageSuspenseFallback>
            <ResetPassword />
          </PageSuspenseFallback>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
