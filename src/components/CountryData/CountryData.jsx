import React from 'react';
import Country from '../Countries/Country/Country';

const CountryData = ({Country,handleVisitedCountry,handleVisitedFlags}) => {
    return (
        <div>
            <p><small>Country data: {Country.name.common}</small></p>
        </div>
    );
};

export default CountryData;