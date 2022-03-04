import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayProfiles from "./components/profiles/DisplayProfiles"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayProfiles/>}/>
          {/* <Route path="/users/:userID" exact component={ProfileDetails} /> */}
          <Route> 404 Not Found </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
