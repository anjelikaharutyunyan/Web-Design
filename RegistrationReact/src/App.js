import React, {useState } from "react";

import Button from "./components/buttons/Button";
import Input from "./components/inputs/Input";
import './style.css';
function App() {
  const [state] = useState('')
  
  return <div className="App">
 <h2>Registration</h2>
    <Input
      value={state}
      type={'text'}
      name={'Name'}
      placeholder={'Name'}
    />
    <Input
      value={state}
      type={'text'}
      name={'phoneNumbercd'}
      placeholder={'Phone number'}
    />
    <Input
      value={state}
      type={'text'}
      name={'E-mail'}
      placeholder={'E-mail'}
    />
    <Input
      value={state}
      type={'password'}
      name={'Password'}
      placeholder={'Password'}
    />
        <Input
      value={state}
      type={'password'}
      name={'Repeat password'}
      placeholder={'Repeat password'}
    />
    <Button
      disabled={true}
      label={'Register'}
      labelInActive={'someLabel'}
      containerInActive={'someClass'}
      onClick={() => console.log('blabla')}
    />
  </div>

};

export default App;

