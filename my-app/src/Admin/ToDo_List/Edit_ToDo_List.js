import React from 'react'
import firebase from "../../firebase";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker"


export default function Edit_ToDo_List(props) {
    const ref = firebase.firestore().collection("todolist");
    const [todo_list,setToDo_List]=React.useState({})
    const { id } = useParams();

    React.useEffect(()=>{
        if(id!=undefined){
            ref
            .get()
            .then((item) => {
                let items = item.docs.map((doc) => doc.data());
                items = items.find((e)=>e.id==id)
                items.tanggal = new Date(items.tanggal*1000)
                setToDo_List(items);
            });
        }
    },[id])

    function updateToDoList(event,type){
        const copyDataTodoList={...todo_list}
        if(type=="deskripsi") copyDataTodoList.deskripsi=event.target.value
        else if(type=="tanggal") copyDataTodoList.tanggal=event
        setToDo_List(copyDataTodoList)
    }

    function update_data(){
        
        ref
        .doc(id)
        .update(todo_list)
        .then(()=>{
            props.history.push('/');
            
        })
    }
    
    function CardToDoList(){
        return (
            <div className="col-md-6">
                <div className="card card-danger">
                    <div className="card-header">
                        <h3 className="card-title">To Do List</h3>
                        <div className="card-tools">
                            
                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                <i className="fas fa-minus" />
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="inputEstimatedBudget">Deskripsi</label>
                            <input type="text" value={todo_list.deskripsi} onChange={(event)=>updateToDoList(event,"deskripsi")} id="inputEstimatedBudget" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEstimatedDuration">Tanggal</label>
                            
                            <DatePicker selected={todo_list.tanggal}
                            onChange={(date)=>updateToDoList(date,"tanggal")} />
                        </div>
                        <div className="form-group">
                            <button type="button" onClick={()=>update_data()} className="btn btn-block bg-primary btn-sm" >Edit</button>
                        </div>
                        
                    </div>
                    {/* /.card-body */}
                </div>
                {/* /.card */}
            </div>
        )
    }

    return ( 
    <div className="content-wrapper">
        <section className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h1>Amel's Todo List</h1>
                </div>
                <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Dashboard To Do List</li>
                </ol>
                </div>
            </div>
            </div>
        </section>
        <section className="content">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Dashboard To Do List</h3>
                    <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i className="fas fa-minus" />
                    </button>
                    
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        {CardToDoList()}
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}
