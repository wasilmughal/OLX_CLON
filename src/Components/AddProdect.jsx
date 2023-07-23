import React, { useState } from 'react'
import { Container ,Row,Col } from 'react-bootstrap'
import { BiArrowBack } from 'react-icons/bi';
import mainlogo from "../images/mainlogo.png";
import './AddProdect.css'
import Button from 'react-bootstrap/Button';
import { FiImage } from 'react-icons/fi';
import {RiUserLocationFill } from 'react-icons/ri';
import idlogo from '../images/image-removebg-preview (2).png'
import { useNavigate } from 'react-router-dom';
import { set, ref } from "firebase/database";
import { getDownloadURL, ref as sRef, uploadBytes } from "firebase/storage";
import {db,storage} from '../Config/Firebase'
import { connect } from 'react-redux';






function AddProdect(props) {

const [img,setimgurl]=useState("")

  // img fun

  const handleupload = (e) => {
    console.log(e.target.files[0]);

    const storageref = sRef(storage, `imagesfiles/${e.target.files[0].name}`);

    uploadBytes(storageref, e.target.files[0])
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            console.log(url);
            setimgurl(url)
          })
          .catch((e) => {});
      })
      .catch((e) => {});
  };

  // img fun and

  
  const nav = useNavigate()
const [inp,setinp]=useState('')

const [data,setdata]=useState({
  category :"",
  title:"",
  discription:"",
  price:"",
  name:"",
  number:""
 

})


const chak=(e)=>{
  setinp(e.target.value)



  }
  // location

  const [locationString, setLocationString] = useState('');

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude.toFixed(6);
          const longitude = position.coords.longitude.toFixed(6);
          latitude.split(',')
          longitude.split(',')
          setLocationString(`${latitude}, ${longitude}`);

          
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported in this browser.');
    }

  };

  // back function

  const back=()=>{
 
    nav('/')


  }

  // submit work

  

  // database

  
  const submit=async()=>{

    const user_uid =localStorage.getItem("uid")
     
    try {
    let obj = {
      key:user_uid,
      category :data.category,
  title:data.title,
  description:data.discription,
  price:data.price,
  name:data.name,
  number:data.number,
  condition:inp,
  address:locationString,
  key:user_uid,
  imagelink:img


  
      
     
    };

    let dbref = ref(db, `user/${user_uid}`); //ref,path
  await  set(dbref,obj);
  alert("user add ")

  } catch (e) {
    alert(e);
  }


  nav('/')
}

  

 

  return (
    
<>
<div className="bg-light" style={{height:"70px"}} >
<i onClick={()=>back()} style={{fontSize:"30px"}}><BiArrowBack/></i> 
            <img  src={mainlogo} alt="" onClick={()=>back()} style={{width:"43px",height:"25px",marginLeft:"30px"}} /> <br />
</div>
<div style={{textAlign:"center",marginTop:"12px",fontSize:"20px"}}>
   <b>POST YOUR AD</b>
</div>

<div className='mdiv'>

<b className='b'>SELECT CATEGORY</b><br /><br />

<select  name="category" className="selectbox" onChange={(e)=>setdata({ ...data, [e.target.name]: e.target.value })} >
        <option value="">Mobile</option>
        <option value="Vehicles">Vehicles</option>
        <option value="Property for Sale">Property for Sale</option>
        <option value="Property for Rent">Property for Rent</option>
        <option value="Electronics & Home Appliances">Electronics & Home Appliances</option>
        <option value="Bikes">Bikes</option>
        <option value="Business, Industrial & Agriculture">Business, Industrial & Agriculture</option>
        <option value="Services">Services</option>
        <option value="Jobs">Jobs</option>
        <option value="Animals">Animals</option>
        <option value="Furniture & Home Decor">Furniture & Home Decor</option>
        <option value="Fashion & Beauty">Fashion & Beauty</option>
        <option value="">Books, Sports & Hobbies</option>
        <option value="Kids">Kids</option>
      </select> 

<br />
<br />

<b className='b2'  >INCLUDE SOME DETAILS</b>
<br />
<label className='b2'>Ad title</label>
<br />
<input type="text" name='title' className="selectbox" onChange={(e)=>setdata({ ...data, [e.target.name]: e.target.value })}/>
<p className='b3'>Mention the key features of your item (e.g. brand, model, age, type)</p>
<br />
<label className='b2'>Description</label>
<br />
<input type="text"  className="Discription" name='discription' onChange={(e)=>setdata({ ...data, [e.target.name]: e.target.value })}/>
<br />
<p className='b3'>Include condition, features and reason for selling</p>
<br />
<label className='b2'>Condition</label>
<br />

<Button variant="outline-secondary"  className='btn'  onClick={(e)=>chak(e)} value="New" >New</Button>{' '}
<Button variant="outline-secondary" className='btn1'  onClick={(e)=>chak(e)} value="Used">Used</Button>{' '}

<br />
<br />
<br />
<label className='b2'>SET A PRICE</label>
<br />
<br />
<label className='b2'>Price</label>
<br />
<input type="number"  className="selectbox" name='price' onChange={(e)=>setdata({ ...data, [e.target.name]: e.target.value })}/>
<br />
<br />
<b className='b2'  >UPLOAD UP TO 04 PHOTOS</b>
<br />
<br />
<input className='inptpic' type="file" accept="image/*" onChange={(e)=>handleupload(e)} /> <i className='ai'><FiImage/></i>
<input className='inptpic' type="file" accept="image/*"  /> <i className='ai'><FiImage/></i>
<input className='inptpic' type="file" accept="image/*" /> <i className='ai'><FiImage/></i>
<input className='inptpic' type="file" accept="image/*"  /> <i className='ai'><FiImage/></i>

<br />
<br />
<b className='b2'  >YOUR AD'S LOCATION</b>
<br />
<i  className='ai2' onClick={getLocation}><RiUserLocationFill/></i>

        <input className="b4" type="text"value={locationString} readOnly />
        <br />
        <p className='b3'>Click on Location icon</p>

<br />
<br />

        <br />

        <b className='b2'  >ENTER YOUR DETAILS</b>
        <br />
        <br />
        <img style={{width:"110px",height:"100px",marginLeft:"40px"}}    src={idlogo} alt="" />  
        <label className='b2'>Name</label>

        <input className="b5" type="text"  name='name' onChange={(e)=>setdata({ ...data, [e.target.name]: e.target.value })}/>
        <br />
        <br />
        <b className='b2'  >Let's verify your account</b>
        <br />
        <br />
        <label className='b2'>Mobile Phone Number</label>
        <br />
        <input type="number"  className="selectbox"  placeholder='+92' name='number' onChange={(e)=>setdata({ ...data, [e.target.name]: e.target.value })}/>
        <br />
        <br />
        <br />
        <br />
        <Button className='btn3' variant="dark" onClick={()=>submit()}>Post now</Button>


        <br /><br /><hr />










      










</div>

</>

   
  )
}

const mapStateToProps=(state)=>({

  user:state.uid

})

export default connect(mapStateToProps,null)(AddProdect) 


