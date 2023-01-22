import { upload } from "@testing-library/user-event/dist/upload"
import React, { useEffect, useState } from "react"


function DisplayPage({uploads, onDeleteUpload, updateLikes, filterValue, handleChange}){  
    const [likeState, setLikeState] = useState(true)


    function handleDelete(e){
        let parent = e.target.parentNode
        let title = parent.childNodes[1].innerText
        let targetUpload = uploads.find(upload => upload.title === title)

        fetch(`http://localhost:3000/uploads/${targetUpload.id}`, {
            method: "DELETE",
          })
            .then((r)=> r.json())
            .then(() => onDeleteUpload(targetUpload))
    }

    function handleLike(e, targetUpload){
        let cardHtml = e.target.innerHTML
        setLikeState(!likeState)
        console.log(likeState)
        if(likeState === false){
            cardHtml = "👎"
        }
        fetch(`http://localhost:3000/uploads/${targetUpload.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                likes: (targetUpload.likes + 1)
              }),
        })
        .then((r) => r.json())
        .then((likedUpload) => updateLikes(likedUpload))
    }

    
    return (
        <div>
            <h1>The Log!</h1>
            <select id="filter_value"value={filterValue} onChange={(e) => handleChange(e)}>
                <option>Filter By</option>
                <option>Misc</option>
                <option>Music</option>
                <option>Idea</option>
                <option>Code</option>
                <option>To-Do</option>
            </select>
            {uploads.map((upload, i)=>{
                return (
                    <div key={i} className="display_cards">
                        <button onClick={handleDelete} className="delete_button">X</button>
                        <h1 className="display_title">{upload.title}</h1>
                        <h4 className="category">Category: {upload.category}</h4>
                        <p className="display_content">{upload.content}</p>      
                        <p>
                            <button className="like_button" onClick={(e) => handleLike(e, upload)}>👍</button>
                            {upload.likes} likes
                        </p>
                        <p>Uploaded By: {upload.uploadedBy}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayPage