import { useEffect, useState } from "react";
import { LogIn } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { selectNavConfig } from "../../store/reducers/uiSlice";
import { useNavigate } from "react-router-dom";
import { getSidebarLinks } from "./util";
import {
  setIsLoggedIn,
  setUserRole,
  selectIsLoggedIn,
} from "../../store/reducers/authSlice";

import { setSchoolManagementSidebar } from "../../store/reducers/uiSlice";
import { USER_ROLE } from "../../constant";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navConfig = useSelector(selectNavConfig);
  const [userType, setUserType] = useState(USER_ROLE.MASTER_ADMIN);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      if (userType == USER_ROLE.STUDENT) {
        navigate("/school-management/student/assignments");
      } else {
        navigate("/school-management/dashboard");
      }
    }
  }, [isLoggedIn]);

  const loginHandler = (e) => {
    e.preventDefault();

    dispatch(setIsLoggedIn(true));
    dispatch(setUserRole(userType));
    dispatch(setSchoolManagementSidebar(getSidebarLinks(userType)));
  };

  console.log("selectNavConfig", navConfig);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <LogIn className="h-12 w-12 text-indigo-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Select Role
              </label>
              <div className="mt-1">
                <select
                  onChange={(e) => setUserType(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value={USER_ROLE.MASTER_ADMIN}>Master Admin </option>
                  <option value={USER_ROLE.ADMIN}>Admin </option>
                  <option value={USER_ROLE.STUDENT}>Student </option>
                  <option value={USER_ROLE.TEACHER}>Teacher</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                onClick={(e) => loginHandler(e)}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
