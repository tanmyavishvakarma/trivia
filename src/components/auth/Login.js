import React,{Component} from 'react'
import './Login.css'

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    render(){
        return(
            <div>
                <section className="notlogin">
                
                    <div className="lContainer">
                    <div class="heading">

                    </div>
                            <label>
                                Username
                            </label>
                            <input 
                                type="text"
                                autoFocus
                                required
                                value={this.state.answer}
                                onChange={this.handleChange}
                            />
                            <div className="pass"></div>
                             <label>
                                Password
                            </label>
                            <input 
                                type="text"
                                autoFocus
                                required
                                value={this.state.answer}
                                onChange={this.handleChange}
                            />
                            <div className="lbtnContainer">
                                <button className="lbtn" onClick={this.handleSubmit}>Login</button>
                            </div>
                        
                       
                    </div>           
                </section>
            </div>
        );
    }
}

export default Login;