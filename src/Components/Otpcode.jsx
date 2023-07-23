import React from 'react'
import {Formik,Form,Field} from 'formik'

function Otpcode() {
  return (
    <div>
      <Formik
initialValues={{
   otp:""
}}
onSubmit={(v)=>{
    console.log(v)
}}


>
    <center>
<Form>

<label>Enter Your OTP Code</label>
<Field name="otp" type="number" required />
<button type='submit'>Verify</button>


</Form>
</center>

</Formik>



    </div>
  )
}

export default Otpcode
