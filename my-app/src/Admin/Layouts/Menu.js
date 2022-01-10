import React from 'react'
import {Link} from "react-router-dom";
export default function Menu(props) {
    const [mode,setMode]=React.useState("dashboard")
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                    <span className="brand-text font-weight-light">To Do List</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                   
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
                        with font-awesome or any other icon font library */}
                        <li className="nav-item ">
                            <div className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>
                                    To Do List
                                <i className="right fas fa-angle-left" />
                                </p>
                            </div>
                            <ul className="nav nav-treeview">
                                <li className="nav-item" onClick={()=>setMode("dashboard") }>
                                <Link to="/" className={`nav-link ${ mode=="dashboard"?"active":""}`}>
                                <i className={`far fa-circle nav-icon`}  />
                                    <p>Dashboard To Do List</p>
                                </Link>
                                </li>
                                <li className="nav-item" onClick={()=>setMode("add") }>
                                <Link to="/add" className={`nav-link ${ mode=="add"?"active":""}`}>
                                    <i className={`far fa-circle nav-icon`} />
                                    <p>Tambah To Do List</p>
                                </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
                </aside>

        </div>
    )
}
