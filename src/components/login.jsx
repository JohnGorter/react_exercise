import { Component } from "react";
import './login.css'

class Login extends Component {
    title = "login"
    state = {}

    login(){
        if (this.state.email === "john.gorter@gmail.com" && this.state.password === "secret") {
            this.setState({message:"welcome", type:"success"});
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

    render = () => <div class="login">
        <h1>{ this.title }</h1>
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

export default Login