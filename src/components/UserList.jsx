// src/components/UserList.jsx
import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';
import UserCard from './UserCard';
import { Container, Row, Col } from 'react-bootstrap';

const UserList = () => {
  // Implement the logic to get the users from the API
  // Show the users

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">User List</h1>
      <Row>
        {[].map(user => ( // To be corrected
          <Col key={user.id} md={4} className="mb-4">
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserList;
