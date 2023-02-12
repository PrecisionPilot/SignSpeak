import { useState } from "react";
import Level1 from "./level1";
import Level2 from "./Level2";
import Level3 from "./Level3";
import Live from "./live";
import All from "./All";
import {  BrowserRouter as Router, Route, Routes, Switch, useNavigate } from 'react-router-dom';

export default function Home() {
    const [level, setLevel] = useState(1);

    let currentLevel

    if (level === 1) {
        currentLevel = <Level1 />
    }
    else if (level === 2) {
        currentLevel = <Level2 />
    }
    else if (level === 3) {
        currentLevel = <Level3 />
    }
 
    return (
        <div>
            { currentLevel }
          <Router>
            <Routes> 
              <Route path="/">
                <All/>
              </Route>
              <Route path="/live">
                <Live />
              </Route>
            </Routes>
          </Router>
        </div>
    )
}