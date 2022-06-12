import React, { useState } from "react";
import Axios from 'axios';

function PostForm() {
    const url = "https://mockrestapi.herokuapp.com/api/employee"
    const [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        country: "",
        age: ""
    })
    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            id: parseInt(data._id),
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            country: data.country,
            age: data.age
        })
            .then(res => {
                console.log(res.data)
            })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div>
            <h2> Add Details</h2>
            <form onSubmit={(e) => submit(e)}>
                <input
                    onChange={(e) => handle(e)} id="id" value={data.id}
                    type="string"
                    name="id"
                    required="required"
                    placeholder="Enter Id..">
                </input>
                <input
                    onChange={(e) => handle(e)} id="name" value={data.name}
                    type="text"
                    name="name"
                    required="required"
                    placeholder="Enter Name..">
                </input>
                <input
                    onChange={(e) => handle(e)} id="email" value={data.email}
                    type="email"
                    name="email"
                    required="required"
                    placeholder="Enter email..">
                </input>
                <input
                    onChange={(e) => handle(e)} id="phone" value={data.phone}
                    type="tel"
                    name="phone"
                    required="required"
                    placeholder="Enter Phone No." >
                </input>
                <input
                    onChange={(e) => handle(e)} id="address" value={data.address}
                    ype="text"
                    name="address"
                    required="required"
                    placeholder="Enter Address.." >
                </input>
                <input
                    onChange={(e) => handle(e)} id="country" value={data.country}
                    type="text"
                    name="country"
                    required="required"
                    placeholder="Enter Country.." >
                </input>
                <input
                    onChange={(e) => handle(e)} id="age" value={data.age}
                    type="age"
                    name="age"
                    required="required"
                    placeholder="Enter Age.." >
                </input>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default PostForm;
