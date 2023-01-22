import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";

function UploadForm({ currentUser, onAddUpload}){
    const [newTitle, setNewTitle] = useState("")
    const [newContent, setNewContent] = useState("")
    const history = useHistory()  

    function handleSubmit(e){
        e.preventDefault()

        const contentData = {
            title: newTitle,
            content: newContent,
            likes: 0,
            uploadedBy: currentUser
        }

        fetch("http://localhost:3000/uploads", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contentData)
        })
        .then((r) => r.json())
        .then((newUpload) => onAddUpload(newUpload))

        document.getElementById("title_input").value = ""
        document.getElementById("content_input").value = ""

        history.push("/displaypage")
    }

    return (
        <div>
          <h1>Upload Form</h1>
            <div>
                <form onSubmit={handleSubmit} id="upload_form">
                    <h2>Upload Here!</h2>
                    <input id="title_input" placeholder="Title" onChange={(e) => setNewTitle(e.target.value)}></input>
                    <textarea id="content_input" placeholder="Content: Hit tab then enter to Submit." onChange={(e) => setNewContent(e.target.value)}></textarea>
                    <input id="submit_upload" type="submit" value="Upload"></input>
                </form>
            </div>
        </div>
    )

}

export default UploadForm