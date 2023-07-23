import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/OLX-Logo.png";
import mainlogo from "../images/mainlogo.png";
import Carousel from 'react-bootstrap/Carousel';
import { BsFillCarFrontFill, BsSearch ,BsChatDots,BsFillBellFill } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";
import mobile from '../images/mobile.png'
import car from '../images/cars.png'
import house from '../images/house.png'
import key from '../images/key.png'
import camera from '../images/camera.png'
import bike from '../images/bike.png'
import tracter from '../images/Tractor.png'
import brush from '../images/brush.png'
import bag from '../images/bags.png'
import sell from '../images/sellbtnn.png'
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import books from '../images/books.png'
import kids from '../images/toys.png'
import fashion from '../images/fashin beauty.png'
import chair from '../images/chair.png'
import animal from '../images/chicken.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {auth} from '../Config/Firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { uid } from '../Config/store/Action/Action';
// futter import
import { MdLocationPin } from 'react-icons/md';
import {AiOutlineArrowRight} from'react-icons/ai'
import {AiOutlinePhone} from'react-icons/ai'
import {AiOutlineMail} from'react-icons/ai'
import {FaFacebook} from'react-icons/fa'
import {FaTwitter} from'react-icons/fa'
import {FaInstagram} from'react-icons/fa'
import {FaLinkedin} from'react-icons/fa'
import {BsPinterest} from'react-icons/bs'
import Card from 'react-bootstrap/Card';
import {  ref, get } from "firebase/database";
import { db } from  "../Config/Firebase"









function Home(props) {

  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [prodect,setprodect]=useState([])
    const [userStatus,setuserStatus]=useState(false)


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleemail=(e)=>{
    
    setEmail(e.target.value)
    console.log(email)

  }

  const handlepassword=(e)=>{
    
    setPassword(e.target.value)
    console.log(password)

  }





  const Signup=async (e)=>{
    e.preventDefault()

await createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user.uid;
   props.send_uid(user)
   localStorage.setItem("uid",user)

    toast.success("Successfully Created",{
      autoClose:1000
      
    });
   
    document.getElementById("chat").style.display = "block";
    document.getElementById("bell").style.display = "block";
document.getElementById("profile").style.display="block";

setuserStatus(true)

    document.getElementById("login").style.display = "none";


    handleClose()
    // ...
  })
 
  .catch((error) => {
  
   toast.warning("Already Created",{
    autoClose:1000

  });


  });




  }

 const nav =useNavigate()
  const  Add_prodect=()=>{

    if(userStatus==true){
      nav('/AddProdect')
    }else{
      alert("Login your Account !!")
    }

    
  }



useEffect(()=>{

  
  // get all data
  const db_ref= ref(db,"user")
  get(db_ref).then((snap)=>{
    console.log(snap.val())
    setprodect(Object.values(snap.val()))
  })



},[])

const Order=(v,i)=>{

alert("click chak ")

}






  return (





    
    <Container fluid>
      {/* header Start */}
      <Row>
        <Col className="bg-light d-flex">
          <img
            className="m-2"
            style={{ width: "32px", height: "20px" }}
            src={logo}
            alt=""
          />
          <ul style={{ listStyle: "none" }} className="d-flex mt-2">
            <li>
              {" "}
              <i>
                {" "}
                <BsFillCarFrontFill />
              </i>{" "}
              <a  className="text-decoration-none text-dark">
                Motors
              </a>
            </li>
            <li style={{ paddingLeft: "25px" }}>
              {" "}
              <i>
                <BiBuildings />
              </i>{" "}
              <a  className="text-decoration-none text-dark">
                Property
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      {/* header Closed */}

      {/* Search Bar */}


<Row className="bg-light">
  <Col  className=" d-flex align-items-center" style={{margin:"20px"}}>
<img src={mainlogo} alt="" style={{width: "62px", height: "35px"}}/>

{/* First Search bar */}

<InputGroup className="h-75    w-25 m-3">
<Form.Control

          placeholder="Pakistan"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />

      </InputGroup>


{/* Second Search bar */}
<InputGroup className="h-75    w-50 d-flex">
        
        <Form.Control
          placeholder="Find Cars Mobile, Phones and More..."
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon1" ><BsSearch/></InputGroup.Text>
      </InputGroup>
        
           <div>
         
        <dir>
  <a id="login"  className="text-dark h5 m-3  " style={{marginLeft:"10px" , cursor:"pointer"}} onClick={handleShow}>Login           
  </a> 
  
    

<div className="d-flex ">
<i style={{display:"none"}}  id="chat"><BsChatDots className="mx-2" style={{fontSize:'20px'}}/></i>
<i style={{display:"none"}}  id="bell"><BsFillBellFill  className="mx-2" style={{fontSize:'20px'}}/></i>
<i  style={{display:"none"}} id="profile"  ><CgProfile className="mx-2" style={{fontSize:'20px'}}/></i>
</div>

          </dir>   


            

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton  >
          <div className="d-flex justify-content-center" >
          <img src={mainlogo} alt=""  className="w-25 h-50 "/>
          </div>
          <ToastContainer />

        </Modal.Header>


        


<Form>
<Modal.Body>
        <h4 className="d-flex justify-content-center">WELCOME TO OLX</h4>
<p className="d-flex justify-content-center  text-center">The trusted community of <br /> buyers and sellers.</p>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
              className="text-dark"
                type="email"
                placeholder="name@example.com"
                onChange={(e)=>handleemail(e)}
              />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
              name="password"
                type="Password"
                placeholder="Enter Your Password"
                onChange={(e)=>handlepassword(e)}

                
              />
            </Form.Group>


        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit"    onClick={(e)=>Signup(e)}>
           Sign up
          </Button>
        </Modal.Footer>


</Form>



            
      
      </Modal>
      
     
           </div>
           
          <div>
          <img  src={sell} alt="" style={{width:"88px",marginLeft:"25px"}} onClick={()=>Add_prodect()} />
          </div>
            
  </Col>
</Row>





      {/* navbar Start */}

      <Row className="shadow-sm">
        <Col className="d-flex">

        <Dropdown className="mt-2" >
        <Dropdown.Toggle variant="light" id="dropdown-basic">
      All Categories
      </Dropdown.Toggle >

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

          <ul className="d-flex list-unstyled">
            <li className="p-3">Mobile Phones</li>
            <li className="p-3">Cars</li>
            <li className="p-3">Motorcycle</li>
            <li className="p-3">House</li>
            <li className="p-3">Tv-Video-Audio</li>
            <li className="p-3">Tablets</li>
            <li className="p-3">Land & Plots</li>
          </ul>
          <br /> <br />
        
        </Col>
      </Row>

{/* Slider Start */}

<Row>
  <Col>
  <br /> 

  <Carousel>
      <Carousel.Item  >
        <img 
          className="d-block w-100"
          src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp"
          alt="First slide"
        />
        
      </Carousel.Item >
      <Carousel.Item >
        <img 
          className="d-block w-100"
          src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
<br />
  </Col>
</Row>

{/* Slider End */}

{/* Rounded Cards Starts */}

<Row>
  <Col><h3>All categories</h3></Col>
  </Row>

<Row>
<Col className="d-flex m-3">
<div>
<img style={{width:"88px",height:"88px"}}   src={mobile} alt="" /> <br />
<div className="d-flex justify-content-center">
<b className="text-center">Mobile</b>
</div>
</div>
</Col>

<Col className="d-flex m-3">
<div>
<img style={{width:"88px",height:"88px"}}   src={car} alt="" /> <br />
<div className="d-flex justify-content-center">
<b  className="text-center">Vehicles</b>
</div>
</div>
</Col>

<Col className="d-flex m-3">
<div>
<img style={{width:"88px",height:"88px"}}   src={house} alt="" /> <br />
<div className="d-flex justify-content-center">
<b  className="text-center ">Property<br /> Sale</b>
</div>
</div>
</Col>

<Col className="d-flex m-3">
<div>
<img style={{width:"88px",height:"88px"}}   src={key} alt="" /> <br />
<div className="d-flex justify-content-center">
<b  className="text-center ">Property <br /> Rent</b>
</div>
</div>
</Col>

<Col className="d-flex m-3">
<div>
<img style={{width:"88px",height:"88px"}}   src={camera} alt="" /> <br />
<div className="d-flex justify-content-center">
<b  className="text-center "> Camera</b>
</div>
</div>
</Col>

<Col className="d-flex m-3">
<div>
<img style={{width:"88px",height:"88px"}}   src={bike} alt="" /> <br />
<div className="d-flex justify-content-center">
<b  className="text-center "> Bikes</b>
</div>
</div>
</Col>

<Col className="d-flex m-3">
<div>
<img style={{width:"88px",height:"88px"}}   src={tracter} alt="" /> <br />
<div className="d-flex justify-content-center">
<b  className="text-center ">Tractor</b>
</div>
</div>
</Col>

<Col className="d-flex m-3">
<div>
<img style={{width:"88px",height:"88px"}}   src={brush} alt="" /> <br />
<div className="d-flex justify-content-center">
<b  className="text-center ">Services</b>
</div>
</div>
</Col>

<Col className="d-flex m-3">
<div>
<img style={{width:"88px",height:"88px"}}   src={bag} alt="" /> <br />
<div className="d-flex justify-content-center">
<b  className="text-center ">Jobs</b>
</div>
</div>
</Col>

</Row>

<Row >
<Col className="d-flex m-3 gap-5 ">
<div>
<img style={{width:"88px",height:"88px"}}   src={animal} alt="" /> <br />
<div className="d-flex justify-content-center">
<b  className="text-center ">Animals</b>
</div>
</div>




<div>
<img style={{width:"88px",height:"88px"}}   src={chair} alt="" /> <br />
<div className="d-flex justify-content-center">
<b  className="text-center ">Furniture</b>
</div>
</div>



<div>
<img style={{width:"88px",height:"88px"}}   src={fashion} alt="" /> <br />
<div className="d-flex justify-content-center">
<b  className="text-center ">Fashion</b>
</div>
</div>



<div>
<img style={{width:"88px",height:"88px"}}   src={books} alt="" /> <br />
<div className="d-flex justify-content-center">
<b  className="text-center ">Books</b>
</div>
</div>



<div>
<img style={{width:"88px",height:"88px"}}   src={kids} alt="" /> <br />
<div className="d-flex justify-content-center">
<b  className="text-center ">Kids</b>
</div>
</div>
</Col>

</Row>
<Row>
  <Col>
  <br />

<h3>More in recent ads</h3>
<br />
  </Col>
</Row>

<Row>

{
  prodect.map((v,i)=>{
return(
  <>
  
  <Col>
 <Card style={{ width: '300px' }} className="col-lg-4 md-3 sm-6 col-12 mt-5">
      <Card.Img variant="top" src={v.imagelink} style={{ width: '298px',height:"160px",objectFit:"cover" }} />
      <Card.Body>
        <Card.Title>Rs :   {v.price}</Card.Title>
        <Card.Text> {v.title}
        </Card.Text>
        <Card.Text> { v.address}
        </Card.Text>
       
      </Card.Body>
    </Card>
</Col>

  </>
)

  })
}

  
</Row>


<Row >
<Col style={{width:"100%",height:"10%"}}>
<footer class="bg-light text-dark mt-5" >
  <div class="container mt-5">
    <div class="row pt-4">
      <div class="col col-lg-3 col-md-4 col-sm-6 col-12 " >
        <h5>POPULAR CATEGORIES</h5>
        <ul class="list-unstyled py-2">
          <li className='py-2'> Cars</li>
          <li className='py-2'> Flats for rent</li>
          <li className='py-2'> Mobile Phones</li>
          <li className='py-2'> Jobs</li>
        
        </ul>
      </div>
      <div class="col col-lg-3 col-md-3 col-sm-3 col-3">
        <h5>TRENDING SEARCHES</h5>
        <ul class="list-unstyled py-2">
          <li className='py-2'>  Bikes</li>
          <li className='py-2'>  Watches</li>
          <li className='py-2'> Books</li>
          <li className='py-2'> Dogs</li>
        </ul>
      </div>
      <div class="col col-lg-3 col-md-4 col-sm-6 col-12">
        <h5>ABOUT US</h5>
        <ul class="list-unstyled py-2">
          <li className='py-2'> About Dubizzle Group</li>
          <li className='py-2'> OLX Blog</li>
          <li className='py-2'> Contact Us</li>
          <li className='py-2'>OLX for Businesses</li>
        </ul>
      </div>
      <div class="col col-lg-3 col-md-4 col-sm-6 col-12">
        <h5>ABOUT US</h5>
        <ul class="list-unstyled py-2">
          <li className='py-2'>  Help</li>
          <li className='py-2'> Sitemap</li>
          <li className='py-2'>Terms of use</li>
          <li className='py-2'>   Privacy Policy</li>

        </ul>
      
      </div>
    </div>
    <div className="row mt-5 d-flex justify-content-center">
        <div className="col col-lg-3 col-md-4 col-sm-6 col-12 ">
        <div className="social-icons ">
            <ul class="list-unstyled d-flex justify-content-center" >
                <li className='mx-3'><FaFacebook style={{color:"#198754", fontSize:"20px"}} /></li>
                <li className='mx-3'><FaTwitter style={{ color:"#198754",fontSize:"20px"}} /></li>
                <li className='mx-3'><FaInstagram style={{ color:"#198754",fontSize:"20px"}} /></li>
                <li className='mx-3'><FaLinkedin style={{ color:"#198754",fontSize:"20px"}} /></li>
                <li className='mx-3'><BsPinterest style={{ color:"#198754",fontSize:"20px"}}/> </li>
            </ul>
            </div>
        </div>
    </div>
    <div className="row mt-3 mb-3">
      <div className="col col-sm-12">
        <div className='d-flex justify-content-center'>
          <p>Created by <span style={{color:"#198754"}}>Mirza Wasil Baig</span> | All Rights Reserved! </p>
        </div>
      </div>
    </div>
  </div>
</footer>

</Col>

</Row>







    </Container>
  );
  }

 const mapDispatchToProps=(dispatch)=>({

  send_uid:(user)=>dispatch(uid(user))

  })
export default connect(null,mapDispatchToProps)(Home);
