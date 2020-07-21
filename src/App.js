import React, { useState } from 'react';
import TeamMember from './TeamMember'
import Form from './Form'
import './App.css';

const teamList = [
  {
  username: 'ajwpdx',
  email: 'alexjwilliams1@gmail.com',
  role: 'front end developer'
}]

const initialFormValues = {
  username: '',
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
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newTeamMember.username || !newTeamMember.email || !newTeamMember.role) return  
  }
  return (
    <div className="App">
      <TeamMember/>
      <Form/>
    </div>
  );
}



export default App;
