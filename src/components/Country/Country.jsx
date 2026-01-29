import React from 'react';
import './country.css'
const Country = ({country}) => {
    const {userId,title} =country;
    return (
        <div className="country">
            <h3>userid:{userId}</h3>
            <h3>title:{title}</h3>
        </div>
    );
};

export default Country;