import React from 'react';
import '../../index.css';


function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero">
            <div className="p-5" id="supportWrapper">
                <h3>Support Portal</h3>
                <a href="#">Track Tickets</a>
            </div>

            <div className="row p-5 m-3">
                <div className='col-6 p-5'>
                    <h1 className="fs-3">
                        Search for an answer or browse help topics to create a ticket
                    </h1>
                    <input 
                        type="text"
                        placeholder="Eg. how do I activate F&O"
                        className="form-control mb-3"
                    />
                    <div className="mt-3">
                        <a href="#" className=" mb-3">Trade account opening</a>

                        <a href="#" className="mb-3">Track segment activation</a>
                        
                        
                        <a href="#" className="mb-3">Intraday margins</a>
                       
                        <a href="#" className="mb-3">Kite user manual</a>
                    </div>
                </div>

                <div className='col-6 p-5'>
                    <h1>Featured</h1>
                    <ol>
                        <li><a href="#">Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="#">Latest Intraday leverages - MS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;
