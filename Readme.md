# CS4218 Project - Virtual Vault

## 1. Project Introduction

Virtual Vault is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) e-commerce website, offering seamless connectivity and user-friendly features. The platform provides a robust framework for online shopping. The website is designed to adapt to evolving business needs and can be efficiently extended.

## 2. Website Features

- **User Authentication**: Secure user authentication system implemented to manage user accounts and sessions.
- **Payment Gateway Integration**: Seamless integration with popular payment gateways for secure and reliable online transactions.
- **Search and Filters**: Advanced search functionality and filters to help users easily find products based on their preferences.
- **Product Set**: Organized product sets for efficient navigation and browsing through various categories and collections.

## 3. Your Task

- **Unit and Integration Testing**: Utilize Jest for writing and running tests to ensure individual components and functions work as expected, finding and fixing bugs in the process.
- **UI Testing**: Utilize Playwright for UI testing to validate the behavior and appearance of the website's user interface.
- **Code Analysis and Coverage**: Utilize SonarQube for static code analysis and coverage reports to maintain code quality and identify potential issues.
- **Load Testing**: Leverage JMeter for load testing to assess the performance and scalability of the ecommerce platform under various traffic conditions.

## 4. Setting Up The Project

### 1. Installing Node.js

1. **Download and Install Node.js**:

   - Visit [nodejs.org](https://nodejs.org) to download and install Node.js.

2. **Verify Installation**:
   - Open your terminal and check the installed versions of Node.js and npm:
     ```bash
     node -v
     npm -v
     ```

### 2. MongoDB Setup

1. **Download and Install MongoDB Compass**:

   - Visit [MongoDB Compass](https://www.mongodb.com/products/tools/compass) and download and install MongoDB Compass for your operating system.

2. **Create a New Cluster**:

   - Sign up or log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register).
   - After logging in, create a project and within that project deploy a free cluster.

3. **Configure Database Access**:

   - Create a new user for your database (if not alredy done so) in MongoDB Atlas.
   - Navigate to "Database Access" under "Security" and create a new user with the appropriate permissions.

4. **Whitelist IP Address**:

   - Go to "Network Access" under "Security" and whitelist your IP address to allow access from your machine.
   - For example, you could whitelist 0.0.0.0 to allow access from anywhere for ease of use.

5. **Connect to the Database**:

   - In your cluster's page on MongoDB Atlas, click on "Connect" and choose "Compass".
   - Copy the connection string.

6. **Establish Connection with MongoDB Compass**:
   - Open MongoDB Compass on your local machine, paste the connection string (replace the necessary placeholders), and establish a connection to your cluster.

### 3. Application Setup

To download and use the MERN (MongoDB, Express.js, React.js, Node.js) app from GitHub, follow these general steps:

1. **Clone the Repository**

   - Go to the GitHub repository of the MERN app.
   - Click on the "Code" button and copy the URL of the repository.
   - Open your terminal or command prompt.
   - Use the `git clone` command followed by the repository URL to clone the repository to your local machine:
     ```bash
     git clone <repository_url>
     ```
   - Navigate into the cloned directory.

2. **Install Frontend and Backend Dependencies**

   - Run the following command in your project's root directory:

     ```
     npm install && cd client && npm install && cd ..
     ```

3. **Add database connection string to `.env`**

   - Add the connection string copied from MongoDB Atlas to the `.env` file inside the project directory (replace the necessary placeholders):
     ```env
     MONGO_URL = <connection string>
     ```

4. **Adding sample data to database**

   - Download “Sample DB Schema” from Canvas and extract it.
   - In MongoDB Compass, create a database named `test` under your cluster.
   - Add four collections to this database: `categories`, `orders`, `products`, and `users`.
   - Under each collection, click "ADD DATA" and import the respective JSON from the extracted "Sample DB Schema".

5. **Running the Application**
   - Open your web browser.
   - Use `npm run dev` to run the app from root directory, which starts the development server.
   - Navigate to `http://localhost:3000` to access the application.

## 5. Unit Testing with Jest

Unit testing is a crucial aspect of software development aimed at verifying the functionality of individual units or components of a software application. It involves isolating these units and subjecting them to various test scenarios to ensure their correctness.  
Jest is a popular JavaScript testing framework widely used for unit testing. It offers a simple and efficient way to write and execute tests in JavaScript projects.

### Getting Started with Jest

To begin unit testing with Jest in your project, follow these steps:

1. **Install Jest**:  
   Use your preferred package manager to install Jest. For instance, with npm:

   ```bash
   npm install --save-dev jest

   ```

2. **Write Tests**  
   Create test files for your components or units where you define test cases to evaluate their behaviour.

3. **Run Tests**  
   Execute your tests using Jest to ensure that your components meet the expected behaviour.  
   You can run the tests by using the following command in the root of the directory:

   - **Frontend tests**

     ```bash
     npm run test:frontend
     ```

   - **Backend tests**

     ```bash
     npm run test:backend
     ```

   - **All the tests**
     ```bash
     npm run test
     ```

## 6. GitHub Workflow:

**CI Link:** https://github.com/cs4218/cs4218-2510-ecom-project-team002/actions/runs/18268970548/job/52008103051

## 7. Scope of Members:

- Donavon:

  - Features: Contact, Login, Payment, Policy, Registration, and Protected Routes
  - Client related Files: pages/Contact.js, pages/Auth/Login.js, pages/Policy.js, context/auth.js, pages/Auth/Register.js
  - Server Related Files:
    - controllers/productController.js
      1.  braintreeTokenController
      2.  brainTreePaymentController
    - helpers/authHelper.js
    - middlewares/authMiddleware.js
    - controllers/authController.js
      1.  registerController
      2.  loginController
      3.  forgotPasswordController
      4.  testController

- Hao Wen
  - Features: Admin Actions, Admin Dashboard, Admin View Products, Profile
  - Client related Files:
    - components/Form/CategoryForm.js
    - pages/admin/CreateCategory.js
    - pages/admin/CreateProduct.js
    - pages/admin/UpdateProduct.js
    - components/AdminMenu.js
    - pages/admin/AdminDashboard.js
    - pages/admin/Products.js
    - pages/user/Profile.js
  - Server Related Files:
    - controllers/categoryController.js
      1. createCategoryController
      2. updateCategoryController
      3. deleteCategoryController
    - controllers/productController.js
      1. createProductController
      2. deleteProductController
      3. updateProductController
- David

  - Features: Admin View Orders, Admin View Users, General, Home, Order
  - Client related Files:
    - pages/admin/AdminOrders.js
    - pages/admin/Users.js
    - components/Routes/Private.js
    - components/UserMenu.js
    - pages/user/Dashboard.js
    - pages/Homepage.js
    - pages/user/Orders.js
  - Server Related Files:
    - models/userModel.js
    - controllers/authController.js
      1.  updateProfileController
      2.  getOrdersController
      3.  getAllOrdersController
      4.  orderStatusController
    - models/orderModel.js

- Zoe

  - Features: Product retrieval, Cart
  - Client related Files:
    - context/cart.js
    - pages/CartPage.js
    - pages/ProductDetails.js
    - pages/CategoryProduct.js
  - Server Related Files:
    - controllers/productController.js
      1. getProductController
      2. getSingleProductController
      3. productPhotoController
      4. productFiltersController
      5. productCountController
      6. productListController
      7. searchProductController
      8. realtedProductController
      9. productCategoryController
      - models/productModel.js
    - models/productModel.js

- Zoebelle
  -Features: Category Listing & Single-Category View, Site Layout, Spinner UX, Static Pages, Global Search

  -Client Related Files:
  -hooks/useCategory.js
  -pages/Categories.js
  -components/Header.js,
  -components/Footer.js
  -components/Layout.js
  -components/Spinner.js
  -pages/About.js
  -pages/Pagenotfound.js
  -components/Form/SearchInput.js
  -context/search.js
  -pages/Search.js

  -Server Related Files:
  -controllers/categoryController.js
  1.categoryControlller
  2.singleCategoryController
  -models/categoryModel.js
  -config/db.js`

### AI Usage Declaration:

- Donavon: AI tools were used to generate unit test cases, refine comments for the unit tests and documentation.
- Hao Wen: AI tools were used to generate unit test cases, refine comments for the unit tests and documentation.
- David: AI tools were used to generate unit test cases, refine comments for the unit tests and documentation.
- Zoe: AI tools were used to generate unit test cases, mostly mocks
- Zoebelle: AI tools were used to generate unit test cases, refine comments for the unit tests and documentation.
