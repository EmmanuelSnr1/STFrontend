// // ProtectedRoute.js

// import { useContext } from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { AuthContext } from '../auth/AuthContext'; // Adjust the path

// function ProtectedRoute(props) {
//     const { user } = useContext(AuthContext);

//     if (user) {
//         return <Route {...props} />;
//     } else {
//         return <Navigate to="/login" />;
//     }
// }

// export default ProtectedRoute;
