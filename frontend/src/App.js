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

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [isAdmin, setIsAdmin] = useState(false);

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
    postUser(signUpValues);
    window.location.href = "/login";
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
    window.location.href = "/dashboard";
  };

  useEffect(() => {
    if (user === null) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
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
      setIsLoading(false)
    });
  }, []);

  return (
    <>
      <Nav userLoggedIn={user} user={user} handleLogOut={handleLogOut} />
      <Routes>
        <Route
          path="/"
          element={
            <Home messages={messages} isAdmin={isAdmin} isLoading={isLoading} />
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
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <DashBoard
              messages={messages}
              isAuthenticated={isAuthenticated}
              isAdmin={isAdmin}
              isLoading={isLoading}
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
      </Routes>
    </>
  );
};

export default App;
