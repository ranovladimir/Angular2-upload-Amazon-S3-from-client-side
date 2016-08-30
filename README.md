# An Angular2 app that upload from client side directly to your Amazaon S3



This is the front-end part of a sample Angular2/ASP .NET CORE project that upload to Amazon S3 directly from client side.


How it's work : The upload form ask for an authorization to upload in your Amazon's bucket.
 Thanks to the signature and a policy delivered by the back-end, the file to upload is uploads in your Amazon bucket
 without make a first upload in your server side.


CAUTION : This app run well only if you download also the back-end at https://github.com/ranovladimir/.Net-core-upload-Amazon-S3


Usage :

Clone or fork a Angular2 seed project at https://github.com/angular/angular2-seed

Remove the src and add that (Angular2-Routing-sample) src.

Make sure you have node.js installed version 5+

Make sure you have NPM installed version 3+

run npm install to install dependencies

run npm start to fire up dev server

! open browser to http://localhost:3000/admin/user/new !


Hope that help ! 
