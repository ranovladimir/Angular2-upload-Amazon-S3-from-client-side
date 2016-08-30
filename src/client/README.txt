Hi,

This is the front-end part of a sample Angular2/ASP .NET CORE project that upload to Amazon S3 directly from client side.

How it's work : The upload form ask for an authorization to upload in your Amazon's bucket.
 Thanks to the signature and a policy delivered by the back-end, the file to upload is uploads in your Amazon bucket
 without make a first upload in your server side.

CAUTION : The data forms in the UserCreateComponent have to be the same in the AwsController in the back-end.

To GET STARTED in the Angular2 App :

Make sure you have node.js installed version 5+

Make sure you have NPM installed version 3+

run npm install to install dependencies

run npm start to fire up dev server

! open browser to http://localhost:3000/admin/user/new !

To GET STARTED with the upload :

Just fill the fields in the UserCreateComponent.

Run the server

Run your angular2 app

Do not forget to go to ttp://localhost:3000/admin/user/new



Hope that help !




***************
*RANO Vladimir*
***************

