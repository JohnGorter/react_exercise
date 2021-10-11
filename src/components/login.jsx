import { Component } from "react";
import { withRouter } from 'react-router-dom';
import './login.css'

class Login extends Component {

    // handleSubmit(e){
    //     e.preventDefault();
    //     console.log("email password:", e.target.email.value, e.target.password.value);
    // }

    // render() {
    //     return (
    //     <div>
    //         <form onSubmit={(e) => this.handleSubmit(e)}>
    //         <dl>
    //             <dt>Email</dt>
    //             <dd><input type="text" id="email" name="email" required/></dd>
    //             <dt>Password</dt>
    //             <dd><input type="password" name="password" required pattern="[0-9]*"/></dd>
    //         </dl>
    //         <button onclick="javascript:document.querySelector('#email').setCustomValidity('email already taken');"></button>
    //         <input type="submit" value="Login" />
    //         </form>
    //     </div>
    //     )
    // }

    title = "login"
    state = {}

    login(){
        if (this.state.email === "john.gorter@gmail.com" && this.state.password === "secret") {
            this.setState({message:"welcome", type:"success"});
  //          this.props.onSuccess(true);
            this.props.history.push('/', {auth:true});
        } else {
            console.log("email", !!this.state.email, this.state.email);
            if (!this.state.email) {
                this.setState({message:"email is a required field", type:"error"});
                this.input_email.focus();
                return;
            } 
            if (!this.state.password) {
                this.setState({message:"password is a required field", type:"error"});
                this.input_password.focus();
                return;
            } else {
                this.setState({message:"unknown username/pwd", type:"error"});
                return;
            }
        }
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value});
    }

    render = () => <div className="login">
        <h1>{ this.title }</h1>
        <h3> { this.props.subtitle }</h3>
        <dl>
            <dt>Email</dt>
            <dd><input ref={e => this.input_email = e} type="text" id="email" name="email" value={this.email} onChange={(e) => this.handleChange(e)}></input></dd>
            <dt>Password</dt>
            <dd><input ref={e => this.input_password = e} type="password" id="password" name="password" value={this.pwd} onChange={(e) => this.handleChange(e)}></input></dd>
        </dl>
        <button onClick={() => this.login()}>Login</button>
        <div className={this.state.type}>{this.state.message}</div>
    </div> 
}

export default withRouter(Login)