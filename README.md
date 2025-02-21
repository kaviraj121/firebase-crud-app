# Firebase CRUD React App

This project is a simple Firebase CRUD (Create, Read, Update, Delete) application built using React and Firebase Firestore. It allows users to add, update, and delete user data stored in Firebase.

# 🚀 Features

* Add users with a name and age

* Retrieve users from Firebase Firestore

* Update user age

* Delete users

* Responsive design using Material-UI

* Environment variable support for Firebase configuration

# 🛠️ Technologies Used

* React (Frontend Framework)

* Firebase Firestore (Database)

* Material-UI (UI Components)

* Vite (Fast build tool for React)

# 📦 Installation & Setup

 1. Clone the Repository
     
        git clone https://github.com/your-username/firebase-crud-app.git
        cd firebase-crud-app
 
 2. Install Dependencies

           npm install
  
  3. Setup Firebase
   * Create a Firebase Project at Firebase Console

   * Go to Firestore Database and enable it

   * Get your Firebase configuration from Project Settings > General

   * Create a .env file in the project root and add your Firebase credentials:

           VITE_API_KEY=your_api_key
           VITE_AUTH_DOMAIN=your_project.firebaseapp.com
           VITE_PROJECT_ID=your_project_id
          VITE_STORAGE_BUCKET=your_project.appspot.com
          VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
         VITE_APP_ID=your_app_id
         VITE_MEASUREMENT_ID=your_measurement_id
4. Start the Development Server

          npm run dev
