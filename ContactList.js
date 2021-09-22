import React from "react";
import {Link} from 'react-router-dom';
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);
    const deleteContactHandler= (id) => {
        props.getContactId(id);
    };
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler = {deleteContactHandler} key={ contact.id}/>
        );
    } );
    return <div className= "ui celled list">
        <h2>Contact List
            <br></br>
            <br></br>
            <Link to="/add">
            <button className = "ui button blue right" >Add Contact</button>
            </Link>
            <br></br>
            <br></br>
        
        </h2>
        <h2>Contact List</h2>
        {renderContactList}
    </div>
}

export default ContactList;
