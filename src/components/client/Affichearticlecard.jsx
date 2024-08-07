import React, { memo } from 'react'

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";

//npm i --save react-lazy-load-image-component
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const AfficheArticlecard = () => {
    const dispatch = useDispatch();

    
    const handleAddToCart = (art) => {
      dispatch(addToCart(art));
      };
    
     
    
const {articles,isLoading,error} = useSelector((state)=>state.storearticles);
 
return (
<div className="card-container">
  {isLoading ? <center>Loading ....</center>:null}
  {error ? <center>Error ....</center>:null}
{isLoading===false && articles && articles.map((article,ind)=>{
    return <div className='card' key={ind}>
    
            <LazyLoadImage
            alt={article.designation}
            height={80}
            src={article.imageart} 
            width={80} 
            effect="blur"
            wrapperProps={{
                // If you need to, you can tweak the effect transition using the wrapper style.
                style: {transitionDelay: "1s"},
            }}
            />
  
    <div className='card-content'>
        <h1 className='card-title'>{article.reference}</h1>
        <p className='card-description'>{article.designation.substr(0,20)}</p>
        <h1 className='card-title'>Prix : {article.prix} TND</h1>
        <button className='card-button' disabled={article.qtestock<=1} onClick={() => handleAddToCart(article)}><i className="fa-solid fa-cart-shopping"></i>Add to card</button>
    </div>

    </div>
  })}
</div>

  )
}

export default memo(AfficheArticlecard)
