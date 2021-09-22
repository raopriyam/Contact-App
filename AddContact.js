import React from 'react';

class AddContact extends React.Component{
    state = {
        name: "",
        Email:"",
        Number: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.Email === "" || this.state.Numnber === ""){
            alert("all the fields are mandatory");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",Email:"",Number:""})
        console.log(this.state);
        this.props.history.push("/");
    }


    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value= {this.state.name}
                        onChange={(e) => this.setState({name:e.target.value})}/>
                    </div>
                    <br></br>
                    <div className="field">
                        <label>Email</label>
                        <input 
                        type="text" 
                        name="Email" 
                        placeholder="Email"
                        value= {this.state.Email}
                        onChange={(e) => this.setState({Email:e.target.value})}/>
                    </div>
                    <br></br>
                    <div className="field">
                        <label>Phone Number</label>
                        <input 
                        type="tel" 
                        name="Number" 
                        placeholder="xxx-xxx-xxxx"
                        value= {this.state.Number}
                        onChange={(e) => this.setState({Number:e.target.value})}/>
                    </div>
                    <br></br>
                    <button className="ui button blue">Add</button>
                </form>

            </div>
        );
     }

}

export default AddContact;