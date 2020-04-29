import React from 'react';
import './Profile.css';
import ReactLoading from 'react-loading';
import firebase from '../../Services/firebase';
import LoginString from "../Login/LoginString";

export default class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            documentKey: localStorage.getItem(LoginString.FirebaseDocumentId),
            id: localStorage.getItem(LoginString.ID),
            name: localStorage.getItem(LoginString.Name),
            aboutMe: localStorage.getItem(LoginString.Description),
            
        }
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}