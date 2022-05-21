import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const FoodCard = (props) => {
    const {foods} = props;
    const text = foods.strInstructions;
    const strBlog = text.slice(0, 30);
    let navigate = useNavigate();
    const navigateClick =() => {
        navigate('/restaurant/'+foods.idMeal)
    }
    return (
<Col>
<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={foods.strMealThumb} />
        <Card.Body>
            <Card.Title>{foods.strMeal}</Card.Title>
            <Card.Text>{strBlog}</Card.Text>
            <>
            <Link to={'/restaurant/'+foods.idMeal} variant="primary" size="sm">
                Link Button
            </Link>{' '}
            <Button onClick={navigateClick} variant="secondary" size="sm">
                Button
            </Button>
            </>
        </Card.Body>
        </Card>
</Col>
    );
};

export default FoodCard;