// import React, { useState } from 'react'
//  import { useNavigate } from 'react-router-dom'


//  import { signInWithPhoneNumber,RecaptchaVerifier } from "firebase/auth";

// import {auth} from '../Config/Firebase'





// function SigininPhone() {
// const [number,setNumber] = useState()



// const nav = useNavigate()

// const handleChange=(e)=>{
//     console.log(e.target.value)

//     setNumber(e.target.value)
// }

// const configureCaptcha = () =>{
//   window.recaptchaVerifier = new RecaptchaVerifier(auth,'sign-in-button', {
//     'size': 'invisible',
//     'callback': (response) => {
//       // reCAPTCHA solved, allow signInWithPhoneNumber.
//       SubmitNo();
//       console.log("Recaptca varified")
//     },
    
//   });
// }



// const SubmitNo =async ()=>{
//     configureCaptcha()
   
//     console.log(number)
//     const appVerifier = window.recaptchaVerifier;
// console.log(appVerifier)
//   await signInWithPhoneNumber(auth,number, appVerifier)
//         .then((confirmationResult) => {
//           // SMS sent. Prompt user to type the code from the message, then sign the
//           // user in with confirmationResult.confirm(code).
//           window.confirmationResult = confirmationResult;
//           console.log("OTP has been sent")
//           // ...
//         }).catch((error) => {
//           // Error; SMS not sent
//           // ...
//           console.log("SMS not sent")
//         });
 
// }






//   return (
//     <div>
      



//     <center>
//     <div id='sign-in-button'></div>
// <br /> <br /><br /> 
// <label>Enter Your Phone Number</label>
// <br /><br />
// <input name="mobile" type="number" required onChange={(e)=>handleChange(e)} />
// <br /><br />
// <button type='submit' onClick={()=>SubmitNo()} >Submit</button>


// </center>




//     </div>
//   )
// }

// export default SigininPhone




import React from 'react'
import {auth} from '../Config/Firebase'
import { signInWithPhoneNumber,RecaptchaVerifier } from 'firebase/auth'




class SigininPhone extends React.Component {
  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new RecaptchaVerifier(auth,'sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+92" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
   signInWithPhoneNumber(auth,phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }
  render() {
    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"></div>
          <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>

        <h2>Enter OTP</h2>
        <form onSubmit={this.onSubmitOTP}>
          <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default SigininPhone