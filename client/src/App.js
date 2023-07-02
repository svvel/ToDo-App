import { useEffect, useState } from 'react';
import './App.css';
import TodoComponent from './components/Todocomponent';
import {getallTodo, savetodo,updatetodo,deleteTodo} from './utils/handleApi';

function App() {

    const [todo, settodo] = useState([])
    const [text, settext] = useState('')
    const [isupdate, setisupdate] = useState(false)
    const [id,setid] = useState('')
    
    // Read data 
    useEffect(()=>{
        getallTodo(settodo)
    },[])
    // Create data
    const savetext = ()=>{
        savetodo(text,settodo)
        settext('')
    }
    // update data
    const updatemode = (id,text)=>{
        setisupdate(true)
        settext(text)
        setid(id)
    }
    // delete data
    const deletemode = (id)=>{
        alert('cofirm delete :')  
        setid(id)
        deleteTodo(id,settodo)
    }
    

    
    return(
    <div className="app">

        <div className='container'>
            <h1> To_do List</h1>
            <div className="top">

                <input type="text" className="text-input" placeholder='Add To Do'
                 onChange ={(e)=>settext(e.target.value)}
                    value={text}/>

                <div className="add" onClick={isupdate? ()=>
                    updatetodo(id,text,settodo,settext,setisupdate):savetext}>
                    {isupdate?"update":"Add"}
                </div>
               
            </div>

            <div className="list">            
                {todo.map((e)=> <TodoComponent key={e._id} text={e.text}
                 updateMode={()=>updatemode(e._id,e.text)} deleteMode={()=>deletemode(e._id)}/>)}
            </div>
            
        </div>
    </div>
    )
}

export default App