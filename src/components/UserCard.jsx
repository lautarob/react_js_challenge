// src/components/UserCard.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const UserCard = ({ user }) => {
  return (
    <Card className="shadow-sm">
      <Card.Img variant="top" src={`https://i.pravatar.cc/150?img=${user.id}`} alt="User Avatar" />
      <Card.Body>
        <Card.Title className="text-primary">{user.name}</Card.Title>
        <Card.Text>
          <strong>Email:</strong> {user.email}
          <br />
          <strong>Phone:</strong> {user.phone}
          <br />
          <strong>Address:</strong> {user.address.street}, {user.address.city}
        </Card.Text>
        <Button variant="primary">Contact</Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
