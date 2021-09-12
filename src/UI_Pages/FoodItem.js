
import { useState,useContext, createContext,useEffect } from 'react';
import './FoodItem.css';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import Cart from './Cart'
import Header from '../Header'
import {CartContext} from '../CartCounter/CounterContextProvider'

 


window.addEventListener('resize',()=>{
    // item.removeAttribute("style")
    Array.from(document.querySelectorAll("#dots")).map((item,index)=>{item.removeAttribute("style");})
    Array.from(document.querySelectorAll("#hidden-item-description")).map((item,index)=>{item.removeAttribute("style");})
    Array.from(document.querySelectorAll(".item-main-div")).map((item,index)=>{item.removeAttribute("style");})
    Array.from(document.querySelectorAll(".item-container")).map((item,index)=>{item.removeAttribute("style");})
    Array.from(document.querySelectorAll(".item-image")).map((item,index)=>{item.removeAttribute("style");})

});

const handleText = (id) => { 
    console.log("value of id is");
    console.log(id);
    const dots = document.querySelector(".dots"+id);
    const hiddenItem = document.querySelector(".hidden-item-description"+id);
    const btn = document.querySelector(".btn"+id);
    const mainDiv=document.querySelector("#item-main-div"+id);
    const itemContainer=document.querySelector("#item-container"+id);
    const itemImage=document.querySelector("#item-image"+id);
    const itemDescription=document.querySelector("#item-description"+id);
   
    
    

    const mediaQueryMobile=window.matchMedia('(max-width:768px)')
    if(mediaQueryMobile.matches){
       //if it is not expanded
    if (document.querySelector(".hidden-item-description"+id).style.display == 'none') {
        // dots.style.display = 'none';

        hiddenItem.style.display = 'inline';
        btn.innerText="read less";
        mainDiv.style.width='80%';
        mainDiv.style.height='350px'
        itemContainer.style.height='350px';
        // itemDescription.style.height='300px';
        itemImage.style.width='100%';
        itemImage.style.height='250px'; 
    }
    //if it is expanded
    else {
        dots.style.display = 'inline';
        hiddenItem.style.display = 'none';
        btn.innerText='read more';
        mainDiv.style.width='40%';
        mainDiv.style.height='280px';
        itemContainer.style.height='280px';
        // itemDescription.style.height='230px';
        itemImage.style.width='100%';
        itemImage.style.height='175px'; 
        // itemImage.style.marginLeft='0';
    }
    }
    else{
         //if it is not expanded
    if (hiddenItem.style.display == 'none') {
        dots.style.display = 'none';
        hiddenItem.style.display = 'inline';
        btn.innerText="read less";
        mainDiv.style.width='80%';
        mainDiv.style.height='360px';
        itemImage.style.width='50%';
        itemImage.style.height='250px';
        itemDescription.style.height='300px';
        
      
        
    }
    //if it is expanded
    else {
        dots.style.display = 'inline';
        hiddenItem.style.display = 'none';
        btn.innerText='read more';
        mainDiv.style.width='40%';
        mainDiv.style.height='180px';
        itemImage.style.width='50%';
        itemImage.style.height='175px';
        
    }
    }
}



// export const LatestState=createContext();
const FoodItem = ({image,id}) => {

    
 const {counter,IncreaseCounter,DecreaseCounter}=useContext(CartContext);

    //handling the item count
    const handleItemCount=(operation,id,image)=>{
        if(operation=="increment"){
            if(document.querySelector('.qty'+id).value==10) return false;
            // document.querySelector('.qty'+id).value=Number(document.querySelector('.qty'+id).value)+1;
            handleCart(id,image)
        }
        else{
            let newCart=JSON.parse(localStorage.getItem("cart"));
            newCart.map((item)=>{
                    if(item.Id==id && item.qty>=1)
                    {
                        if(document.querySelector('.qty'+id).value==0) return false;
                        document.querySelector('.qty'+id).value=Number(document.querySelector('.qty'+id).value)-1;
                        DecreaseCounter();
                        localStorage.setItem("itemCount",parseInt(localStorage.getItem("itemCount"))-1);
                        item.qty=item.qty-1;
                    }
            })
            localStorage.setItem("cart",JSON.stringify(newCart));
        }

    }

 //handling the cart
 const handleCart=(id,image)=>{
     if(localStorage.getItem("itemCount")==null){
         localStorage.setItem("itemCount",0);
     }
     IncreaseCounter(); 
   document.querySelector('.qty'+id).value=Number(document.querySelector('.qty'+id).value)+1;
    
   //if cart is empty in localStorage then add data in localStorage
   let cart =localStorage.getItem("cart");
//    console.log(cart);
   if(cart==null){
       let items=[];
       let item={Id:id,Image:image,qty:Number(document.querySelector('.qty'+id).value)};
       items.push(item);
       localStorage.setItem("cart",JSON.stringify(items));
   }
   //else find the item by id if it already exists then increase the quantity otherwise add that item
   else{
       let itemCart=JSON.parse(cart)
    //    console.log("Cart after after parsing");
    //    console.log(itemCart);
       // let product=itemCart.find((item)=>console.log(item));
    //    let product= itemCart.reduce((flag,item)=>{
    //       if(item.Id==id) flag= true;
    //       else{
    //           flag= false;
    //       }
    //     // if(item.Id==id)final=item;
    //    })
    let flag;
    for(let i=0;i<itemCart.length;i++)
    {
        if(itemCart[i].Id==id)
        flag =true;
        else
        flag= false;
    }
    //    console.log("Value of product is ");console.log(product);
    //    console.log(product[product.length-1]);
    //    if(product[product.length-1]){
        // console.log(product)
        if(flag){
           //increase the product count
        //    console.log("*")
           itemCart.map((item)=>{
               if(item.Id==id){
                   item.qty+=1;
               }
               localStorage.setItem("cart",JSON.stringify(itemCart));

           })
       }
       else{
        //    console.log("+")
           //add the product as it does not exists already
           let item={Id:id,Image:image,qty:Number(document.querySelector('.qty'+id).value)};
           itemCart.push(item);
        //    console.log("value of cart after adding new item");
        //    console.log(itemCart);
           localStorage.setItem("cart",JSON.stringify(itemCart)); 
       }
   }
   
   console.log(`Value of counter is ${counter}`)
    localStorage.setItem("itemCount",Number(localStorage.getItem("itemCount"))+1);
    // else
    // localStorage.setItem("itemCount",0);
}
   
  

  
    return ( 
       
     <>
            {/* creating a new foot Item */}

             <div className="item-main-div" id={"item-main-div"+id}>
                <div className="item-container" id={"item-container"+id}>
                    <img className="item-image" id={"item-image"+id} src={image} alt="food item image" />
                    <div className="item-description" id={"item-description"+id}>
                        Sint tempor ut cupidatat nostrud nostrud aute excepteur. Adipisicing ut est aliqua qui ex sit nulla. <span id="dots" className={"dots"+id}>...</span><span id="hidden-item-description" className={"hidden-item-description"+id} style={{display:'none'}} >Amet consectetur consequat nisi ex do sit irure do id et eu. Nisi consectetur officia qui consectetur consectetur culpa cupidatat ut nostrud exercitation. Excepteur minim do cupidatat laborum elit nulla reprehenderit commodo amet pariatur reprehenderit. Do sit officia mollit cupidatat minim adipisicing laboris reprehenderit ullamco elit. Ea in cillum voluptate cupidatat.</span><button className={"btn"+id}  onClick={()=>{handleText(id)}}>read more</button>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',marginTop:'10px'}}>
                        <div>
                        <button onClick={()=>handleItemCount("increment",id,image)}><AddBoxIcon/></button>
                        <input className={"qty"+id} type="number" placeholder='0' style={{width:'40px',textAlign:'center'}}/>
                        <button onClick={()=>handleItemCount("decrement",id,image)}><IndeterminateCheckBoxIcon/></button>
                        </div>
                        <label style={{color:'red',fontWeight:'bold'}}>Price: ₹ 50</label>
                        <button onClick={()=>handleCart(id,image)} className="cart" style={{padding:'2px'}}>Add to cart</button>

                        </div>
                    </div>
                   
                    
                </div>

             </div>
         </>
    );
}
// export {cartContext}
export default FoodItem;



