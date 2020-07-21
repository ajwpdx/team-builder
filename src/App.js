import React, { useState } from 'react';
import TeamMember from './TeamMember'
import Form from './Form'
import './App.css';

const teamList = [
  {
  name: 'Alex Williams',
  email: 'alexjwilliams1@gmail.com',
  role: 'front end developer'
  },
  {
   name: 'Tony Hawk',
   email: 'tony@hawk.com',
   role: 'back end developer'

  },
  {
    name: 'Shawn White',
    email: 'tomato@swhite.com',
    role: 'UI designer'
  }

]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: teamList })
}

function App() {
  const [team, setTeam] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  
  console.log(formValues)

  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue }
    setFormValues(updatedFormValues)
  }

  const submitForm = () => {
    const newTeamMember = {
      username: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newTeamMember.username || !newTeamMember.email || !newTeamMember.role) return  
  }
  return (
    <div className="App">

{teamList.map(member => {
    console.log(member)
      return (
       <TeamMember key={member.email} details={member} />
          )
        })
      }
      <Form
      values = {formValues}
      update = {updateForm}
      submit = {submitForm}

      />
    </div>
  );
}



export default App;
