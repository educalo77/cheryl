import React, { useEffect } from 'react';
import { listProduct } from "../Redux/Products/Actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import Carousels from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import carousel from './css/carousel.module.css';

function Carousel() {

  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
    
    console.log(products)
    
    return (
        <Carousels className={carousel.container} >
            {
             products && products.map( (item, i) => <img className={carousel.image} key={i} src={item.img} alt=""/> )
            }
        </Carousels>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default Carousel
