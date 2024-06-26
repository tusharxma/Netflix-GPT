import { useRef, useState } from "react";
import Header from "./Header";
import { useFormik } from "formik";
import { SigninSchema, SignupSchema } from "../utils/authValidation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Login = () => {
  const [isLogin, setLoginIn] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const phoneNumber = useRef(null);

  const signIninitalvalues = {
    email: "",
    password: "",
  };

  const signUpintialVlaues = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  };

  const { values, touched, errors, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: isLogin ? signIninitalvalues : signUpintialVlaues,
      validationSchema: isLogin ? SigninSchema : SignupSchema,
      onSubmit: (values) => {
        handleFormAction(values);
      },
    });

  const handleFormAction = (values) => {
    const { email, password, name } = values;

    if (!isLogin) {
      createUserWithEmailAndPassword(auth, email, password, name)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { email, uid, displayName } = auth.currentUser;
              dispatch(addUser({ email: email, uid: uid, name: displayName }));
              navigate("/browse");
            })
            .catch((error) => {
              console.log("🚀 ~ .then ~ error:", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(
            "🚀 ~ handleFormAction ~ errorCode: line - 51",
            errorCode
          );
          const errorMessage = error.message;
          console.log(
            "🚀 ~ handleFormAction ~ errorMessage: line- 53",
            errorMessage
          );
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential?.user;
          console.log("🚀 ~ .then ~ user:", user);

          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log("🚀 ~ handleFormAction ~ errorCode: line- 66", errorCode);
          const errorMessage = error.message;
          console.log(
            "🚀 ~ handleFormAction ~ errorMessage: line- 68",
            errorMessage
          );
        });
    }
  };

  const handleSignInForm = () => {
    setLoginIn(!isLogin);
  };

  return (
    <div className="text-4xl text-center">
      <Header />
      <div className="absolute">
        <img src={LOGO} alt="netflix"></img>
      </div>
      <form
        onSubmit={handleSubmit}
        className="absolute p-10 bg-black w-4/12 mx-auto right-0 left-0 mt-48 text-white bg-opacity-85"
      >
        <h1 className="text-4xl text-left font-semibold mt-5">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        {!isLogin && (
          <div className="mt-7 ">
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className=" w-full text-xl bg-gray-700 px-3 py-3 rounded-lg"
            />
            {errors.name && touched.name ? (
              <span className="text-lg float-left ml-1 text-red-700">
                {errors.name}
              </span>
            ) : null}
          </div>
        )}
        <div className=" mt-7">
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className="w-full text-xl bg-gray-700 px-3 py-3 rounded-lg"
          />
          {errors.email && touched.email ? (
            <span className="text-lg float-left ml-1 text-red-700">
              {errors.email}
            </span>
          ) : null}
        </div>
        {!isLogin && (
          <div className=" mt-7">
            <input
              ref={phoneNumber}
              type="text"
              name="phoneNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
              placeholder="Phone Number"
              className=" w-full text-xl bg-gray-700 px-3 py-3 rounded-lg"
            />
            {errors.phoneNumber && touched.phoneNumber ? (
              <span className="text-lg float-left ml-1 text-red-700">
                {errors.phoneNumber}
              </span>
            ) : null}
          </div>
        )}

        <div className="mt-7 ">
          <input
            ref={password}
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className=" w-full text-xl bg-gray-700 px-3 py-3 rounded-lg"
          />
          {errors.password && touched.password ? (
            <span className="text-lg float-left ml-1 text-red-700">
              {errors.password}
            </span>
          ) : null}
        </div>
        <br />

        <button
          className="bg-red-700 text-xl  px-10 py-2 w-full rounded-lg mb-5"
          type="submit"
        >
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
