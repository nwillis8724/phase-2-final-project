import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import DisplayPage from './components/DisplayPage';
import Login from './components/Login'
import UploadForm from "./components/UploadForm";
import NavBar from "./components/NavBar"
import { useState, useEffect } from "react";

function App() {
  const [uploads, setUploads] = useState([])
  const [currentUser, setCurrentUser] = useState("")
    
    useEffect(() =>{
    fetch("http://localhost:3000/uploads")
        .then((r) => r.json())
        .then((uploads) => setUploads(uploads))
    }, [])

    function onAddUpload(newUpload){
      setUploads([...uploads, newUpload])
    }

    function handleUser(e){
      setCurrentUser(e.target.value)
    }

  return (
    <div>
      <NavBar currentUser={currentUser} />
      <Switch>
        <Route path="/displaypage">
          <DisplayPage uploads={uploads} />
        </Route>
        <Route path="/login">
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser} handleUser={handleUser}/>
        </Route>
        <Route path="/uploadform">
          <UploadForm currentUser={currentUser} onAddUpload={onAddUpload}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
