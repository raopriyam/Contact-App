import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import {uuid} from 'uuidv4';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from './components/ContactDetail';
import { getDefaultNormalizer } from '@testing-library/dom';

function App() {
  const LOCAL_STORAGE_KEY = "Contacts";
  const [contacts,setContacts]= useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,{ id: uuid(), ...contact}]);
  };

 const removeContactHandler = (id) => {
   const newContactList = contacts.filter((contact) => {
     return contact.id !== id;
   });
   setContacts(newContactList);
 };


useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {setContacts(retrieveContacts)};
  }, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
}, [contacts]);

  return (
    <div className="ui container">
      <Router>     
      <Header/>
      <Switch>
      <Route 
      path="/" exact 
      render={(props) => (
      <ContactList {...props} 
      contacts={contacts} 
      getContactId = {removeContactHandler} />)}/>
      <Route path="/add" 
      render = {(props) => (
      <AddContact {...props}
      addContactHandler= {addContactHandler}/>)}
      />
      <Route path="/contact/:id" component={ContactDetail}/>
      </Switch>
      
      {/* <AddContact addContactHandler= {addContactHandler}/>
      <ContactList contacts={contacts} getContactId = {removeContactHandler}/> */}
      </Router>
    </div>
  );
}

export default App;
