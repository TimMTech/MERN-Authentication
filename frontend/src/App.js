// React Library Imports //
import { Routes, Route } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

// Utility Imports //
import postUser from "./Utils/API/postUser";
import loginUser from "./Utils/API/loginUser";
import postMessage from "./Utils/API/postMessage";
import getMessage from "./Utils/API/getMessage";
import adminDeletePost from "./Utils/API/adminDeletePost";
import becomeMember from "./Utils/API/becomeMember";
import becomeAdmin from "./Utils/API/becomeAdmin";

// Component Imports //
import Nav from "./Components/Nav/Nav";

// Page Imports //
import DashBoard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import CreateMessage from "./Pages/CreateMessage/CreateMessage";
import BecomeMember from "./Pages/BecomeMember/BecomeMember";
import BecomeAdmin from "./Pages/BecomeAdmin/BecomeAdmin";

// Page Imports:Error Messages //
import IncorrectCedentials from "./Pages/AuthenticationErrors/IncorrectCedentials";
import UsernameExists from "./Pages/AuthenticationErrors/UsernameExists";
import IncorrectMemberPassword from "./Pages/AuthenticationErrors/IncorrectMemberPassword.js";
import IncorrectAdminPassword from "./Pages/AuthenticationErrors/IncorrectAdminPassword";

// Page Imports:Membership Rules //
import MemberRules from "./Pages/MembershipRules/MemberRules";
import AdminRules from "./Pages/MembershipRules/AdminRules";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [isMember, setIsMember] = useState(false);
  const [memberValues, setMemberValues] = useState({
    password: "",
  });

  const [isAdmin, setIsAdmin] = useState(false);
  const [adminValues, setAdminValues] = useState({
    password: "",
  });

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

  const handleMemberChange = (e) => {
    const { name, value } = e.target;
    setMemberValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleMemberSubmit = () => {
    becomeMember(memberValues);
  };

  const handleAdminChange = (e) => {
    const { name, value } = e.target;
    setAdminValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleAdminSubmit = () => {
    becomeAdmin(adminValues);
  };

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

  const deletePost = (post) => {
    adminDeletePost(post);
    console.log(post);
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
      if (user.admin === true) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
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
              isAdmin={isAdmin}
              deletePost={deletePost}
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
              isAdmin={isAdmin}
              isLoading={isLoading}
              deletePost={deletePost}
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
              memberValues={memberValues}
              handleMemberChange={handleMemberChange}
              handleMemberSubmit={handleMemberSubmit}
            />
          }
        />
        <Route
          path="/become-admin"
          element={
            <BecomeAdmin
              isAuthenticated={isAuthenticated}
              adminValues={adminValues}
              handleAdminChange={handleAdminChange}
              handleAdminSubmit={handleAdminSubmit}
            />
          }
        />
        <Route path="/error" element={<IncorrectCedentials />} />
        <Route path="/username-exists" element={<UsernameExists />} />
        <Route
          path="/incorrect-member-password"
          element={<IncorrectMemberPassword />}
        />
        '
        <Route
          path="/incorrect-admin-password"
          element={<IncorrectAdminPassword />}
        />
        <Route path="/member-rules" element={<MemberRules />} />
        <Route path="/admin-rules" element={<AdminRules />} />
      </Routes>
    </>
  );
};

export default App;
