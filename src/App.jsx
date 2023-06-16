import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout";
// Pages
import LandingPage from "./pages/LandingPage";
// Components
import LoginForm from "./components/forms/LoginForm";
import AuthPage from "./pages/AuthPage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="auth/login" element={<AuthPage />}>
          <Route index element={<LoginForm />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
