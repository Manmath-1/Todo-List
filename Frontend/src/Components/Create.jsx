import React from 'react';

const Create = ()=>{
    return(
        <div>
            <form action="">
                <label htmlFor="task">Task😉:</label>
                <input style={{border:"1.6px solid black ", borderRadius:"4px"}} type="text" id='task' placeholder='Enter Your Task Here...' />
                <label htmlFor="details">Details😊:</label>
                <input style={{border:"1.6px solid black ", borderRadius:"4px"}} type="text" id='details' placeholder='Enter Task Details Here...' />
            </form>
        </div>
    )
}

export default Create;