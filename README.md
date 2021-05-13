# Travel Diary Capstone Client
A hub for travel enthusiasts to store information and see public information stored by other users


### 1. Working Prototype
You can access a working prototype of the React app here: https://travel-diary-capstone.vercel.app/ and Node app here: https://travel-diary-capstone.herokuapp.com/


### 2. User Stories 
This app is for two types of users: a visitor and a logged-in user


###### Landing Page (Importance - Medium) (Est: 2h)
* as a visitor
* I want to understand what I can do with this app and view public information (or sign up, or log in)
* so I can decide if I want to use it


###### Login Page (Importance - High) (Est: 3h)
* As a returning register user
* I want to enter my password and username to use this app,
* So I can have access to my account.

###### Sign Up (Importance - High) (Est: 3h)
* As a visitor
* I want to register to use this app
* So I can create a personal account.

###### Dashboard Page (Importance - High) (Est: 2h)
* As a logged-in user,
* I want to be able to view all saved items and have the ability to check/un-check, edit, delete, or add an item,
* So I can decide what section I want to navigate to.

###### Add Item Page (Importance - High) (Est: 3h)
* As a logged-in user,
* I want to be able to enter a new keyword for a pinned map image, select (currency, language, rating, cost, type, visited), and add notes,
* So I can save my item to the dashboard.

###### Edit Item Page (Importance - High) (Est: 3h)
* As a logged-in user,
* I want to be able to edit an item, starting with all previously selected options,
* So I can update my item and save it to the dashboard.


### 3. Functionality 
The app's functionality includes:
* A persistent nav-bar to navigate to home, dashboard, and log-in/log-out
* Every User has the ability to create an account, log in or log-out
* On the landing page, a visitor can view public information that was saved
* Each item will have the average or most common answer to each category displayed
* Public notes will be displayed under each item (if toggled to public)
* A logged in user should see a dashboard with all saved items and the ability to add an item
* Every item can be 'checked/un-checked' and will have a tag of 'Been there done that' or 'On the Bucket List'
* Selecting 'add item' will route to a new form 
* The 'add item' form allows the user to enter a new, mandatory, keyword
* A user's keyword should reroute to a google search and return a location
* A user's location search should pin a map image (https://developers.google.com/maps/documentation/embed/get-started)
* If a user's search results don't work, show an error
* A user can select from a number of practical options to further describe the item (currency, language, grading system(1 - 5 stars), cost($, $$, $$$), type (historical, romantic, outdoor business, tourist, religious, sport, educational)
* There will be a mandatory selection for 'visited vs future plan'
* A section exists for personal notes at the bottom
* A user's searched location, map image, selections, and personal notes can be saved to a list item
* A user's personal notes can be toggled to either public or private
* Saved items can be edited and/or deleted 
* A succesful save/delete will reroute to the dashboard with the item added to the top
* Each new item added will also be added to the top of the public list on the home page






### 4. Technology
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver



### 5. Wireframes
Travel Diary Wireframe
:-------------------------:
![Travel Diary Wireframe](/github-images/wireframes/travel-diary-wireframe.png)



### 6. Front-end Structure - React Components Map 
* __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __Login.js__ (stateful) -
            * __Register.js__ (stateful) -
        * __PublicPosts.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
        * __Navbar.js__ (stateless) -
        * __DashBoard.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
        * __AddItem.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
        * __EditItem.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__



### 7. Back-end Structure - Business Objects 
* users (database table)
    * user_id
    * email (email validation)
    * password (at least one number, one lowercase and one uppercase letter at least eight characters that are letters, numbers or the underscore validation)
* items (database table)
    * item_id
    * user_id
    * keyword (string varchar255 ex: Paris, France)
    * category (string varchar255 ex: 'Been There' or 'On My List')
    * rating (integer 1 - 5)
    * cost (integer 1 - 3)
    * currency (string varchar255 ex: Euro)
    * language (string varchar255 ex: English, Spanish)
    * type (string varchar255 ex: Romantic)
    * notes (string varchar255 ex: This place is known for...)
    * is_public (boolean default false)






### 8. API Documentation
API Documentation details:
* https://www.getpostman.com/collections/23a801dcc5cd426ad96d



### 9. Screenshots (to do later) one for every user story
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/landing-page-screenshot.png)
Register Page
![Sign In Page](/github-images/screenshots/sign-in-page-screenshot.png)
![Registration Page](/github-images/screenshots/registration-page-screenshot.png)
![Dashboard Page](/github-images/screenshots/dashboard-page-screenshot.png)
![Add Item Page](/github-images/screenshots/add-item-page-screenshot.png)
![Edit Item Page](/github-images/screenshots/edit-item-page-screenshot.png)



### 10. Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* A single filter dropdown to select low-to-high/high-to-low (rating, cost)
* A user's dashboard will have a search bar to search their own saved items by keyword




### 11. How to run it
Use command line to navigate into the project folder and run the following in terminal

##### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test

##### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test