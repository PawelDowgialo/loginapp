import React from 'react'; 
import Card from '../UI/Card';
import classes from './AddUser.module.css' ;

function AddUser() {

    return (
        <Card className={classes.input}>
        <form >
            <label htmlFor="username">Username</label>
            <input id="username" type="text "/>

            <label htmlFor="age">Age</label>
            <input id="age" type="Number" />

            <button type="submit"> Add user </button>
        </form>
        </Card>
    );
}

export default AddUser ;