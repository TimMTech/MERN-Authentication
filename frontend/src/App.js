import DashBoard from "./Pages/Dashboard/Dashboard";
import Nav from "./Components/Nav/Nav";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import postUser from "./Utils/API/postUser";
import loginUser from "./Utils/API/loginUser";
import postMessage from "./Utils/API/postMessage";
import getMessage from "./Utils/API/getMessage";
import Home from "./Pages/Home/Home";
import CreateMessage from "./Pages/CreateMessage/CreateMessage";
import BecomeMember from "./Pages/BecomeMember/BecomeMember";
import BecomeAdmin from "./Pages/BecomeAdmin/BecomeAdmin";
import IncorrectCedentials from "./Pages/AuthenticationErrors/IncorrectCedentials";
import UsernameExists from "./Pages/AuthenticationErrors/UsernameExists";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [isMember, setIsMember] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);

  const [errorMessage, setErrorMessage] = useState({
    firstname: "",
    email: "",
    username: "",
    password: "",
  });

  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });

  const [signUpValues, setSignUpValues] = useState({
    firstname: "",
    email: "",
    username: "",
    password: "",
  });

  const [newMessage, setNewMessage] = useState({
    message: "",
  });

  const [user, setUser] = useState(null);

  const [messages, setMessages] = useState([]);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogOut = () => {
    setIsAuthenticated(false);
    window.location.href = "/";
    window.localStorage.clear();
    window.localStorage.removeItem("user");
  };

  const handleLoginSubmit = useCallback(() => {
    loginUser(loginValues);
  }, [loginValues]);

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitSignUp = () => {
    if (!signUpValues.firstname) {
      setErrorMessage((prevState) => ({
        ...prevState,
        firstname: "Please Fill Out First Name",
      }));
    } else
      setErrorMessage((prevState) => ({
        ...prevState,
        firstname: "",
      }));
    if (!signUpValues.email) {
      setErrorMessage((prevState) => ({
        ...prevState,
        email: "Please Fill Out Email",
      }));
    } else {
      setErrorMessage((prevState) => ({
        ...prevState,
        email: "",
      }));
    }
    if (signUpValues.username.length < 6) {
      setErrorMessage((prevState) => ({
        ...prevState,
        username: "Username Must Be Longer Than 6 Characters",
      }));
    } else {
      setErrorMessage((prevState) => ({
        ...prevState,
        username: "",
      }));
    }
    if (!signUpValues.password) {
      setErrorMessage((prevState) => ({
        ...prevState,
        password: "Password Must Be Longer Than 6 Characters",
      }));
    } else {
      setErrorMessage((prevState) => ({
        ...prevState,
        password: "",
      }));
    }
    postUser(signUpValues);
  };

  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    setNewMessage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleMessageSubmit = () => {
    postMessage(newMessage);
    
  };

  useEffect(() => {
    if (user === null) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
      if (user.member === true) {
        setIsMember(true);
      } else {
        setIsMember(false);
      }
    }
  }, [handleLoginSubmit, user]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [handleLoginSubmit]);

  useEffect(() => {
    getMessage((messages) => {
      setMessages(messages);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Nav userLoggedIn={user} user={user} handleLogOut={handleLogOut} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              messages={messages}
              isMember={isMember}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              loginValues={loginValues}
              handleLoginChange={handleLoginChange}
              handleLoginSubmit={handleLoginSubmit}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              signUpValues={signUpValues}
              handleSignUpChange={handleSignUpChange}
              handleSubmitSignUp={handleSubmitSignUp}
              errorMessage={errorMessage}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <DashBoard
              messages={messages}
              isAuthenticated={isAuthenticated}
              isMember={isMember}
              isLoading={isLoading}
              handleBecomeMember
              handleBecomeAdmin
            />
          }
        />
        <Route
          path="/new-message"
          element={
            <CreateMessage
              messageValues={newMessage}
              handleMessageChange={handleMessageChange}
              handleMessageSubmit={handleMessageSubmit}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/become-member"
          element={
            <BecomeMember
              isAuthenticated={isAuthenticated}
              memberValues
              handleMemberChange
              handleMemberSubmit
            />
          }
        />
        <Route
          path="/become-admin"
          element={
            <BecomeAdmin
              isAuthenticated={isAuthenticated}
              adminValues
              handleAdminChange
              handleAdminSubmit
            />
          }
        />
        <Route path="/error" element={<IncorrectCedentials />} />
        <Route path="/username-exists" element={<UsernameExists />} />
      </Routes>
    </>
  );
};

export default App;
