import React, { useEffect } from 'react';
import { listProduct } from "../Redux/Products/Actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import Carousels from 'react-material-ui-carousel';
import carousel from './css/carousel.module.css';

function Carousel() {

  // const productList = useSelector((state) => state.productList);
  // const { products, loading, error } = productList;
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(listProduct());
  // }, [dispatch]);

    const products = [
        {
            img: "http://imgfz.com/i/o7eX90s.jpeg"
        },
                {
            img: "http://imgfz.com/i/IjXu1sU.jpeg"
        },
        {
            img: "http://imgfz.com/i/w9q2FBi.jpeg"
        },
        {
            img: "http://imgfz.com/i/IMsiw3m.jpeg"
        },
        {
            img: "http://imgfz.com/i/jPA1Ym6.jpeg"
        },
        {
            img: "http://imgfz.com/i/5mqZaeo.jpeg"
        }
    ]
    
   
    return (
        <Carousels className={carousel.container} >
            {
             products && products.map( (item, i) => <img className={carousel.image} key={i} src={item.img} alt=""/> )
            }
        </Carousels>
    )
}


export default Carousel
