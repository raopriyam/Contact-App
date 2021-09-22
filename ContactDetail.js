import React from "react";
import Luffy from"./Luffy.jpg";
import {Link} from 'react-router-dom';



const ContactDetail = (props) => {
    const{name,Email,Number} = props.location.state.contact;
    return (

        <div classNAme="main">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="ui card centered">
                <div className= "image">
                    <image src={Luffy} alt="Luffy"/>
                </div>
                <div className="content">
                    <div className="header">Priyam</div>
                    <div className="description" >pkr@gmail.com</div>
                    <div classname="Pnumber">4803431234</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                <div>
                    <button classname="ui button blue center">Back to Contact List</button>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetail;