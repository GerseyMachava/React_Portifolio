import React from 'react';  
import "./MyWork.css"; 
import theme_pattern from "../../assets/theme_pattern.svg"; 
import Mywork_Data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";   

const Mywork =() => {

    return (
        <div id='work' className="mywork">
            <div className="mywork-title">
                <h1>Meus Ultimos Projectos</h1>
                <img src={theme_pattern} alt=""/>   
            </div>
            <div className="mywork-container">
                {Mywork_Data.map((work,index)=>{
                    return <img key={index} src={work.w_img} alt=""/>
                })}

            </div>
            <div className="mywork-showMore">
                <p>Mostrar Mais</p>
                <img src={arrow_icon} alt="" />
            </div>


        </div>
    )

}



export default Mywork;  