import React, { useState, useEffect } from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
    let { foodId } = useParams();
    const [food, setFood] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFood(data.meals[0]))
    }, [foodId])
    return (
        <div className='mt-4'>
        <Container>
        <Row>
        <div className="col-md-6 mb-4">
            <Image className="img-fluid" src={food.strMealThumb}></Image>
        </div>
        <div className="col-md-6 mb-4">
        <div className="p4">
            <p className="lead">
                <span className="mr-1"><del>{`$`+foodId}</del></span>
                <span className="mr-1">$100</span>
            </p>
<h3 className="lead font-weight-bold">{food.strMeal}</h3>
            <p className="lead font-weight-bold">Instructions</p>
            <p>{food.strInstructions}</p>
        </div>
        </div>       
        </Row>    
        </Container> 
        </div>
    );
};

export default FoodDetails;