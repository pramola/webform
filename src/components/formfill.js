import React,{ useState} from 'react';
import PhoneInput from 'react-phone-number-input';
import './formfill.css';
//import axios from 'axios';



function FormFill({fn}){

    const thank = ()=> {fn()};
        

    const [data,setData]=useState({
        fcustomer:"",
        lcustomer:"",
        phone:"",
        email:"",
        ques_1:"",
        ques_2:"",
        ques_3:"",
        ques_4:""

    });
    const [errState,setErrorState] = useState({
        fcustomer:false,
        lcustomer:false,
        email:false,
        phone:false,
        ques_1:false,
        ques_2:false,
        ques_3:false,
        ques_4:false,
        empt:false
    })

    const buttonHandler = e =>{
       
        setData({
            ...data,[e.target.name]:e.target.value
        })
        setErrorState({
            ...errState,[e.target.name]:false,empt:false
        })
        //console.log(errState)
    }
    const phoneHandler = e =>{
       
        setData({...data,phone:e})
    }

    const check=(dataObj)=>{
        //console.log(dataObj);
            //emptiness check
            if(dataObj.name==="" || dataObj.email==="" || dataObj.phone==="" || dataObj.ques_1==="" || dataObj.ques_2==="" || dataObj.ques_3==="" || dataObj.ques_4===""){
                console.log("empty var")
               return 0;
                //console.log(errState)
                
            }

            //email check
                if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(dataObj.email) === false){
                setErrorState({
                    ...errState,email:true
                })
                return 1;
            }

            //name check
                if(/^[a-zA-Z]+$/.test(dataObj.fcustomer) === false){
                console.log("Not a vaild name");
               return 2;

            }

            if(/^[a-zA-Z]+$/.test(dataObj.lcustomer) === false){
                console.log("Not a vaild name");
               return 3;

            }
            
            

    }
    
    function upload(){
        switch(check(data)){
            case 0 : setErrorState({...errState,empt:true});
                    break;
            case 1 : setErrorState({...errState,email:true});
                    break;
            case 2 : setErrorState({...errState,fcustomer:true})
                    break;
            case 3: setErrorState({...errState,lcustomer:true});
                    break;
            default: {console.log("no error saving in storage");
                    let feedback = JSON.parse(localStorage.getItem("feedback")) || [];       
                    feedback.push(data);
                    localStorage.setItem("feedback",JSON.stringify(feedback));
                    //console.log(updateVal)
                    thank()

                }
        }
       
    }

  
    return(<div className="form">
    
        <div className="topview-form">
            <h4>Aromatic Bar</h4>
            <h5>We are committed to providing you with the best
                dining experience possible, so we welcome your comments. Please fill
                out this questionnaire. Thank you.
            </h5>
        </div>
        <div className="body-form">
            <div className="user-info">
            <div className="input">
                <label htmlFor="customer_fname">First Name</label>
                <input id="customer_fname" type="text" name="fcustomer" onChange={buttonHandler} placeholder="Fill your complete name"></input>
                { errState.fcustomer && <p id="error">Only text is allowed</p>} 
            </div>
            <div className="input">
                <label htmlFor="customer_lname">Last Name</label>
                <input id="customer_lname" type="text" name="lcustomer" onChange={buttonHandler} placeholder="Fill your complete name"></input>
                { errState.lcustomer && <p id="error">Only text is allowed</p>} 
            </div>
            <div  className="input">
                <label htmlFor="customer_email">Email</label>
                <input id="customer_email" type="email" name="email" onChange={buttonHandler} placeholder="Fill out your email"></input>
                { errState.email && <p id="error">Correct email is required</p>} 
            </div>
            <div  className="ph-input">
                <label htmlFor="phonenum">Phone</label>
                <PhoneInput 
                    id="phonenum"
                    name="phone"
                    onChange={phoneHandler}
                    placeholder="Enter your Phone no."
                    
                />
                { errState.phone && <p id="error">Please fill your phone number</p>} 
            </div>
            </div>
        
        <div className="questions-form">
            <label htmlFor="question_1">Please rate the quality of the service you received from your host</label>
            
            <div id="question_1">
            <span><input type="radio" name="ques_1"  value="Excellent" onClick={buttonHandler}/>Excellent</span>
            <span><input type="radio" name="ques_1"value="Good" onClick={buttonHandler}/>Good</span>
            <span><input type="radio" name="ques_1" value="Fair" onClick={buttonHandler}/>Fair</span>
            <span><input type="radio" name="ques_1" value="Bad" onClick={buttonHandler}/>Bad</span>
            { errState.ques_1 && <p id="error">Please choose one of the options</p>} 
            </div><label htmlFor="question_2">Please rate the quality of your beverage.</label>
            
            <div id="question_2">
            <span><input type="radio" name="ques_2"  value="Excellent" onClick={buttonHandler}/>Excellent</span>
            <span><input type="radio" name="ques_2"value="Good" onClick={buttonHandler}/>Good</span>
            <span><input type="radio" name="ques_2" value="Fair" onClick={buttonHandler}/>Fair</span>
            <span><input type="radio" name="ques_2" value="Bad" onClick={buttonHandler}/>Bad</span>
            { errState.ques_2 && <p id="error">Please choose one of the options</p>} 
            </div>
            <label htmlFor="question_3">Was our restaurant clean?</label>
            
            <div id="question_3">
            <span><input type="radio" name="ques_3"  value="Excellent" onClick={buttonHandler}/>Excellent</span>
            <span><input type="radio" name="ques_3"value="Good" onClick={buttonHandler}/>Good</span>
            <span><input type="radio" name="ques_3" value="Fair" onClick={buttonHandler}/>Fair</span>
            <span><input type="radio" name="ques_3" value="Bad" onClick={buttonHandler}/>Bad</span>
            { errState.ques_3 && <p id="error">Please choose one of the options</p>} 
            </div>
            <label htmlFor="question_4">Please rate your overall dining experience.</label>
            
            <div id="question_4">
            <span><input type="radio" name="ques_4"  value="Excellent" onClick={buttonHandler}/>Excellent</span>
            <span><input type="radio" name="ques_4"value="Good" onClick={buttonHandler}/>Good</span>
            <span><input type="radio" name="ques_4" value="Fair" onClick={buttonHandler}/>Fair</span>
            <span><input type="radio" name="ques_4" value="Bad" onClick={buttonHandler}/>Bad</span>
            { errState.ques_4 && <p id="error">Please choose one of the options</p>} 
            </div>
        </div>
        </div>
        {errState.empt && <p id="empty_error">Fill all the details</p>}
        <div className="submit" onClick={upload}>Submit</div>
    </div > )
}

export default FormFill;