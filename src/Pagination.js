import React from "react"


export default function Posts ( {postsPerPage, totalPosts, paginate}) {
    const pageNumbers = []
    
    for (let i=1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <div className="containerButtons">
                {pageNumbers.map(number => { return (
                    <div key={number}>
                        <a className="anchors" onClick={()=> paginate(number)}>
                            {number}
                        </a>
                    </div> )
                })}
            </div>
        </nav>
    )
    
}