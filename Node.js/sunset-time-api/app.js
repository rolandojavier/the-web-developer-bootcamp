const axios = require('axios');

axios.defaults.baseURL = 'https://www.metaweather.com/';

//Sunset time in Miami
axios.get('/api/location/search/?query=miami')
    .then((response) => {
        //Retreive city woeid (Where On Earth ID)
        return response.data[0].woeid;
    })
    .catch((error) => {
        //Handle error
        console.log('Error getting city woeid: ' + error);
    })
    .then((woeid) =>  {
        //Retreive location weather data
        axios.get(`/api/location/${woeid}`)
            .then((response) => {
                const sunsetDate = new Date(response.data.sun_set);
                //Get only hour and minutes
                const options = {
                    hour: 'numeric',
                    minute: 'numeric'
                };
                const sunsetTime = sunsetDate.toLocaleTimeString('en-US', options); 
                console.log('The sunset in Miami will be at ' + sunsetTime);
            })
            .catch((error) => {
                //Handle error
                console.log('Error getting weather data: ' + error);
            })
    });