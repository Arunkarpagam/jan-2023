import React from "react";
import './dashboard.css';
function Dashboard() {
    return(
    <> 
       <div id="dashboard">
        <div id="dash">
            <div id="Logo"></div>
            <img id="img one" src="https://www.shutterstock.com/image-vector/smile-food-logo-design-on-600w-2122036364.jpg" width="50px"></img>
        </div>
        <div id="board">
            <input type="text" id=" input"></input>
            <button id="d-btn">Search</button>
        </div>
        <div id=" cart">
            <img id="img two" src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png" width="50px"></img>
            
        </div>
        <div id=" profile">
            <img id="img two" src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png" width="50px"></img>
        </div>
        <div id=" Setting">
            <img id="img two" src="https://img.freepik.com/free-vector/illustration-cogwheel_53876-6326.jpg?w=740&t=st=1676625472~exp=1676626072~hmac=ea431fa0b4dc9588663f6e5789e3aad55c6f1560221e6a02ad9962deb37e3d09" width="50px"></img>

        </div>
        </div>
    </>
    )
}
export default Dashboard