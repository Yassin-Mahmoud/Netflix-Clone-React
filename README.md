# Netflix Clone
A Netflix clone built with React, TypeScript, Tailwind css, [Firebase](https://firebase.google.com/), and [TMDB](https://www.themoviedb.org/) API. The app allows users to browse movies and TV shows, and save them to their watchList.

# Features
* Displays popular movies and TV shows on the home page.
* Allows users to browse movies and TV shows by genre and view their details.
* Allows users to create an account, sign in, and sign out.
* Allows users to add movies and TV shows to their saved movies list and remove them

# Installation
1. Clone the repo by running the following command:
```
git clone https://github.com/Yassin-Mahmoud/Netflix-Clone-React.git
```
2. Navigate to the project directory:
```
cd Netflix-Clone-React
```
3. Install dependencies:
```
npm install
```
4. Create a .env file in the root directory with the following format:
```.env
# TMDB 
REACT_APP_TMDB_API_KEY=<your TMDB API key>

# Firebase
VITE_FIREBASE_API_KEY=<your Firebase API key>
VITE_FIREBASE_AUTH_DOMAIN=<your Firebase auth domain>
VITE_FIREBASE_PROJECT_ID=<your Firebase project ID>
VITE_FIREBASE_STORAGE_BUCKET=<your Firebase storage bucket>
VITE_FIREBASE_MESSAGING_SENDER_ID=<your Firebase messaging sender ID>
VITE_FIREBASE_APP_ID=<your Firebase app ID>
```

Replace `<your TMDB API key>` with your own [API key](poe://www.poe.com/_api/key_phrase?phrase=API%20key&prompt=Tell%20me%20more%20about%20API%20key.), which you can obtain by creating an account on the [TMDB website](https://www.themoviedb.org/documentation/api). Replace the other [Firebase config variables](poe://www.poe.com/_api/key_phrase?phrase=Firebase%20config%20variables&prompt=Tell%20me%20more%20about%20Firebase%20config%20variables.) with your own Firebase project's values, which you can obtain by following the [Firebase setup instructions](poe://www.poe.com/_api/key_phrase?phrase=Firebase%20setup%20instructions&prompt=Tell%20me%20more%20about%20Firebase%20setup%20instructions.).

5. Start the app:
```
npm run dev
```
The app should now be running on `http://localhost:3000/`.

# Usage
1. Browse movies and TV shows on the home page or by genre. Click on a movie or TV show to view its details.

4. Create an account by clicking on the "Sign In" button in the top right corner of the app and then clicking on the "Sign Up" button. Enter your email and password and click the "Sign Up" button.

5. Sign in to your account by clicking on the "Sign In" button in the top right corner of the app and entering your email and password.

6. Add a movie or TV show to your watchlist by clicking on the "love" button on a movie or TV show image. Remove a movie or TV show from your watchlist by clicking on the "X" button on a movie or TV show image.

7. View your watchlist by clicking on the "Account" button in the top right corner of the app.

# Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.
