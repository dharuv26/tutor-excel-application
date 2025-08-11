// src/screens/UserManagementPage/UserManagementPage.jsx
import React, { useState, useEffect } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
// We will create this service later
// import { getUsers, updateUserRole } from '../../services/userService';

// Mock data for now
const mockUsers = [
  { id: 1, name: 'Admin User', email: 'admin@tutorexel.com', role: 'admin' },
  { id: 2, name: 'John Doe', email: 'john.doe@example.com', role: 'teacher' },
  { id: 3, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'teacher' },
];

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching users
    setTimeout(() => {
      setUsers(mockUsers);
      setLoading(false);
    }, 500);
  }, []);

  const handleRoleChange = (userId, newRole) => {
    // In the future, this would be an API call: await updateUserRole(userId, newRole);
    console.log(`Changing user ${userId} role to ${newRole}`);
    // Update the local state to reflect the change immediately
    setUsers(users.map(user => 
      user.id === userId ? { ...user, role: newRole } : user
    ));
  };

  if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <h1>User Management</h1>
      <p className="text-muted">Change the role of existing users.</p>
      
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Form.Select 
                  value={user.role} 
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  disabled={user.role === 'admin'} // Prevent changing the admin's role
                >
                  <option value="teacher">Teacher</option>
                  <option value="admin">Admin</option>
                </Form.Select>
              </td>
              <td>
                <Button 
                  variant="outline-secondary" 
                  size="sm"
                  disabled={user.role === 'admin'}
                >
                  Save
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserManagementPage;