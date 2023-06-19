// import { BsGithub, BsGoogle } from "react-icons/bs";

const RegisterForm = () => {
  return (
    <>
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100 ">
        <h2 className="mb-3 text-3xl font-semibold text-center">Register</h2>
        <p className="text-sm text-center dark:text-gray-400">
          Already have an account?
          <a href="#" className="focus:underline hover:underline">
            Sign in here
          </a>
        </p>

        <form noValidate="" className="space-y-8 ">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm">
                username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="john doe"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm">
                phone
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="05XXXXXXXXX"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*********"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
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

export default RegisterForm;
