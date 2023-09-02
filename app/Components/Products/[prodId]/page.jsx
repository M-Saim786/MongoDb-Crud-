"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function page({ params }) {

    const [Products, setProducts] = useState([])
    useEffect(() => {
        // const axios = require('axios');
        // axios
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/Api/Product',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data)
                for (const i of response.data.data) {
                    if (i._id === params.prodId) {
                        let data = i
                        setProducts(data)
                        console.log(Products)
                        console.log(params.prodId)
                        console.log(i._id);
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            });


    }, [])
    return (
        <div>

            Params ID
            {/* {params.prodId} */}

            {/* 
            {
                Products.map((v, i) => {
                    return (
                        <>
                            {v.UserName}
                        </>
                    )
                })
            } */}
        </div>
    )
}

export default page
