import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Producto = ({ prod }) => {
    return (
        <Card key={prod.id} className="custom-card">
            <Card.Img variant="top" src={prod.image} className="custom-card-img" />
            <Card.Body>
                <Card.Title className='custom-title'>{prod.title}</Card.Title>
                <Button variant="secondary">Comprar</Button>
            </Card.Body>
        </Card>
    )
}
