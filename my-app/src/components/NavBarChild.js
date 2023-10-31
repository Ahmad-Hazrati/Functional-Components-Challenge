import React from 'react'

function NavBarChild(props) {
    return (
        props.isLoggedIn ?
            <button onClick={props.handleClick}>Login</button>
            :
            <form>
                <lable htmlFor='username'>Username:</lable>
                <input placeholder='username' id='username' />

                <label htmlFor="password">Password:</label>
                <input placeholder="password" id="password" />
                <button onClick={props.handleClick}>Submit</button>
            </form>
    )
}

export default NavBarChild