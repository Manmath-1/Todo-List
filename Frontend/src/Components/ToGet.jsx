import { useEffect, useState } from "react"
import axios from 'axios'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import "./ToGet.css"
import { useNavigate } from "react-router-dom";

const ToGet = ()=>{

    const [todo, setTodo] = useState([])

    const getData= async()=>{
        const res = await axios.get('http://localhost:5000/api/')
        setTodo(res.data)
    }

    useEffect(()=>{
        getData()
    },[])

    const navigate = useNavigate();

    const deleted= async(id)=>{
        await axios.delete(`http://localhost:5000/api/delete/${id}`)
        getData()
    }



    return(
        <div className="main">
        
        <h1>Our Todo List</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    todo.map((item)=>{
                        return(
                            <tr key={item._id}>
                                <td>{item.task}</td>
                                <td>{item.details}</td>
                                <td><button onClick={()=>{navigate(`/update/${item._id}`)}} className="editbtn">Edit <FaEdit/></button>
                                <button onClick={()=>{deleted(item._id)}} className="deletebtn">Delete <MdDelete/></button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        <button onClick={()=>{navigate('/create')}} className="createbtn" >Create<IoMdAddCircle/></button>
        </div>
    )
}

export default ToGet;