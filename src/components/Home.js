import React, { useEffect, useState } from "react"

function Home(){
    const [uploads, setUploads] = useState([])
    
    useEffect(() =>{
    fetch("http://localhost:3000/uploads")
        .then((r) => r.json())
        .then((uploads) => setUploads(uploads))
    }, [])

    return (
        <div id="home">
          <h1>IdeaLog</h1>
          <p>Welcome to IdeaLog, a place for you to put your ideas, code, music, etc.</p>
          <p>Go ahead and login above to start the process!</p>
        </div>
    )
}

export default Home