import { useEffect, useState } from "react"
import axios from 'axios'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import "./ToGet.css"

const ToGet = ()=>{

    const [todo, setTodo] = useState([])

    const getData= async()=>{
        const res = await axios.get('http://localhost:5000/api/')
        setTodo(res.data)
    }

    useEffect(()=>{
        getData()
    },[])

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
                                <td><button className="editbtn">Edit <FaEdit/></button>
                                <button className="deletebtn">Delete <MdDelete/></button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        <button className="createbtn">Create<IoMdAddCircle/></button>
        </div>
    )
}

export default ToGet;