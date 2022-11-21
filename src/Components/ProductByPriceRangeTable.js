import React, { useState } from 'react'
//Axios is an HTTP client library based on promises. It makes sending asynchronous 
//HTTP requests to REST endpoints easier and helps you perform CRUD operations. 
//This REST endpoint/API could be an external API like the Google API, GitHub API, 
//and so on – or it could be your own backend Node. js server.
import axios from 'axios'
import { useLocation } from 'react-router-dom';

//if u want to perform anything as soon as the page opens use useEffect hook
import { useEffect } from 'react';
const ProductByPriceRangeTable = () => {
    const {state} = useLocation();
    const {pmin}=state;
    const {pmax}=state;
const headers = {
    "Access-Control-Allow-Origin": "*"
};
    //for storing the get all products result
    const [product,setProduct]=useState([]);
//[] means that this will run only onec when page loads
    useEffect(()=>{
        loadProductsByPriceRange();

    },[]);
//since processing is done line by line therefore no loading will happen until completely processed,
// toavoid this we use asyn and await
    const loadProductsByPriceRange=(async()=>
    {
        const min=pmin.min;
        
        const max=pmax.max;
        console.log(min);
        console.log(max);
        const result=await axios.get("http://localhost:8080/products/getProductsWithinPriceRange/${min}/${max}",{headers})
        setProduct(result.data);
        console.log(result.data);
    
    })
    return (
        <div>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Pin Codes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((p,index)=>
                        (
                            <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{p.name}</td>
                            <td>{p.category}</td>
                            <td>{p.qty}</td>
                            <td>{p.price}</td>
                            <td>{p.listOfPinCodes}</td>
                            
                        </tr>
                        ))
                    }
                   
                   
                </tbody>
            </table>
        </div>
    )
}

export default ProductByPriceRangeTable 