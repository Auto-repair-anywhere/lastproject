import React, { useState, createContext } from "react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarUser from "../Components/NavbarAdmin.jsx";
import { Link } from "react-router-dom";

const UserContext = createContext();

function Login() {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState(null);

  const notifySuccess = () => toast.success("Login successful");
  const notifyError = () => toast.error("Incorrect email or password");

  const login = (obj) => {
    axios
      .post("http://localhost:3000/user/login", obj)
      .then((res) => {
        console.log("logged in", res.data.token);
        const decoded = jwtDecode(res.data.token);
        cookies.set("token", res.data.token);
        if (decoded.role === "Seller") {
          // Set user data to context
          setUserData({
            id: decoded.id,
            firstName: decoded.firstName,
            lastName: decoded.lastName,
          });
          navigate("/saler");
          notifySuccess();
        }else if(decoded.role === "Admin"){
          setUserData({
            id: decoded.id,
            firstname: decoded.firstName,
            lastname:decoded.lastname,
          })
          navigate('/Profileadmin')
          notifySuccess()
        }else if(decoded.role === "Client"){
          setUserData({
            id: decoded.id,
            firstName: decoded.firstName,
            lastName: decoded.lastName,
          });
          navigate('/Client')
          notifySuccess()
        }
      })
      .catch((error) => {
        console.log(error);
        notifyError();
      });
  };

  return (
    <div>
      <NavbarUser />
      <ToastContainer />

      <UserContext.Provider value={{ userData }}>
        <section className="bg-gray-50 dark:bg-gray-900">
          {/* <img
            src={loginImage}
            alt="logo"
            style={{ height: 550, width: 700, marginLeft: 100 }}
          /> */}

          <div
            className="flex flex-col items-center  py-8 mx-auto md:h-screen lg:py-0   "
            style={{ paddingLeft: 580, marginTop: -575 }}
          >
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            ></a>
            <div className="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Connect to your account
                </h1>
                <div className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex items-start"></div>
                  <button
                    type="submit"
                    className="w-full text-Black bg-primary-600 bg-green-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={() => {
                      login({ email: email, pwd: password });
                    }}
                  >
                    Enter
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    You are not a member?{" "}
                    <a
                      href="/Signin"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign in here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </UserContext.Provider>
    </div>
  );
}

export default Login;
