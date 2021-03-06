# MERN-Authentication

This is an implementation of the Members Only project using MERN Stack completed as part of the Node.js lessons provided by The Odin Project's full stack Javascript course.

<img width="1429" alt="Screen Shot 2022-05-31 at 6 13 46 PM" src="https://user-images.githubusercontent.com/90993242/171293160-7787ee26-9ac5-4931-99fd-116ebc796f3d.png">

Implements a user dashboard

<img width="1429" alt="Screen Shot 2022-05-31 at 6 17 21 PM" src="https://user-images.githubusercontent.com/90993242/171293346-9514d4e5-146a-40ab-866b-36acd997ec92.png">


# Tech Used
React Frontend Library
Node.js
Express Framework
Mongo Atlas Database

# App Information
Password for Members is MERNmemberpassword.
Admin is for restricted use.

# App Architecture
Allows users to login/signup using express validation and jwt token authentication.  Allows users to post message, however
users who are not registered as a member will only see "anonymous" as author of posts.  

Users who are registered as a member using the password provided above will allow readability of the post's author.

Users who are admin have permission to delete posts, as well as users, if neccessary.  

# About
This project is to demonstrate on how to handle server requests using MongoDB models, accepting responses via controller and having the controller
render content as per response of the user.  
