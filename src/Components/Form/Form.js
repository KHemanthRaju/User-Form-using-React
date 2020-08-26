import React from 'react';

import './style.css'
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userName:"",
            userEmail:"",
            userPhone:"",
            userGender:"",
            userPassword:""

        };
    }

    onNameChange=(event)=>{
        this.setState({
            userName:event.target.value
        });

    };
    onEmailChange=(event)=>{
        this.setState({
            userEmail:event.target.value
        })

    };
    onPhoneChange=(event)=>{
        this.setState({
            userPhone:event.target.value
        })

    };
    onGenderChange=(event)=>{
        this.setState({
            userGender:event.target.value
        })
    };
    onPasswordChange=(event)=>{
        this.setState({
            userPassword:event.target.value
        })
    };

    onSubmit = () => {
        if(this.state.userPhone === "" || this.state.userPhone.length!== 10){
            window.alert("Invalid Phone number");
            return;
        }
        window.alert(`
        Name : ${this.state.userName},
        Email: ${this.state.userEmail},
        Phone: ${this.state.userPhone},
        Gender: ${this.state.userGender},
        Password: ${this.state.userPassword},
        `);
        this.clearFormFields();
    };
    //onFieldChange=(event)=>{
    //    this.setState({
    //        [event.target.name]:event.target.value
     //   })
   // }

    clearFormFields=()=>{
        this.setState({
            userName:"",
            userEmail:"",
            userPhone:"",
            userGender:"",
            userPassword:""
        })
    }
    render=()=>{
        return(
            <div className="form-container">
            <p className="title">-----User Form-----</p>

            <input className="input-style" name="userName" value={this.state.userName} onChange={this.onNameChange} type="text" placeholder="Enter your Name"/>
            <input className="input-style"name="userName" /*with onField Change same for all*/value={this.state.userEmail} onChange={this.onEmailChange} type="email" placeholder="Enter your Email"/>
            <input className="input-style" value={this.state.userPhone} onChange={this.onPhoneChange} type="text" placeholder="Enter your phone"/>
            <select className="input-style" value={this.state.userGender} onChange={this.onGenderChange}>
                <option value="">Choose an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                
            </select>
            <input className="input-style" value={this.state.userPassword} onChange={this.onPasswordChange} type="password" placeholder="Enter your password"/>
            <button className="submit-btn" onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
}

export default Form;