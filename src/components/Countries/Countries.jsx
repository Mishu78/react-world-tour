import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{

        fetch('https://restcountries.com/v3.1/independent?status=true')
        .then(res=>res.json())
     //.then(data=>console.log(data))
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(data=>setCountries(data));
    },[])
    return (
        <div>
    <h3>Countries: {countries.length} </h3>
    {

        countries.map(country=><Country 
            key={country.cca3} 
            country={country}></Country>)
    }
        </div>
    );
};

export default Countries;