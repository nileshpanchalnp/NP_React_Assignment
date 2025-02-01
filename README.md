# Logistics Management System 🚛📦

# Project Overview
The Logistics Management System is a web-based application built using **React.js**. This system allows users to **manage bids, track shipments, and monitor logistics operations efficiently**. It includes a **responsive dashboard, user authentication, protected routes, bid tracking, and search functionality**. All data is stored and managed using localStorage.

# Features
✅ **User Authentication**: Signup and login functionality with localStorage. 

✅ **Protected Routes**: Only authenticated users can access the dashboard and bid management pages.

✅ **Dashboard**: Displays live bids and bid details.

✅ **Search & Filtering**: Users can search for bidNo,bidNoCreateBy,material,loadingPoint,unloadingPoint,vehicleType and filter them.

✅ **Bid Management**: View and manage bid responses.

✅ **Local Data Storage**: All user and bid data are stored in localStorage.

✅ **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop).

# Technical Specifications:
  **Frontend**: React.js (React Router, Hooks, Tailwind CSS)
  
  **Data Storage**: localStorage
  
  **State Management**: React Hooks
  
  **Deployment**: Hosted on Vercel 

  
# Installation & Setup

# 1. Clone the Repository
git clone https://github.com/nileshpanchalnp/NP_React_Assignment.git

cd np_frontend_assigm

# 2. Install Dependencies
npm install

npm install react-router-dom

npm install lucide-react

npm install tailwindcss

npm start

# 3. Add a Link In index.html
        <!-- tailwind css -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- boostap icon -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
    />
    <!-- boostap link -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    
# How It Works
# 1️⃣ Start the Project
After running npm start, follow these steps:

****
# 2️⃣ Signup
Enter Username, Email, and Password.

Click Signup to create an account (data is stored in localStorage).

****
# 3️⃣ Login
Enter Email and Password to log in.

If credentials match stored data, you are redirected to the Dashboard.

****
# 4️⃣ Dashboard View
Displays all created bids.

Option to create new bids.

****
# 5️⃣ Create a New Bid
Click Create Button to open the Create New Bid form.

Fill in all required input fields (e.g., bid details, amount, description).

Click Create Bid, and the new bid will appear on the Dashboard.


****
# 6️⃣ Data Storage
All user details and bids are stored in localStorage for persistence.

Refreshing the page won’t lose the data.

# Project Demonstration
📽 Loom Video: [Provide the Loom video link here]

🌍 Live Demo: https://np-react-assignment.vercel.app/

# Contributors
**Nilesh Panchal** - Full-stack Developer






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
