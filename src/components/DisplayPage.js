import React, { useEffect, useState } from "react"


function DisplayPage({uploads}){
    
    return (
        <div>
            <h1>DisplayPage</h1>
            {uploads.map((upload)=>{
                return (
                    <div key={upload.id} className="display_cards">
                        <h1 className="display_title">{upload.title}</h1>
                        <p className="display_content">{upload.content}</p>      
                        <p>
                            <button className="like_button">👍</button>
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