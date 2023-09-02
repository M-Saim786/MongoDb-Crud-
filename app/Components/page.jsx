'use client'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function Product() {
    const router = useRouter()
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
                setProducts(response.data.data)
                console.log(Products)
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });


    }, [])
    const Delete = (e) => {
        console.log(e.target.value)
        //         const axios = require('axios');

        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `http://localhost:3000/Api/Product/${e.target.value}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

    }
    const [User, setUser] = useState({
        name: '',
        email: '',
        password: '',

    })
    return (
        <div>
            <h2>User NameF</h2>
            <table>
                <tr>
                    <th>
                        UserName
                    </th>
                    <th>
                        Id
                    </th>
                    <th>
                        Edit
                    </th>
                    <th>
                        Delete
                    </th>
                </tr>
                {
                    Products &&
                    Products.map((v, i) => {
                        return (
                            <>
                                <tr>
                                    <th>
                                        {v.UserName}

                                    </th>
                                    <th>
                                        {v._id}
                                    </th>
                                    <th>

                                        <button className='bg-blue-500'
                                            onClick={() => router.push(`/Components/Products/${v._id}`)}
                                        >
                                            {/* <Link href={`/Components/Products/${v._id}`}> */}
                                            Edit
                                            {/* </Link> */}
                                        </button>
                                    </th>
                                    <th>
                                        <button className='bg-red-500' onClick={Delete} value={v._id}>
                                            Delete
                                        </button>
                                    </th>
                                    <br />
                                </tr>
                            </>
                        )
                    })
                }
            </table>


            <div className='border'>
                <h3>
                    Add Data
                </h3>
                <Input type={'text'} placeHolder={'eter name'} name='name' />
                <Input type={'text'} placeHolder={'enter email'} />
                <Input type={'text'} placeHolder={'enter password'} name='password' />
                <button>
                    Add Data
                </button>
            </div>
        </div>
    )
}

export default Product

export const Input = ({ type, placeHolder, handlevalues, name }) => {
   

    const handleChange = (e) => {
        setUser({ ...User, [e.target.name]: [e.target.value] })
        console.log(User)
    }
    return <>
        <input type={type} name={name} id="" placeholder={placeHolder} className='border' onChange={(e) => handleChange(e)} />
    </>
}
