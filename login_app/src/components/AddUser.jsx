import React from 'react'; 

function AddUser() {

    return (
        <form >
            <label htmlFor="username">Username</label>
            <input id="username" type="text "/>

            <label htmlFor="age">Age</label>
            <input id="age" type="Number" />

            <button type="submit"> Add user </button>
        </form>
    );
}

export default AddUser ;