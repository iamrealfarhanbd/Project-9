import { useEffect, useState } from "react"

const useReview = ()=>{
    const [reviews , setReviews] = useState([])
    
    useEffect(()=>{
        fetch('review.json')
        .then(res=> res.json())
        .then(reviewData=>setReviews(reviewData))
    },[])

    return [reviews,setReviews];
}
export default useReview;