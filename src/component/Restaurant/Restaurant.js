import React, { useEffect, useState } from 'react';
import './Restaurant.css';
import { FaSearch} from "react-icons/fa";
import { Row } from 'react-bootstrap';
import FoodCard from '../FoodCard/FoodCard';
const Restaurant = () => {
    const [search, setSearch] = useState('');
    const searchFoods = e => {
        const targetValue = e.target.value;
        setSearch(targetValue);
    }
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    }, [search]) ;    

    return (
        <div className="main">
        <div className="input-group w-50 m-auto p-4">
          <input onChange={searchFoods} type="text" className="form-control" placeholder="Search this blog"/>
          <div className="input-group-append">
            <button className="btn btn-secondary" type="button">
              <FaSearch></FaSearch>
            </button></div>
        </div>
        <div className="FoodsContainer">
            <div className="container">
                <Row xs={1} md={3} sm={1} className="g-4">
                {
              
foods.map(food => <FoodCard key={food.idMeal} foods={food}></FoodCard>)
}
                </Row>
            </div>
        </div>
      </div>
    );
};

export default Restaurant;