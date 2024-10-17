# ShelfMaster : Book Listing Application

A full-stack web application for managing book listings with functionalities for creation, updating, deletion, and user reviews. The application also includes user authentication with login and signup features.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Frontend:** JavaScript, HTML, CSS, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** Passport.js
- **Deployment:** Vercel
- **Other Packages:** Express-session, Method-override, Connect-flash, EJS

## Features

- User authentication with login and signup
- Create, read, update, and delete book listings
- Add reviews for each book
- Responsive design using Bootstrap
- User-friendly interface

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/book-listing-app.git
   cd book-listing-app
   npm install
    ```
Create a .env file in the root directory and add your MongoDB connection string:
```
MONGO_URI=your_mongodb_connection_string
```
Start the server:
```
node app.js
```
Open your browser and navigate to http://localhost:8080.
Create an account or log in to start adding, updating, or deleting book listings and reviews.

Deployment
This project is deployed on Vercel. You can access the live application [here](https://shelfmaster.vercel.app/).

Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions.
