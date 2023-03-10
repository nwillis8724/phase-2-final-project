import React from "react"



function DisplayPage({uploads, onDeleteUpload, updateLikes, filterValue, handleChange}){ 

    function handleDelete(e, targetUpload){
        console.log(targetUpload)

        fetch(`http://localhost:3000/uploads/${targetUpload.id}`, {
            method: "DELETE",
          })
            .then((r)=> r.json())
            .then(() => onDeleteUpload(targetUpload))
    }

    function handleLike(e, targetUpload){
        console.log(targetUpload)
        
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
                <option>No Filter</option>
                <option>Misc</option>
                <option>Music</option>
                <option>Idea</option>
                <option>Code</option>
                <option>To-Do</option>
            </select>
            {uploads.map((upload, i)=>{
                return (
                    <div key={i} className="display_cards">
                        <button onClick={(e) => handleDelete(e, upload)} className="delete_button">X</button>
                        <h1 className="display_title">{upload.title}</h1>
                        <h4 className="category">Category: {upload.category}</h4>
                        <p className="display_content">{upload.content}</p>      
                        <p>
                            <button className="like_button" onClick={(e) => handleLike(e, upload)}>👍</button>
                            {upload.likes} likes
                        </p>
                        <p>Uploaded By: {upload.uploadedBy ? upload.uploadedBy : "Anonymous"}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayPage