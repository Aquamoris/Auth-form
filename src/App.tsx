import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Policy from "./components/policy/Policy";
import ResetPassword from "./components/auth/ResetPassword";

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/reset' element={<ResetPassword/>}/>
                <Route path='/policy' element={<Policy/>}/>
            </Routes>
        </div>
    );
}

export default App;
