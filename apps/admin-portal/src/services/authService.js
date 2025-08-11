// src/services/authService.js

// This function simulates logging in and getting a user object back
export const loginUser = async (credentials) => {
  // In the future, this will be:
  // const response = await fetch('/api/v1/auth/login', { method: 'POST', ... });
  // const data = await response.json();
  
  // For now, we simulate a successful login for an admin
  if (credentials.email === 'admin@tutorexel.com' && credentials.password === 'password') {
    return Promise.resolve({ id: 1, name: 'Admin User', role: 'admin' });
  } else {
    return Promise.reject(new Error('Invalid credentials'));
  }
};

// This function simulates checking if a user's cookie is still valid on page load
export const verifyUserSession = async () => {
  // In the future, this will be:
  // const response = await fetch('/api/v1/auth/verify-session');
  // if (!response.ok) throw new Error("Session invalid");
  // return response.json();

  // For now, we'll simulate that there is no active session
  return Promise.reject(new Error("No session"));
};