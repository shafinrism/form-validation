
import Lottie from "lottie-react"
import regAnimation from "../../public/Animation/Animation - 1710784215789.json"
import { useState } from "react";



const Registration = () => {

  const [fullName,setFullName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [rePassword,setRePassword] = ("")

  const [fullNameError,setFullNameError] = useState("")
  const [emailError,setEmailError] = useState("")
  const [passwordError,setPasswordError] = useState("")
  const [rePasswordError,setRePasswordError] = useState("")

  

  const handleFullName = (e)=>{
    setFullName(e.target.value)
    setFullNameError("")
  } 
  const handleEmail = (e)=>{
    setEmail(e.target.value)
    setEmailError("")
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
    setPasswordError("")
  }
  const handleRePassword =(e)=>{
    setRePassword(e.target.value)
    setRePasswordError("")
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(fullName==""){
      setFullNameError("Please Enter Full Name")
    }
    else if (email=="") {
      setEmailError("Please Enter Your Email")
    }
    else if(password==""){
      setPasswordError("Please enter your password")
    }
    else if(rePassword == ""){
      setRePasswordError("please enter your re password")
    }
    else{ 
      alert("success")
    }
    
  }





  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="w-[45%] flex justify-center items-center h-screen">
          <div className="p-6 bg-[] ">
            <h1 className="text-center font-bold text-4xl mb-4">
              Registration
            </h1>
            <form action="" onSubmit={handleSubmit}>
              <input onChange={handleFullName}
                className="w-full outline-none border-2 border-blue-600 rounded py-1 px-4 my-2"
                type="text"
                placeholder="Full Name"
              />
              {
                fullNameError&&
                <p className="text-base font-bold capitalize">{fullNameError}</p>
              }
              <input onChange={handleEmail}
                className="w-full outline-none border-2 border-blue-600 rounded py-1 px-4 my-2"
                type="email"
                placeholder="Email"
              />
              {
                emailError&&
                <p className="text-base font-bold capitalize">{emailError}</p>
              }
              <input onChange={handlePassword}
                className="w-full outline-none border-2 border-blue-600 rounded py-1 px-4 my-2"
                type="password"
                placeholder="Password"
              />
              {
                passwordError&&
                <p className="text-base font-bold capitalize">{passwordError}</p>
              }
              <input onChange={handleRePassword}
                className="w-full outline-none border-2 border-blue-600 rounded py-1 px-4 my-2"
                type="password"
                placeholder="Re Password"
              />
              {
                rePasswordError&&
                <p className="text-base font-bold capitalize">{rePasswordError}</p>
              }
              <button
                className="bg-blue-600 text-white w-full py-1 px-2 rounded mt-2"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="w-[45%]">
          <Lottie animationData={regAnimation}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Registration;
