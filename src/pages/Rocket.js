import React from 'react';
import "../styles/Rocket.scss"
const Rocket = props => {
    
    const styles = {
        height: "50%",
        width: "auto",
        position: "relative",
        top: "50%",
        left: "60%",
        transform: "translateY(-50%)"
    }



   
    
    return ( 
        <main className="display-7">
            {/* {props.data.name} */}
            <article className="position-relative">


            <div  className="text text-center position-absolute">
                <h2 className="h2">{props.data.name}</h2>
                <p className="h6">{props.data.text}</p>
            </div>

            <img className="w-100 h-100"  src= {props.data.img[0]} alt={props.data.name}/>


            </article>

            <article className="">

            <div className="description">
                <h3>{props.data.text2}</h3>

                <ul>
                    <li>{props.data.prop[0]}</li>
                    <li>{props.data.prop[1]}</li>
                    <li>{props.data.prop[2]}</li>
                    <li>{props.data.prop[3]}</li>
                    
                </ul>
            </div>
           

            <img className="h-75 d-block" src={props.data.img[1]} alt={props.data.name}/>



            </article>

            <article>

                <div className="engine">
                    <h2>{props.data.text3[0]}</h2>
                    <p>{props.data.text3[1]}</p>

                {props.data.text3[2] === "" ? null : (    <div className="properties">
                        <ul>
                            <li>{props.data.text3[2]}</li>
                            <li>{props.data.text3[3]}</li>
                        </ul>
                    </div>)}
                </div>

               

            <img src={props.data.img[2]} style={props.data.name === "Electron" ? styles : null} alt={props.data.name}/>

            </article>
            </main>
     );
}
 
export default Rocket;