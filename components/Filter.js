import React, { useState } from "react";
import products from '../products.json';
import Styles from './../styles/Filter.module.css'

const Filter = () => {

    const cat = [...new Set(products.map(product => product.category))]

    const [data, setData] = useState(products)

    const filterResult = (item) => {
        const res = products.filter((prod) => {
            return prod.category === item;
        });
        setData(res)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3 className="title">Filter by Category</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className={Styles.btn} onClick={() => filterResult({ cat })}>
                        {cat[0]}
                    </button>
                </div>
            </div >

        </div >
    );
};

export default Filter;