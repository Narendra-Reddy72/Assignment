import { useState, useEffect } from 'react';
import axios from 'axios';
function TodoList(){
    const [todos,setTodos]= useState([]);

    useEffect(()=>{
        const fecthtodos = async()=>{
          await axios.get(`http://localhost:4800/api/todo/fetch`)
            .then((response)=>{
                setTodos(response.data.data)
                console.log(response.data)
        }).catch((err)=>{
            console.log('error while getting todos',err)
        })
        }
        fecthtodos();
    },[])
    return(
        <div>
            <h2>Get All TOdos</h2>
            <ul>
                {todos.map(todo=>{
                    return(
                        <li key={todo._id}>
                        <p>{todo.title}</p>
                        <p>{todo.description}</p>
                        <p>{todo.completed?'completed':'pending'}</p>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList;
