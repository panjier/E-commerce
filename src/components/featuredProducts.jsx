import React from 'react'
import { PRODUCTS } from './products';

const featuredProducts = () => {
  return <>
  // {/* <div className="row">
  //   {PRODUCTS.slice(2,10).map(product =>(
  //       <div className="container page-wrapper col-3 p-2">
  //       <div className="page-inner m-auto">
  //         <div className="row m-auto">
  //           <div className="el-wrapper">
  //             <div className="box-up m-auto">
  //               <img src={product.image} className="img img-fluid p-5" alt="" />
  //               <div className="img-info">
  //                 <div className="info-inner">
  //                   <span className="p-name">{product.name}</span>
  //                   <span className="p-company">{product.brand}</span>
  //                 </div>
  //                 <div className="a-size">{product.rate}</div>
  //               </div>
  //             </div>
    
  //             <div className="box-down">
  //               <div className="h-bg">
  //                 <div className="h-bg-inner"></div>
  //               </div>
    
  //               <a className="cart" href="#">
  //                 <span className="price">{product.prices}</span>
  //                 <span className="add-to-cart">
  //                   <span className="txt">Add in cart</span>
  //                 </span>
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       </div>
  //   ))}    
  // </div> */}    

    <div className="row mt-4">
        {PRODUCTS.slice(2,6).map(product => (
        <div className="col-3 p-2">
           <div key={product.id}>
            <div className="card h-100 m-auto p-3">
             <img src={product.image} alt="" className='card-img-top img-fluid m-auto p-3' />
              <div className="card-details">
                <div className="title mb-3">
                  <span>{product.brand}</span>
                  <h5 className='mt-2'>{product.name}</h5>
                </div>
                <div className="card-footer text-center mb-3">
                  <p className='mb-1'>{product.status}</p>
                  <p><strike className='text-danger'>{product.rate}</strike></p>                  
                </div>
              </div>
            </div>
         </div>
        </div>
        ))}
    </div>
  </>;
}

export default featuredProducts