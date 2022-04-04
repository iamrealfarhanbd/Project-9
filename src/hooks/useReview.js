import { useEffect, useState } from "react"

const useReview = ()=>{
    const [reviews , setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(true);
        fetch('review.json')
        .then(res=> res.json())
        .then(reviewData=>setReviews(reviewData))
        setIsLoading(false);
    },[])

    return [reviews,setReviews,isLoading, setIsLoading];
}
export default useReview;