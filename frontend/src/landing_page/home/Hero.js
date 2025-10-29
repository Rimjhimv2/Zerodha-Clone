import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate=useNavigate();
  return (
    <div className='container p-5 mb-5'>
        {/* it will occupy the entire row since we not using any column */}
      <div className='row text-center'>
        <img src='media/images/homeHero.png' alt='Hero Banner' className='mb-5'/>
      
      <h1 className='mt-5'>Invest in everything</h1>
      <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
      <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto ",
        backgroundColor: "rgb(56,126,209)",
  color: "white",
      }}
      
      onClick={()=>navigate("/signup")}
      >Signup Now</button>
      </div> {/* Closing row */}
    </div> 
  );
}

export default Hero;

