
import axios from 'axios'
import { useState } from 'react'



export default function ApiMeteo() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(undefined);
    const [data, setData] = useState(undefined);

    const fetchMeteo = async () => {
        try {
            setLoading(true)
            setError(undefined);

            const result = await axios({
                baseURL: 'http://api.openweathermap.org/data/2.5/weather?q=Rome,Italy&appid=5927eede81005116559ee463a04139b8',
                method: 'GET'






            })
            setData(result.data.weather);
            console.log(result.data.weather);
            return result.data.weather


        } catch (error) {
            console.log(error)
            setError(error)
            throw (error)


        } finally { setLoading(false) }
    }



    return (
        
        fetchMeteo,
        loading,
        data,
        error
    )








}
