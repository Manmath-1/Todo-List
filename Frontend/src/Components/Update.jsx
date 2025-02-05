import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () =>{

    const [task, setTask] = useState('');
    const [details, setDetails] = useState('');
    // const [todo, setTodo] = useState([]);

    const {id} = useParams();
    const getData = async()=>{
        const res = await axios.get(`http://localhost:5000/api/${id}`)
        setTask(res.data.task)
        setDetails(res.data.details)
    };

    useEffect(()=>{
        getData()
    },[])

    const updateData = async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:5000/api/update/${id}`, {task,details})
        setTask('');
        setDetails('');
        alert('Task Updated Successfully');
    }

    const navigate = useNavigate();
    return(
        <div className="create">
            <form action="" onSubmit={updateData}>
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

export default Update;