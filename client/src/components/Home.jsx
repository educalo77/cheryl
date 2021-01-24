import React from 'react';
import CatalogComponent from '../container/catalogComponent';
import Carousel from '../container/Carousel';
import home from './css/home.module.css';

function Home() {
    return (
        <div className={home.container} >
            <div className={home.carousel}>
            <section id="carousel">
                <Carousel />
                </section>
            </div>
            <div className={home.catalog}>
            <section id="catalog" >
                <CatalogComponent />
            </section>
            </div>
        </div>
    )
}

export default Home
