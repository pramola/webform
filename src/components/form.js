import React,{useState} from 'react';
import ThankYou from './thankyou';
import FormFill from './formfill'

function Form(){

    const [value,setValue]=useState(false)

    function updateVal(){
       
        setValue(!value);
    }
    const some = "Nothing";
    
    if(value === true){
        return  (<ThankYou fn={updateVal} /> )
        }
    else{
        return  (<FormFill fn={updateVal} />) 
        }

    
}

export default Form;