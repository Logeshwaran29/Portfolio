import './edu.css'

const Edu = ()=>{
    return(
        <div className="edu">
            <h1>Academics</h1>  
            <div className="edu-container">
                <div className="div-1">
                    <h2>Bachelor of Engineering (B.E - CSE)</h2>
                    <div className="block">
                        <p><b>Institute : </b>K.S.R. College of Engineering, Tiruchengode.</p>
                        <p><b>CGPA : </b>7.689 (upto 7th sem)</p>
                        <p><b>Completed in : </b>2024</p>
                    </div>
                </div>
                <div className="div-1">
                    <h2>HSC</h2>
                    <div className="block">
                        <p><b>Institute : </b>Nandhi Matric Hr Sec School, Erode.</p>
                        <p><b>Percentage : </b>69.5%</p>
                        <p><b>Completed in : </b>2020</p>
                    </div>
                </div>
                <div className="div-1">
                    <h2>SSLC</h2>
                    <div className="block">
                        <p><b>Institute : </b>Nandhi Matric Hr Sec School, Erode.</p>
                        <p><b>Percentage : </b>89.6%</p>
                        <p><b>Completed in : </b>2018</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edu