// // ErrorTestPage.jsx

// import React from "react";

// const ErrorTestPage = () => {
//   // Intentionally throw an error to test ErrorBoundary
//   throw new Error("An error occurred in ErrorTestPage");

//   // This code will not be reached due to the error thrown above
//   return (
//     <div>
//       <h2>Error Test Page</h2>
//       <p>This is a page for testing the ErrorBoundary.</p>
//     </div>
//   );
// };

// export default ErrorTestPage;

import React from "react";
import { Link } from "react-router-dom";

const ErrorTestPage = () => {
  try {
    // Intentionally throwing an error for testing the error boundary
    throw new Error("An error occurred in ErrorTestPage");
  } catch (error) {
    // Display the error message
    return (
      <div>
        <h2>Error Test Page</h2>
        <p>An error occurred: {error.message}</p>
        <Link to="/">Go back to the main page</Link>
      </div>
    );
  }
};

export default ErrorTestPage;
