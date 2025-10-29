import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
  

  <div class='container mt-5'>

    <div class='row '> 
        <div class='col-md-6 '>
            <img src={imageUrl} alt={productName} className="p-5" />
        </div>
         <div class='col-md-6 p-5 mt-5'>
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div className="mt-3">
            <a href={tryDemo}  style={{textDecoration:"none"}}>Try Demo <i className='fa fa-arrow-right' aria-hidden='true'></i></a>
            <a href={learnMore}  style={{textDecoration:"none",marginLeft:"50px"}}>Learn More <i className='fa fa-arrow-right' aria-hidden='true'></i></a>
            </div>
            <div className="mt-3 ">
            <a href={googlePlay}  style={{textDecoration:"none"}}><img src="media/images/googlePlayBadge.svg"/> </a>
         <a href={appStore}  style={{textDecoration:"none",marginLeft:"10px"}}><img src="media/images/appstore-badge.svg"/></a>
         </div>
         </div>
    </div>
</div>
 )
}

export default LeftSection;
