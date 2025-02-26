import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ('./Create.css');

const Create = ()=>{

    const [task, setTask] = useState('');
    const [details, setDetails] = useState('');

    const sendData = async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:5000/api/add', {task,details})
        setTask('');
        setDetails('');
        alert('Task Added Successfully');
    }

    const navigate = useNavigate();

    return(
        <div className="create">
            <form action="" onSubmit={sendData}>
                <label htmlFor="task">Task😉:</label>
                <input value={task} type="text" id='task' placeholder='Enter Your Task Here...' onChange={(e)=>{setTask(e.target.value)}} />
                <label htmlFor="details">Details😊:</label>
                <input value={details} type="text" id='details' placeholder='Enter Task Details Here...' onChange={(e)=>{setDetails(e.target.value)}} />
                <button className='submitbtn' type='submit' value={'Submit'}>Submit</button>
            </form>
                <button onClick={()=>{navigate('/')}} className='homebtn'>Home</button>
        </div>
    )
}

export default Create;