import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TodoSignupForm(){

    const [title,setTitle] = useState('')
    const [description,setDescription]= useState('')

    const createTodos= async(e)=>{
        e.preventDefault();
        const payload = {title,description}
        try{
            const response = await axios.post(`http://localhost:4800/api/todo/create`,payload)
                console.log(response.data.data)
            }catch(err){
                console.log('fecthing error creating data',err)
            }
    }
    
    return(
        <div>
            <form onSubmit={createTodos}>
                <table>
                    <tbody>
                    <tr>
                        <td><label>Title:</label></td>
                        <td><input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td><label>Description:</label></td>
                        <td><input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><button type='submit'>createTodo</button></td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default TodoSignupForm;