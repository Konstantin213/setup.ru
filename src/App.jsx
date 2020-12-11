import './App.css';
import React from 'react'
import {Route} from "react-router-dom";
import PrimaryPage from "./component/PrimaryPage/PrimaryPage";
import SearchPage from "./component/SearchPage/SearchPage";

const App = () => {
    return (
        <div>
            <Route path="/users" component={PrimaryPage}/>
            <Route path="/searchPage" component={SearchPage}/>
        </div>
    )
}

export default App;
