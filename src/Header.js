import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import  IconButton  from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {  Link,useHistory} from "react-router-dom";

function Header({backButton}) {
    const history =useHistory();
    return (
        <div className="header">
        {backButton?(
            <IconButton onClick={() => history.replace(backButton)}>
            <ArrowBackIosIcon fontSize="large" className="header__arrow"/></IconButton>
        ): (
        <IconButton>
            <PersonIcon className="header__icon" fontSize="large"/></IconButton>

        )}
            <Link to="/">
            <img className="header__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjw-kwTtYzsX34gEjd178lGanXZoQ7Ci7rYG0oMh-j040-5LNTJD2C262nZ5_kGwS6CX8&usqp=CAU" alt=""/>
            </Link>
            <Link to="/chat">
            <IconButton>
            <ForumIcon className="header__icon" fontSize="large"/></IconButton></Link>
        </div>
    )
}

export default Header
