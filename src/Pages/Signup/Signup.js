import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./SignUp.css";
import firebase from "../../Services/firebase";
import {Card} from 'react-bootstrap';
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
//import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import LoginString from "../Login/LoginString";

export default class Signup extends Component{
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            name: "",
            error: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event){
        const {name, password, email} = this.state;
        event.preventDefault();
        try{
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(async result =>{
                    firebase.firestore().collection('users')
                        .add({
                            name,
                            id: result.user.uid,
                            email,
                            password,
                            URL:'',
                            description:"",
                            messages: [{notificationId: "", number: 0}]
                        }).then((docRef)=>{
                        localStorage.setItem(LoginString.ID, result.user.uid);
                        localStorage.setItem(LoginString.Name, name);
                        localStorage.setItem(LoginString.Email, email);
                        localStorage.setItem(LoginString.Password, password);
                        localStorage.setItem(LoginString.PhotoURL, "");
                        localStorage.setItem(LoginString.UPLOAD_CHANGED, 'state_changed');
                        localStorage.setItem(LoginString.Description, "");
                        localStorage.setItem(LoginString.FirebaseDocumentId, docRef.id);
                        this.setState({
                            name: '',
                            password: '',
                            url: ''
                        });
                        this.props.history.push("/chat")
                    })
                        .catch((error) => {
                            console.error("Error adding document", error)
                        })
                })
        } catch(error) {
            document.getElementById('1').innerHTML = "Error in signing up please try again"
        }
    }
    render() {
        const Signinsee = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'White',
            backgroundColor: '#1ebea5',
            width: '100%',
            boxShadow: " 0 5px 5px #808888",
            height: "10rem",
            paddingTop: "48px",
            opacity: "0,5",
            borderBottom: '5px solid green',
        }
        return (
            <div>
                <CssBaseline />
                <Card style={Signinsee} >
                    <div>
                        <Typography component="h1" variant="h5" >
                            SignUp
                            To
                        </Typography>
                    </div>
                    <div>
                        <Link to="/" >
                            <button className="btn"><i className="fa fa-home"></i>Web Chat</button>
                        </Link>
                    </div>
                </Card>
                <Card className="formacontrooutside">
                    <form className="customform" noValidate onSubmit={this.handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address-example:abc@gmail.com"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                        <div>
                            <p style={{color: 'grey', fontSize: '15px', marginLeft: '0'}}>
                                Password :length Greater than 6 (alphabet,number,special character)
                            </p>
                        </div>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            autoFocus
                            onChange={this.handleChange}
                            value={this.state.password}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Your Name"
                            name="name"
                            type="name"
                            autoComplete="name"
                            autoFocus
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                        <div>
                            <p style={{color: 'grey', fontSize: '15px'}}>
                                Please fill all fields and password should be greater than 6
                            </p>
                        </div>
                        <div className="CenterAliningItems">
                            <button className="button1" type="submit">
                                <span>Sign up</span>
                            </button>
                        </div>
                        <div>
                            <p style={{color: 'grey'}}>Already have an account</p>
                            <Link to="/login">
                                Login
                            </Link>
                        </div>
                        <div className="error">
                            <p id="1" style={{color: 'red'}}></p>
                        </div>
                    </form>
                </Card>
            </div>
        );
    }
}
