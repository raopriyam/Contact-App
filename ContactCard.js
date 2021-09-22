import React from "react";
import Luffy from"./Luffy.jpg";
import {Link} from 'react-router-dom';



const ContactCard = (props) => {
    const {id, name,Email,Number} = props.contact;
    return (
        <div className="item">
            <image className="ui avatar image" src={Luffy} alt="Luffy"/>
                <div className="content">
                    <Link to={{pathname:`/contact/${id}`, state:{contact:props.contact}}}>
                    <div className="header">{name}</div>
                    <div >{Email}</div>
                    <div  >{Number}</div>
                    </Link>
                </div>
                <i 
                className="trash alternate outline icon" style="align:right"
                style={{color:"red",MarginTop:"7px"}}
                onClick = {() => props.clickHandler(id)}
                ></i>
         </div>
    );
};

export default ContactCard;