# Welcome to MarketView!

This document contains written tutorials for installing and using MarketView, as well as some advanced debugging operations.
There are also links to the development documents for MarketView, which are available to those with permission for our Classic version,
namely all holders of a CWRU account

Sections:

- I. INSTALLATION
  - MySQL
  - Setup
    - Quick Setup (Python Required)
    - Manual Setup
- II. OPERATION
  - Home
  - News
  - Stock
  - MyProfile
  - Social
- III. DATABASE RECREATION
  - Recreation
  - Updating
- IV. DEVELOPMENT DOCS
  - Specification
  - Design
  - Testing

----------------------------------------------------------------------------------------------------------------------------------------------------

## I. INSTALLATION

To get the app to run properly, you will need to install react at https://reactjs.org/
then do the following:

### Install MySQL and MySQL Workbench at https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/

1. Set up your new connection, and don't worry about what port you're on (Just make sure it is NOT 3001)
2. Copy & paste the contents of `marketview.sql` into a query window (it's usually called Query1)
3. If you ever open up MySQL Workbench and you can't use your connection, open your task manager, then go to services Look for something along the lines of `MySQL80`, or some other number. Right click on it and click `start` The connection should be working now.
4. To view a table's contents, just right click on it on the dropdown menu on the left, then click `select rows - limit 1000` you can then directly change the contents of the table on the bottom of the screen (remember to click `apply`)

### Setup and Launch

#### Quick Setup (Python Required)

1. Run `setup.py` in the marketview folder, include your MySQL password when prompted, this is the password that you used for root when setting up MySQL on your machine
2. Run `startServer.py`, this launches the server used for the database
3. Run `startApp.py`, this should launch the marketview website in your web browser, for full functionality the user should login with a valid username and password or sign up for an account and use that account

#### Manual Setup

1. Create a `.env` file in the marketview folder and input `REACT_APP_FINNHUB_API_KEY=c1se9aqad3i9o8uaclc0`, save and exit
2. In a terminal while in the marketview folder, run `npm install`
3. Setup the MySQL database by doing `cd database` then run `mysql -u root -p < marketview.sql`, include your MySQL password when prompted, this is the password that you used for root when setting up MySQL on your machine
4. Navigate to `index.js` in the `server` folder and change line 19 to be the password of your local MySQL root user password
5. Navigate back to the marketview folder and run `npm start` to open up the marketview website in your web browser, for full functionality the user should login with a valid username and password or sign up for an account and use that account

----------------------------------------------------------------------------------------------------------------------------------------------------

## II. OPERATION

When you first open the app, you will be prompted to sign up or log in. If you don't already have an account, sign up with a username and password. If you already have an account, simply log in with your username and password. Upon authentication, you will be let into the web app! You can log out from any page by pressing the "log out" button in the top right of the screen.

### On the Home page you can

1. View the current Dow Jones and NASDAQ
2. Email our team if you need help! The contact email is in the bottom right of the screen
3. View a short synopsis of the app's features

### On the News page you can

1. View 6 recent news articles regarding finance & stocks
    - Opening one will open a new tab, so just switch tabs again to get back to MarketView

### On the Stocks page you can

1. Search for (valid) stock ticker symbols 
2. Add ticker symbols to your stock folder
    - If your entry was valid, a stock graph will pop up (Y values are based on $100,000)
        - You can use the tool icons above the graph to personalize your experience
        - From here you can add the stock ticker to your stock folder, or choose to ignore it and return to search

### On the MyProfile page you can

1. View and interact with your profile, which contains:
    - Stock folder
        - i.  This is where you store the ticker symbols you are tracking. You can click on them to see their information graphically
        - ii. To make your stock folder private (only you can see it), just click the "Make Stock Folder Private" button
    - b. Comments on your profile
        - i.  Others can comment on your profile, and you can see what they had to say as well as when they said it
        - ii. Email our dev team if you think a comment was inappropriate, and we will personally remove the commenter from our system
    - c. Your information
        - i.  You can view and change both your full name and bio. To change either one, just enter the replacement in the text field and hit submit

### On the Social page you can

1. Search for other MarketView users
    - a. Upon searching for a (valid) MarketView username, theirr profile will pop up
        - If they have a public stock folder, you can view the ticker symbols in it. You can click on the ticker symbols to see their information graphically
    - You can see what others had to say about this user's profile based on the Comments section. To leave a new comment of your own, just enter the comment in the text field and hit submit! Note: the date/time of your comment will be recorded, and it will be linked to your username
    - You can see the user's full name and bio at the top of the popup screen

----------------------------------------------------------------------------------------------------------------------------------------------------

## III. DATABASE RECREATION

### In order to recreate the MySQL Database from the .sql file in this directory:

1. Refer to Setup and Launch in the Installation section

### In order to update the MySQL Database from the .sql file in this directory to reflect local changes you made on your machine follow these steps:

1. Open a terminal and change directory to the directory this file is in
2. Run the following command: `mysqldump -u root -p --databases marketview > marketview.sql`
3. You will be prompted to enter a password, enter the password that you used for root when setting up MySQL on your machine

----------------------------------------------------------------------------------------------------------------------------------------------------

## IV. DEVELOPMENT DOCS

- Specification Doc
  - https://docs.google.com/document/d/1e4BRdb73yTsJ1dA5rOCoFifcBG2V62RvGWnpaLN6xes/edit?usp=sharing

- Design Doc
  - https://docs.google.com/document/d/1LESH_5SKMn7AJ2bmauhzl06a_xKAZ7NEgjpkJwQqA3U/edit?usp=sharing

- Testing Doc
  - https://docs.google.com/document/d/1NfdsRoMHvlGefeCS8zS3Ngh63768psLYrq-_cmRmMwE/edit?usp=sharing
