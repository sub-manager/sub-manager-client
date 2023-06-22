import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import FormButton from "./FormButton";
import InputField from "../InputField";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:8800/api/user/signin", {
      email: email,
      password: pwd,
    })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:text-gray-800 bg-gray-100">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <InputField
              label={"Email"}
              type={"text"}
              name={"email"}
              placeHolder={"johndoe@gmail.com"}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputField
              label={"password"}
              type={"password"}
              name={"password"}
              placeHolder={"********"}
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <div className="text-sm  dark:text-gray-400">
            Dont have account?
            <a href="/auth/signup" className="focus:underline hover:underline">
              Sign up here
            </a>
          </div>
          <FormButton text={"Login"} />
        </form>
      </div>
    </>
  );
};

export default LoginForm;
