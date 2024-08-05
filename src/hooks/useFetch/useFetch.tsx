import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url){
    const [resultData, setResultData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    const fetchData = async() => {
        try{
            const {data} = await axios.get(url)
            setResultData(data)
            setLoading(false)
        }
        catch (err) {
            setError(err.message)
            setLoading(false)
        } 
    }
    useEffect(() => {
        fetchData()
    },[])

    return {error, loading, resultData}
}