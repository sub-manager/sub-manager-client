import { useState } from "react";
import InputField from "../InputField";
import FormButton from "../forms/FormButton";
import Axios from "axios";
import { useNavigate } from "react-router";
const RegisterForm = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:8800/api/user/signup", {
      ...newUser,
    });
    navigate("/auth/login");
  };
  return (
    <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:text-gray-800 bg-gray-100">
      <h2 className="mb-3 text-3xl font-semibold text-center">Register</h2>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <InputField
            label={"username"}
            type={"text"}
            name={"username"}
            placeHolder={"john doe"}
            onChange={(e) => {
              setNewUser({ ...newUser, username: e.target.value });
            }}
          />
          <InputField
            label={"Email"}
            type={"text"}
            name={"email"}
            placeHolder={"johndoe@gmail.com"}
            onChange={(e) => {
              setNewUser({ ...newUser, email: e.target.value });
            }}
          />
          <InputField
            label={"phone number"}
            type={"number"}
            name={"phone"}
            placeHolder={"055xxxxxxx"}
            onChange={(e) => {
              setNewUser({ ...newUser, phone: e.target.value });
            }}
          />
          <InputField
            label={"password"}
            type={"password"}
            name={"password"}
            placeHolder={"*******"}
            onChange={(e) => {
              setNewUser({ ...newUser, password: e.target.value });
            }}
          />
        </div>

        <div className="text-sm  dark:text-gray-400">
          Already have an account?
          <a href="/auth/login" className="focus:underline hover:underline">
            Sign in here
          </a>
        </div>
        <FormButton text={"Register"} />
      </form>
    </div>
  );
};

export default RegisterForm;
