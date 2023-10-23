Application link : https://delightful-frangollo-c9364e.netlify.app/

# Approach:

Product page :
1) First of all I decided to make 3 pages and the elements that are used in the pages are made as separate components.
2) The pages are Home, Products, Checkout, and Cart. And the components are Navbar and Product.
3) I have created a dummy array of JSON objects which has all the products with their attributes.
4) Then when a user goes to the products he gets displayed with all the products.
5) Then the product page has Sort By ratings and price. For the sorting process, I used the useState() hook, whenever the user selects a particular type of sorting option the request is handled by the respective functions where the function updates the array with the setArray.
6) Then the sorted array is mapped and the product component is passed the each product detail which renders the component in the product page.
7) The product object has an attribute called category, so I used js method called .filter() to the current array and set the array with the filtered array.
8) Implemented the search product by name which uses a linear search method.

Cart page : 
1) The products that are added to the cart are rendered on the product page using the cart array which is set on the product page. I made the cart and setCart as global variables in the App.js. I can improve it using Context API.
2) The total and the count are calculated when the component state changes. I used useEffects() hook to achieve this.
3) A proceed to pay button redirects the user to the checkout page.

Checkout page : 
1) This page has a simple form that lets a user add a shipping address and select the payment address.



# I can include DB and make it a pure MERN application. If I get an extra 4 days.



# I used Chakra UI for the UI react hooks for state management
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
