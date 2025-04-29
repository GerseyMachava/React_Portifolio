import React from "react";
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {

    return (
        <div id="about" className="about">
                <div className="about-title">
                    <h1>About Me</h1>
                    <img src={theme_pattern} alt=''   />
                </div>
                <div className="about-sections">
                    <div className="about-left">
                        <img src={profile_img} alt='' />
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quod sequi ut tenetur pariatur, dolore, quae repudiandae, sed ipsum et labore amet? Vero saepe facere sequi aliquid laudantium. Iste, sit!</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea dolor laudantium id odit deleniti consectetur eligendi debitis reiciendis odio repellendus quidem modi saepe aut, sequi libero inventore? Sequi, quis quaerat.</p>
                        </div>
                        <div className="about-skills">
                            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /> </div>
                            <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                            <div className="about-skill"><p>Java</p><hr style={{width:"60%"}} /></div>
                            <div className="about-skill"><p>PHP</p><hr style={{width:"50%"}} /></div>

                        </div>
                    </div>
                </div>
                <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Anos de Experiecia</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>Projectos feitos</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Anos de Experiecia</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>Clientes satisfeitos</p>
                </div>
                <hr/>



                </div>
              


        </div>
    )



}

export default About;