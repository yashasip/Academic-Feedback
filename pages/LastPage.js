import "./LastPage.css";
import React from 'react';

const LastPage = (props) => {
  if(props.isSubmitted){
    return (
     <div className="response">   
        <h3>Your feedback has been recorded.<br/> Thank you!</h3>
        <img src="https://www.freeiconspng.com/thumbs/checkmark-png/checkmark-png-5.png" alt="tickImg" />
    </div>);
  }

  else{
    return(
      <div className="response">  
        <h3>Your feedback has not been recorded.</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8-UOiQ57iPiTLOD2FaRHHAgF-TEOkWas-Q&usqp=CAU" alt="crossImg" /> 
      </div>   
    );
  };
}

export default LastPage;


