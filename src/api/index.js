import axios from 'axios'


const getRestaurants = async (type, sw, ne) =>{
    try {
        const response = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '9b6f5786dbmsh71e42b8da496583p10aea4jsn02a0bb1a2545'
            }
          })
        const {data : {data}} = response
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export {getRestaurants}