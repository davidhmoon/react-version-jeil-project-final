import React, { useState, useEffect} from "react"
import Posts from './Posts.js'
import Pagination from "./Pagination.js"
import './index.css';

export default function App () {
    const [hotelData, setHotelData] = React.useState([])
    const [hotelDisplayArray, setHotelDisplayArray] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(3);
    const [gameStart, setGameStart] = React.useState(false)
    let starValue = 0

    React.useEffect(()=>{
    fetch(`https://my-json-server.typicode.com/davidhmoon/30-object-repository/test`)
        .then(res => res.json())
        .then(data => { setHotelData(data)
       })
    },[])
    
    React.useEffect(()=>{
        function blah(e){
            if (e.target.id === "getHotels") {
                getHotels(document.getElementById("search-value").value)
                }
        }
    document.addEventListener("click", blah)
    return function () {document.removeEventListener("click", blah)}
        
    }
    )
    
    
    function getHotels(stars) {
        if (gameStart === false){
            setGameStart(true)
        }
        console.log(hotelData.filter(x =>x.stars==stars).map(x => [x.name]))
         setHotelDisplayArray(hotelData.filter(x =>x.stars==stars).map(x => [x.name]))
    }
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
     
    
    
    let indexOfLastPost = currentPage * postsPerPage
    let indexOfFirstPost = indexOfLastPost - postsPerPage
    let currentPosts = hotelDisplayArray.slice(indexOfFirstPost, indexOfLastPost)
    

    
    return (
        <div className = "container">
            <input type='text' placeholder="Star rating" id='search-value'/>
            <button id="getHotels">Get Hotels</button>
            {currentPosts.length>0 ? <Posts hotelDisplayArray={currentPosts}/> :  gameStart ? <div>error did not enter a number 1-5</div> : <div> please enter a star rating number between 1-5</div> }
            {currentPosts.length>0 && <Pagination postsPerPage={postsPerPage} totalPosts={hotelDisplayArray.length} paginate={paginate}/>}
            
        </div>
    )
    
}