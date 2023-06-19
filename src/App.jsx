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
import HomePage from "./pages/HomePage";
import RegisterForm from "./components/forms/RegisterForm";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />}>
          <Route path="/auth/login" element={<LoginForm />} />
          <Route path="/auth/signup" element={<RegisterForm />} />
        </Route>
        <Route path="home" element={<HomePage />} />
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
