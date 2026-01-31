import CountryData from "../CountryData/CountryData";
const CountryDetail = ({country,handleVisiTedCountry,handleVisitedFlags}) => {
    return (
        <div>
          <h4>Country Details</h4> 
          <hr/>
          <CountryData>
           country={country}
           handleVisitedCountry={handleVisiTedCountry}
           handleVisitedFlags={handleVisitedFlags} 
            </CountryData> 
            {/* <CountryData {...props}></CountryData> */}
        </div>
    );
};

export default CountryDetail;