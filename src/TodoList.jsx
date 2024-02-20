import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList() {
    let [todos,settodos]=useState([{task:"sample task",id:uuidv4(), isDone:false}]);
    let [newtodo,setnewtodo]=useState("");
    let addnewTask = () =>{
        settodos((prevtodos)=>{
        return [...prevtodos,{task:newtodo,id:uuidv4(), isDone:false}];
    });
        setnewtodo("");
    }
    let updateTodoValue = (event) => {
        setnewtodo(event.target.value);
    }
    let deletetodo = (id) =>{
        settodos((prevtodos)=>todos.filter((prevtodos)=>prevtodos.id != id));
    }
    let markAllDone = () =>{
        settodos((prevtodo)=>(
            prevtodo.map((todo)=>{
                return{
                    ...todo,
                   isDone:true,
                };
            })
        ));
    };
    let markAsDone = (id) =>{
        settodos((prevtodo)=>(
            prevtodo.map((todo)=>{
                if(todo.id==id)
                return{
                    ...todo,
                    isDone: true,
                };
                else{
                    return todo;
                }
            })
        ));
    };
    return (
        <div>
             
           <input placeholder="Add a task"  value={newtodo} onChange={updateTodoValue}></input>
           <br></br>
           <br></br>
           <br></br>
           <button onClick={addnewTask}>Add task</button>
          <br></br>
           <br></br>
           <hr></hr>
           <p>Task Todo</p>
           <ul>
            {
                todos.map((todo)=>(
                    <li key={todo.id}>
                     <span style={todo.isDone ? { textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                     &nbsp;&nbsp;&nbsp;
                     <button onClick={()=>deletetodo(todo.id)}>Delete</button>
                     <button onClick={()=>markAsDone(todo.id)}>Mark As Done</button>
                        </li>
                ))}
           </ul>
           <br></br>
           <button onClick={markAllDone}>Mark All as Done</button>
        </div>
    );
}