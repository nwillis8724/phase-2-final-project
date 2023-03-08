import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import DisplayPage from './components/DisplayPage';
import Login from './components/Login'
import UploadForm from "./components/UploadForm";
import SignOut from "./components/SignOut"
import NavBar from "./components/NavBar"
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


function App() {
  const [uploads, setUploads] = useState([])
  const [currentUser, setCurrentUser] = useState("")
  const [currentInput, setCurrentInput] = useState("")
  const [filterValue, setFilterValue] = useState("No Filter")
  const history = useHistory()

    useEffect(() =>{
    fetch("http://localhost:3000/uploads")
        .then((r) => r.json())
        .then((uploads) => setUploads(uploads))
    }, [])

    function onAddUpload(newUpload){
      setUploads([...uploads, newUpload])
    }

    function handleLoginInput(e){
      setCurrentInput(e.target.value)
    }

    function handleUser(){
      setCurrentUser(currentInput)
    }

    function handleSignOut(){
      setCurrentUser("")
      history.push("/login")
    }

    function onDeleteUpload(deletedUpload){
      const updatedUploads = uploads.filter((upload) => upload.id !== deletedUpload.id)
      setUploads(updatedUploads)
    }

    function updateLikes(likedUpload){
      const updatedLikes = uploads.map((upload) => {
        if (upload.title === likedUpload.title){
          return likedUpload
        }else {
          return upload
        }
      })
      setUploads(updatedLikes)
    }

    function handleChange(e){
      setFilterValue(e.target.value)
  }
  
  const filteredUploads = uploads.filter(upload => {
    if(filterValue === "No Filter"){
      return upload
    }else{
      return upload.category === filterValue
    }
  })
  return (
    <div>
      <NavBar currentUser={currentUser} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login 
            handleUser={handleUser} 
            handleLoginInput={handleLoginInput}
          />
        </Route>
        <Route path="/uploadform">
          <UploadForm 
            currentUser={currentUser} 
            onAddUpload={onAddUpload}
          />
        </Route>
        <Route path="/displaypage">
          <DisplayPage 
            filterValue={filterValue} 
            handleChange={handleChange} 
            uploads={filteredUploads} 
            onDeleteUpload={onDeleteUpload} 
            updateLikes={updateLikes} 
          />
        </Route>
        <Route path="/signout">
          <SignOut 
            handleSignOut={handleSignOut}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
