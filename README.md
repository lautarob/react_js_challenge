
# React JS Challenge with Vite and Bootstrap

This project is a simple React application that fetches user data from an external API and displays it using Bootstrap for styling. The main objective is to test the trainee's ability to connect to an API, manage state, and apply styling.

## Instructions to Run the App

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/lautarob/react_js_challenge.git
   cd api-connection-challenge
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open the App**:
   Open your browser and navigate to `http://localhost:5173`.

## Challenges

### 1. API Service Connection

In the `src/services/api.js` file, the API connection logic is missing. Your task is to fill in this file to fetch user data from `https://jsonplaceholder.typicode.com/users`.

**Instructions**:
- Open the `src/services/api.js` file.
- Implement a function to fetch user data from the provided API.

### 2. Connect API Service to User List

The connection between the API service and the `UserList` component has been removed. Your task is to re-establish this connection and ensure that user data is fetched and displayed correctly.

**Instructions**:
- Open the `src/components/UserList.jsx` file.
- Import the `function` function from the API service.
- Use the `function` function to fetch data and update the state.

### 3. Styling Challenges

Add the following styling enhancements using Bootstrap and custom CSS:

- Make the user cards more visually appealing by adding hover effects and shadows.
- Ensure the application is responsive and looks good on mobile devices.
- Customize the Bootstrap theme by modifying the primary color.

**Instructions**:
- Update the `src/styles/index.css` file with additional custom styles.
- Use Bootstrap classes to improve the layout and design.

### 4. Logic Challenges

Enhance the application with the following logic improvements:

- Add a search functionality to filter users by name.
- Implement pagination to handle a large number of users.
- Add a loading indicator while fetching data from the API.

**Instructions**:
- Add a search input in the `UserList` component and implement filtering logic.
- Implement pagination by displaying a limited number of users per page and adding navigation controls.
- Display a loading spinner while data is being fetched from the API.

### Files to Modify

- `src/services/api.js`
- `src/components/UserList.jsx`
- `src/styles/index.css`

Good luck with the challenges! Feel free to ask any questions if you need further clarification.
