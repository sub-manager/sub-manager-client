import jwt from "jwt-decode";

class Auth {
  static decode = () => {
    const token = localStorage.getItem("token");
    if (!Auth.isLogged()) {
      return "";
    }
    const user = jwt(token);

    return user;
  };

  static isLogged = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };
}

export default Auth;
