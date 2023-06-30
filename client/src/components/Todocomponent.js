import React from 'react';
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
 

const Todocomponent = ({text, updateMode, deleteMode}) => {



  return (
   <div className="Todo">
        <div className="text" >{text}</div>
        <div className="icons">
            <BiEdit className="icon" onClick={updateMode}> </BiEdit>
            <AiFillDelete className="icon" onClick={deleteMode}></AiFillDelete>
        </div>
   </div>
  )
}

export default Todocomponent