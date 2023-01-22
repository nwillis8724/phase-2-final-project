import { upload } from "@testing-library/user-event/dist/upload"
import React, { useEffect, useState } from "react"


function DisplayPage({uploads, onDeleteUpload, updateLikes}){
    

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

    function handleLike(targetUpload){

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
        
        //it adds one to json but doesnt update targetUpload
    }
    
    return (
        <div>
            <h1>The Log!</h1>
            {uploads.map((upload)=>{
                return (
                    <div key={upload.id} className="display_cards">
                        <button onClick={handleDelete} className="delete_button">X</button>
                        <h1 className="display_title">{upload.title}</h1>
                        <p className="display_content">{upload.content}</p>      
                        <p>
                            <button className="like_button" onClick={() => handleLike(upload)}>👍</button>
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