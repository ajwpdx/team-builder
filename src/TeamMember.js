import React from 'react';


export default function TeamMember (props) {
    

    return(
        <form>
            <h2>Add a Team Member</h2>
            <div className='form-inputs'>
            <label htmlFor='nameInput'>Name:&nbsp;
                <input
                id = 'nameInput'
                name = 'name'
                type = 'text'
                placeholder= 'Enter name'
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
            <button disabled>submit</button>    

        </form>
    )
    
}