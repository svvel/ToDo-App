import axios from 'axios';

const Base_url = 'https://todo-app-k9gq.onrender.com'

const getallTodo =  (setTodo)=>{
    axios.get(Base_url)
        .then((data)=>{
            setTodo(data.data)
            console.log(data)
        })
        .catch((e)=>{
            console.log(e)
        })
}

const savetodo =  (text, settodo)=>{
    axios.post(Base_url+'/save',{text})
        .then((data)=>{
            console.log(data)
            getallTodo(settodo)
        })
        .catch((e)=>{
            console.log(e)
        })
}

const updatetodo =  (_id, text, settodo, settext,setisupdate)=>{
    axios.post(Base_url+'/update',{_id,text})
        .then((data)=>{
            console.log(data)
            settext('')
            setisupdate(false)
            getallTodo(settodo)
        })
        .catch((e)=>{
            console.log(e)
        })
}



const deleteTodo =(_id,settodo)=>{
        axios
         .post(Base_url+'/delete',{_id})
         .then((data)=>{
            console.log(data)
            getallTodo(settodo)
         })
}

export {getallTodo, savetodo, updatetodo, deleteTodo}
