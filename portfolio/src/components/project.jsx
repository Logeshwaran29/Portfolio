import { useState } from 'react'
import './project.css'

const Project = () =>{
    const [open, setOpen] = useState(true)

    return(
        <div className="project">
            <h1>Projects</h1>
            <div className="project-container">
                <div class="div1" onMouseEnter={e => setOpen(false)} onMouseLeave={e => setOpen(true)}> 
                    {open ? 
                    <>
                        <h4>ChatWhiz - College enquiry chatbot</h4>
                    </>:<>
                        <p> ChatWhiz - A College enquiry chatbot which provides information about the multiple colleges according to the queries asked.</p>
                    </>}
                </div>
                <div class="div2"> 
                    <h4>Dictionary Application</h4>
                </div>
                <div class="div3">
                    <h4>Portfolio</h4> 
                </div>
                <div class="div4">
                    <h4>Tic-Tac-Toe Game</h4>
                </div>
            </div>
        </div>
    )
}

export default Project