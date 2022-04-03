import { useEffect, useState } from "react"

const useChart = ()=>{
    const [charts , setCharts] = useState([])
    
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(chartdata=>setCharts(chartdata))
    },[])

    return [charts,setCharts];
}
export default useChart;