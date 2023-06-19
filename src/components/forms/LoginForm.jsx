import Axios from "axios";
import { useEffect, useState } from "react";
// import { BsGithub, BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [cookie, setCookie] = useCookies("");

  const handleLogin = async () => {
    await Axios.post("http://localhost:8800/api/user/signin", {
      email: email,
      password: pwd,
    })
      .then((res) => {
        console.log(`current user: ${res}`);
        console.log(res.data.token);
        setCookie("token", res.data.token);
        navigate("/home");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    handleLogin();
  });

  return (
    <>
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100 ">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center dark:text-gray-400">
          Dont have account?
          <a href="#" className="focus:underline hover:underline">
            Sign up here
          </a>
        </p>
        <div className="my-6 space-y-4"></div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-400" />
          <p className="px-3 dark:text-gray-400">OR</p>
          <hr className="w-full dark:text-gray-400" />
        </div>
        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm">Email</label>
              <input
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="leroy@jenkins.com"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm">Password</label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <input
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                placeholder="*****"
              />
            </div>
          </div>
          <button
            type="button"
            className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
          >
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
