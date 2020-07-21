import React from 'react';


export default function Form(props) {
    

    return(
        <form>
            <h2>User Login</h2>
            <div className='form-inputs'>
            <label htmlFor='userNameInput'>Username:&nbsp;
                <input
                id = 'usernameInput'
                name = 'username'
                type = 'text'
                placeholder= 'Enter username'
                />
            </label>
            <label htmlFor='emailInput'>Email:&nbsp;
                <input
                id = 'emailInput'
                name = 'username'
                type = 'text'
                placeholder= 'Enter username'
                />
            </label>
            <label>Role:&nbsp;
            <select name='role'>
              <option value=''>Select a role</option>
              <option value='Student'>Student</option>
              <option value='Instructor'>Instructor</option>
              <option value='TL'>Team Lead</option>
            </select>
        </label>
            </div>
            

        </form>
    )
    
}