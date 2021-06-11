import React, {useState} from 'react';
import Dropbar from '../Components/DropBar';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import  {background} from '../Images';
// import background from '../Images/background.jpg'


const Home = ({children}) => {
  
  const [isOpen, setOpen] = useState(false);

  const toggle = ()=>{
    setOpen(!isOpen);
  };
  return (
    <div style={{color:'black',overflow:'hidden',display:'flex',flexDirection:'column'}}  > 
    {/*  */}
      <Dropbar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/> 
      <div style={{height:'100vh', width:'100vw',position:'absolute', display:'grid', gridTemplate:'1fr / 1fr/ 1fr ',
       placeItems:'center'}}>
      {/* <div style={{alignContent:'center',justifyContent:'center'}}> */}
       <img src = {background} alt='' style={{position:'fixed',zIndex:'-100', display:'inline-block',
        height:'100vh', width:'100vw',gridColumn:'1',gridRow:'1'}}/>
        <div  style={{display:'grid',gridTemplate:'1fr / 1fr ',alignContent:'center',justifyContent:'center',zIndex:'2',position:'relative'}} >
          {children}
        </div>
      </div>
      <Footer style={{position:'absolute'}}/>
     {/*display:'flex',flexDirection:'column',position:'absolute',minWidth:'100%', */}
    </div>
  )
};
export default Home
