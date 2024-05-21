import { useState } from 'react'
import img from './images/flask.png'
import img1 from './images/mongodb.png'
import img2 from './images/React.webp'
import java from './images/Java.png'
import './project.css'

const Project = () =>{
    const [open, setOpen] = useState({
        div1 : true,
        div2 : true,
        div3 : true,
        div4 : true
    })

    const mouseEnter = (divName) => {
        setOpen({...open, [divName] : false})
    }

    const mouseLeft = (divName) =>{
        setOpen({...open, [divName] : true})
    }

    return(
        <div className="project">
            <h1>Projects</h1>
            <div className="project-container">
                <div className="div1" onMouseEnter={(e) => mouseEnter('div1')} onMouseLeave={(e) =>mouseLeft('div1')}> 
                    {open.div1 ? 
                        <div className="div-block">
                            <h4>ChatWhiz - College enquiry chatbot</h4>
                            <div className="tech-block">
                                <img className='tech-img' src={img2} alt="ReactJS" />
                                <img className='tech-img' src={img} alt="Flask" />
                                <img className='tech-img' src={img1} alt="MongoDB" />
                            </div>
                        </div>
                    :<div className='sub-block'>   
                        <p> ChatWhiz - A College enquiry chatbot which provides information about the multiple colleges according to the queries asked.</p>
                        <div className='sub-block-1'>
                            <svg className='i' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
                            </svg>
                            <a href="https://github.com/Logeshwaran29/chatbot"><p>Github</p></a>
                        </div>  
                    </div>}
                </div>
                <div className="div2" onMouseEnter={(e) =>mouseEnter('div2')} onMouseLeave={(e) =>mouseLeft('div2')}> 
                    {open.div2 ? 
                        <div className="div-block">
                            <h4>Dictionary Application</h4>
                            <div className="tech-block">
                                <img className='tech-img' src={img2} alt="ReactJS" />
                            </div>
                        </div>
                    :<div className='sub-block'>
                        <p>A Web Application to provide synonym, part of speech and phonetic of a word.</p>    
                        <div className='sub-block-1'>
                            <svg className='i' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
                            </svg>
                            <a href="https://github.com/Logeshwaran29/Dictionary"><p>Github</p></a>
                        </div>  
                    </div>}
                </div>
                <div className="div3" onMouseEnter={(e) =>mouseEnter('div3')} onMouseLeave={(e) =>mouseLeft('div3')}> 
                    {open.div3 ? 
                        <div className="div-block">
                            <h4>Portfolio</h4>
                            <div className="tech-block">
                                <img className='tech-img' src={img2} alt="ReactJS" />
                            </div>
                        </div>
                    :<div className='sub-block'>
                        <p>This portfolio website showcases my background, featuring details of my education, skills, project experience, and contact information.</p>    
                        <div className='sub-block-1'>
                            <svg className='i' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
                            </svg>
                            <a href="https://github.com/Logeshwaran29/Portfolio"><p>Github</p></a>
                        </div>  
                    </div>}
                </div>
                <div className="div4" onMouseEnter={(e) =>mouseEnter('div4')} onMouseLeave={(e) =>mouseLeft('div4')}>
                    {open.div4 ? 
                        <div className="div-block">
                            <h4>Tic-Tac-Toe Game</h4>
                            <div className="tech-block">
                                <img className='tech-img' src={java} alt="Java" />
                            </div>
                        </div>
                    :<div className='sub-block'>
                        <p>A GUI to play the game of Tic-Tac-Toe.</p> 
                        <div className='sub-block-1'>
                            <svg className='i' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
                            </svg>
                            <a href="https://github.com/Logeshwaran29/Tic-Tac-Toe"><p>Github</p></a>
                        </div>  
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Project