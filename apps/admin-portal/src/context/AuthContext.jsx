// // src/context/AuthContext.jsx
// import React, { createContext, useState, useEffect } from 'react';
// import { verifyUserSession } from '../services/authService'; // We'll create this service

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(true); // Start loading on initial load

//   useEffect(() => {
//     // This effect runs once on app startup to check for an existing session
//     const checkSession = async () => {
//       try {
//         const userData = await verifyUserSession(); // API call to check cookie
//         if (userData) {
//           setUser(userData);
//           setIsAuthenticated(true);
//         }
//       } catch (error) {
//         console.error("No valid session found", error);
//         setUser(null);
//         setIsAuthenticated(false);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     checkSession();
//   }, []);

//   const login = (userData) => {
//     setUser(userData);
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     // Future: Call logout API endpoint here
//     setUser(null);
//     setIsAuthenticated(false);
//   };

//   const value = { user, isAuthenticated, isLoading, login, logout };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export default AuthContext;


// apps/admin-portal/src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
// We don't need the service for now, but we'll keep the import for later
// import { verifyUserSession } from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Set isLoading to false initially since we are not fetching anything
  const [isLoading, setIsLoading] = useState(true);

  // --- TEMPORARY CHANGE FOR DEVELOPMENT ---
  useEffect(() => {
    // This effect now automatically logs in a mock admin user on app load.
    const mockLogin = () => {
      console.warn("AuthContext: MOCK LOGIN IS ACTIVE FOR DEVELOPMENT.");
      const mockAdminUser = {
        id: 999,
        name: 'Dev Admin',
        role: 'admin',
      };
      setUser(mockAdminUser);
      setIsAuthenticated(true);
      setIsLoading(false); // We are done "loading"
    };

    mockLogin();
    
    // The original session check is commented out for now.
    /*
    const checkSession = async () => {
      try {
        const userData = await verifyUserSession();
        if (userData) {
          setUser(userData);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("No valid session found", error);
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };
    checkSession();
    */
  }, []);

  // The login and logout functions can remain for future use
  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // In a mock environment, logout can simply mean reloading the page
    // which will trigger the mock login again.
    // For a real logout simulation, you could set the state to null.
    setUser(null);
    setIsAuthenticated(false);
    console.log("User logged out.");
    // In a real app, you would redirect to /login here.
  };

  const value = { user, isAuthenticated, isLoading, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;