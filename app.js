const express = require('express');
const jwt = require('jsonwebtoken');
const createToken = async () => {
    const token = await jwt.sign({_id:"62701344091362348ad0c64e"},"mynameisvikramsinghdewdaamillionear")
    console.log(token);
};
createToken();
