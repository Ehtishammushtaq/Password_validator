import React from 'react';
import styles from '../components/passwordbox.module.css';
import {useRef} from 'react';

//i dont need re-render in this code.
function Passwordbox() {
    const password1 = useRef();
    const password2 = useRef();
    //you have to use useref to use variables from browser to code
    
    function Calculator(){
        const passwordOnelen=password1.current.value.length;
        const passwordtwolen=password2.current.value.length;
        //I need to have variablename.curent to access the variable generated by useRef
        //also I can use variablename.current.value to get it as a string output
        //saving the length data in a variable called passwordonelen and ...

      if((passwordOnelen===0) && (passwordtwolen===0))
      {
        alert('badwe password de');
      }
      else if(password1.current.value === password2.current.value)
      {
        alert('beta password bilkul sahi hai');
      }
      else
      {
        alert('badwe (-_-) ')
      }
         
     }
     //I can take that info from the ref attribute...I can feed it from browser to the code here (see below)
  return (
   
    <div className={styles.passwordbox}>
        <div className={styles.textboxes}>
        <p>Password: </p>
        <input type={'password'} ref={password1} ></input>
        <p >Confirm Password:</p>
        <input type={'password'} ref={password2} ></input>
        </div>
        <br/>
        <button onClick={Calculator}>Check</button>
      </div>
    
  );
}

export default Passwordbox;
