const express = require('express');
const jwt = require('jsonwebtoken');
const createToken = async () => {
    const token = await jwt.sign({ _id: "62701344091362348ad0c64e" }, "mynameisvikramsinghdewdaamillionear",{
        expiresIn:"2 minutes"
    })
    console.log(token);
    const userVerify = await jwt.verify(token, "mynameisvikramsinghdewdaamillionear")
    console.log(userVerify);
};
createToken();
