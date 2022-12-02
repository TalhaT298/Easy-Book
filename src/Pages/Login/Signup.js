import React, { useContext, useState } from "react";
import toast from 'react-hot-toast';

import { Link, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../Hooks/useToken";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { createUser, updateUser, signInWithGoogle, loading, setLoading } = useContext(AuthContext);

  const[createdEmail,setcreatedEmail]=useState('');

  const [token] =useToken(createdEmail);
  if(token){
    navigate('/');
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const role = event.target.role.value;

    // console.log(name,email, role);
    saveUserDb(name,email,role);
    
    //1. Create Account
    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        

        //2. Update Name
        updateUser(name)
          .then(() => {

            toast.success("Account Created successfully")

              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((error) => console.log(error));
  };

const saveUserDb =(name,email,role) =>{

const user ={name,email,role};
fetch('https://app-build-server.vercel.app/users',{

method:'POST',
headers:{
  'content-type':'application/json'
},
body:JSON.stringify(user)

})
.then(res =>res.json())
.then(data=>{

 setcreatedEmail(email);
})

}


  // Google Signin
  const handleGoogleSignin = () => {
    signInWithGoogle().then((result) => {
      const user= result.user;
      console.log(user);
      googleLoggedInUseInfo(user.displayName, user.email);

      navigate(from, { replace: true });
    });
  };

// goole logged in user set on DB start
  const googleLoggedInUseInfo = (name, email) => {
    const info = { name, email, role: "Buyer" };
    fetch("https://app-build-server.vercel.app/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
        //  useToken(email);
          toast.success("User Logged In Successfully");
          console.log(data);
        }
      });
  };


  // goole logged in user set on DB end
  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Signup</h1>
          <p className="text-sm text-gray-400">Create a new account</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-pink-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-pink-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-pink-500 text-gray-900"
              />
            </div>
          </div>
          <div>
            <label className="text-sm">Who you are?</label>
            <select name="role" className="select border rounded-md border-gray-300 bg-gray-200 focus:outline-pink-500 text-gray-900' select-bordered w-full max-w-xs">
              <option  default>
                Buyer
              </option>
              <option >Seller</option>
            </select>
          </div>

          <div className="space-y-2">
            <div>
              <PrimaryButton
                type="submit"
                classes="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
              >
                Sign up
              </PrimaryButton>
            </div>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleSignin}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account yet?{" "}
          <Link to="/login" className="hover:underline text-gray-600">
            Sign In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Signup;
