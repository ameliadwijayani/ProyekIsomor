import React from 'react'
import {Button} from "react-bootstrap"
import { Add_ToDo_List_Context } from '../Add_ToDo_List'
import { v4 as uuidv4 } from "uuid";
import axios from "axios"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css";
export default function Card_ToDo_List() {
   
    const doDeleteToDoList=(deletedIndex,setter,getter)=>{
        const copyDataToDoList=[...getter];
        copyDataToDoList.splice(deletedIndex,1);
        setter(copyDataToDoList)
    }
    
    function tambahComponent(getter,setter){
        setter([
            ...getter,{
                id:uuidv4(),
                deskripsi:"",
                tanggal:new Date(),
                status:0
            }
        ])
    }

    function updateToDoList(event,index,type,setter,getter){
        const copyDataTodoList=[...getter]
        if(type=="deskripsi") copyDataTodoList[index].deskripsi=event.target.value
        else if(type=="tanggal") copyDataTodoList[index].tanggal=event
        setter(copyDataTodoList)
    }


    function CardToDoList(index,data,setter,getter){
        return (
            <div className="col-md-6" key={index}>
                <div className="card card-danger">
                    <div className="card-header">
                        <h3 className="card-title">To Do List</h3>
                        <div className="card-tools">
                            <button type="button" 
                            onClick={()=>doDeleteToDoList(index,setter,getter)} 
                            className="btn btn-tool" >
                                <i className="fas fa-times" />
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                <i className="fas fa-minus" />
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="inputEstimatedBudget">Deskripsi</label>
                            <input type="text" value={data.deskripsi} onChange={(event)=>updateToDoList(event,index,"deskripsi",setter,getter)} id="inputEstimatedBudget" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEstimatedDuration">Tanggal</label>
                            
                            <DatePicker selected={data.tanggal}
                            onChange={(date)=>updateToDoList(date,index,"tanggal",setter,getter)} />
                        </div>
                        
                    </div>
                    {/* /.card-body */}
                </div>
                {/* /.card */}
            </div>
        )
    }

    function call_Api(getter,setter){
        axios.get(`https://random-data-api.com/api/restaurant/random_restaurant`, )
        .then(res => {
            const temp = res.data;
            setter([
                ...getter,{
                    id:uuidv4(),
                    deskripsi:"Pergi ke "+temp.name,
                    tanggal:new Date(),
                    status:0
                }
            ])
        })
    }

    
    // api : https://random-data-api.com/api/restaurant/random_restaurant

    return (
        
        <Add_ToDo_List_Context.Consumer>
        {data=>{
            return(
                <div>
                    <Button variant="primary" onClick={()=>tambahComponent(data.todo_lists,data.setToDo_Lists)}>Tambah To Do List</Button>
                    <Button variant="danger" onClick={()=>data.push_data()}>Submit</Button>
                    <Button variant="danger" onClick={()=>call_Api(data.todo_lists,data.setToDo_Lists)}>Pakai API</Button>
                    <div className="row">
                        {data.todo_lists.map((data_todolist,index)=>{
                            return(
                                CardToDoList(index,data_todolist,data.setToDo_Lists,data.todo_lists)
                            )
                        })}
                    </div>
                </div>
                )
            }}
        </Add_ToDo_List_Context.Consumer>
    )
}
