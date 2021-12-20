import {Header,Menu,Footer} from './Layouts/Layouts'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from 'react'
export default function Admin() {
  
    return (
        <div className="wrapper">
          
          {/* <div className="preloader flex-column justify-content-center align-items-center">
            <img className="animation__shake" src="/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height={60} width={60} />
          </div> */}

            <Header />
            <Menu />
            

            <Footer />
        </div>
    )
}
