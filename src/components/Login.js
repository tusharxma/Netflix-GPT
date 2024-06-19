import  { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLogin, setLoginIn] = useState(true);

  const handleSignInForm = () => {
    setLoginIn(!isLogin);
  };

  return (
    <div className="text-4xl text-center">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="netflix"
        ></img>
      </div>
      <form className="absolute p-10 bg-black w-4/12 mx-auto right-0 left-0 mt-48 text-white bg-opacity-85">
        <h1 className="text-4xl text-left font-semibold mt-5">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        {!isLogin && (
          <input
            nput
            type="text"
            placeholder="Full Name"
            className="mt-8 w-full text-xl bg-gray-700 px-3 py-3 rounded-lg"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="w-full text-xl bg-gray-700 px-3 py-3 mt-5 rounded-lg"
        />
              {!isLogin && (
          <input
            nput
            type="text"
            placeholder="Phone Number"
            className="mt-5 w-full text-xl bg-gray-700 px-3 py-3 rounded-lg"
          />
        )}
        <br />
        <input
          nput
          type="password"
          placeholder="Password"
          className="mt-5 w-full text-xl bg-gray-700 px-3 py-3 rounded-lg"
        />
        <br />

        <button className="bg-red-700 text-xl mt-7  px-10 py-2 w-full rounded-lg mb-5">
          {isLogin ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-lg text-left">
          {isLogin ? "New to Netflix?" : "Already have an account?"}
          <span
            onClick={handleSignInForm}
            className="text-lg cursor-pointer font-semibold"
          >
            {" "}
            {isLogin ? "Sign Up" : "Sign In"} now
          </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
