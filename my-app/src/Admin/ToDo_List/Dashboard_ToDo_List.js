import React,{useEffect} from 'react'
import firebase from "../../firebase";
import {Button} from "react-bootstrap"
import {Link} from "react-router-dom";
export default function Dashboard_ToDo_List() {
    useEffect(()=>{
        get_data()
    },[])
    const ref = firebase.firestore().collection("todolist");

    const [todo_lists,setToDo_Lists]=React.useState([])
    const [mode,setMode]=React.useState("Semua")


    

    async function get_data(){
        ref
        .get()
        .then((item) => {
            let items = item.docs.map((doc) => doc.data());
            items=items.sort((a,b)=>{
                return (a.tanggal>b.tanggal ?1:-1)
            })
            
            if(mode=="Sebagian"){ // tanggal yang sudah lewat tidak ditampilkan
                items=items.filter((item) =>new Date(item.tanggal*1000).getDate() >= new Date().getDate())
            }
            setToDo_Lists(items);
        });
    }

    // update todo list sudah dilakukan
    function checked(id,status){
        if(status==0)status=1
        else status=0
        ref
        .doc(id)
        .update({status:status})
        .then(()=>{
            get_data()
        })
    }

    function delete_data(id) {
        ref
            .doc(id)
            .delete()
            .then(()=>{
                get_data()
            })  
      }


    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear()-1969;
        var month = months[a.getMonth()];
        var date = a.getDate();
        var time = date + '/' + month + '/' + year ;

        
        return time;
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
                            
                        <Button variant="danger" onClick={()=>{
                            if(mode=="Semua"){
                                setMode("Sebagian")
                            }else{
                                setMode("Semua")
                            }
                            get_data();
                        }}>Perlihatan {mode}</Button>
                        <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                            <i className="fas fa-minus" />
                        </button>
                        
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {todo_lists.map((e,index)=>{
                                return(
                                    <div className="col-3">
                                        <div className="card" key={index} >
                                        <div className="card-header">
                                            <div className="card-tools">
                                           
                                            </div>
                                        </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{e.deskripsi}</h5>
                                                <p className="card-text">{timeConverter(e.tanggal)}</p>
                                                <p className="card-text"><input type="checkbox" checked={e.status} onChange={()=>{checked(e.id,e.status,index)}}/> Sudah Selesai
                                                <button type="button" className="btn btn-tool" onClick={()=>{delete_data(e.id)}}>
                                                <i className="fas fa-trash" />
                                                </button>
                                                
                                                
                                                    <Link to={`/Edit/${e.id}`} className="card-link">
                                                        <button type="button" className="btn btn-block bg-primary btn-sm" >Edit</button>
                                                    </Link>
                                               </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
