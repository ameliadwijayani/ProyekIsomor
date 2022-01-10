import {Header,Menu} from './Layouts/Layouts'
import {
  Route,
} from "react-router-dom";
import React from 'react'
import Dashboard_ToDo_List from './ToDo_List/Dashboard_ToDo_List'
import Add_ToDo_List from './ToDo_List/Add_ToDo_List'
import Edit_ToDo_List from './ToDo_List/Edit_ToDo_List'
export default function Admin() {
  
    return (
        <div className="wrapper">
          
            <Header />
            <Menu />
            <Route exact path="/" component={Dashboard_ToDo_List}/>
            <Route exact path="/Add" component={Add_ToDo_List}/>
            <Route exact path="/Edit/:id" component={Edit_ToDo_List}/>
            

        </div>
    )
}
