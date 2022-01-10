import React from 'react'
import Card_ToDo_List from './Components/Card_ToDo_List';
import firebase from "../../firebase";

export const Add_ToDo_List_Context = React.createContext();
export default function Add_ToDo_List(props) {
    
    const [todo_lists,setToDo_Lists]=React.useState([])
    const ref = firebase.firestore().collection("todolist");
    React.useEffect(()=>{

    },[]);
    
	async function push_data(){
        todo_lists.map((e,index)=>{
            
            ref
            .doc(e.id)
            .set(e)
            .then(()=>{
                
            props.history.push('/');
            })
            .catch((err) => {
                console.error(err);
            });
        })
    }



    return (
       <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Tambah To Do List</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">To Do List Add</li>
                    </ol>
                    </div>
                </div>
                </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
                <Add_ToDo_List_Context.Provider value={{ todo_lists,setToDo_Lists,push_data }}> 
                    <Card_ToDo_List/>
                </Add_ToDo_List_Context.Provider>
            </section>
            {/* /.content */}
        </div>

    )
}
