
import { useState } from 'react';
import './FoodItem.css';



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
        mainDiv.style.height='600px'
        itemContainer.style.height='500px';
        itemDescription.style.height='300px';
        itemImage.style.width='80%';
        itemImage.style.marginLeft='10%';

        // itemImage.style.marginLeft='12.5%';
        // mainDiv.style.height='150px';
        // itemContainer.style.width='';
      
    }
    //if it is expanded
    else {
        dots.style.display = 'inline';
        hiddenItem.style.display = 'none';
        btn.innerText='read more';
        mainDiv.style.width='40%';
        mainDiv.style.height='360px';
        itemContainer.style.height='360px';
        itemDescription.style.height='230px';
        itemImage.style.width='100%';
        itemImage.style.marginLeft='0';
        // mainDiv.style.height='170px';
        // main.style.width='40%';
        // image.style.width='250px';
        // image.style.height='170px'

    }
    }
    else{
         //if it is not expanded
    if (hiddenItem.style.display == 'none') {
        dots.style.display = 'none';
        hiddenItem.style.display = 'inline';
        btn.innerText="read less";
        mainDiv.style.width='80%';
        itemImage.style.width='25%';
        itemImage.style.marginLeft='12.5%';
        // mainDiv.style.height='150px';
        // itemContainer.style.width='';
        
    }
    //if it is expanded
    else {
        dots.style.display = 'inline';
        hiddenItem.style.display = 'none';
        btn.innerText='read more';
        mainDiv.style.width='40%';
        itemImage.style.width='50%';
        itemImage.style.marginLeft='0';
        // mainDiv.style.height='170px';
        // main.style.width='40%';
        // image.style.width='250px';
        // image.style.height='170px'
    }
    }
}

// const desktopView=window.matchMedia('(min-width:769px)')

//     if(desktopView.matches)
//     {
//         // document.querySelector('.item-main-div').style.height='180px';
//         // document.querySelector('.item-container').style.height='180px';
//         // document.querySelector('.item-main-div').style.background='blue';
//     }

// window.addEventListener('resize',()=>{
//     const handleResize=(id)=>{
//     /* moving towards desktop size*/
//     console.log("value of id is ");
//     console.log(id);
//     if(window.innerWidth>=769){
//     document.querySelector('#item-main-div'+id).style.height='180px';
//     document.querySelector('#item-container'+id).style.height='180px';
//     document.querySelector('#item-image'+id).style.width='50%';
//     document.querySelector('#item-image'+id).style.marginLeft='0';
//     }
//     else{
//         document.querySelector('#item-image'+id).style.width='80%';
//         document.querySelector('#item-image'+id).style.marginLeft='10%';
//     }
// }




const FoodItem = ({image,id}) => {
   console.log("Value of image is ");
   console.log(image);
   console.log("Valud of id is ")
   console.log(id);

  

    

    return (
       
     <>
            {/* <div id={"main"} className={"main"+id} style={obj}>
                <div className="row" style={row}> 
                    <div className="col-sm-12 col-md-6 image" style={img}>
                       
                        <img id={'image'+id} src={image} width="100%" height="100%" />
                    </div>

                    <div className="col-sm-12 col-md-6  desc" >
                         <p>Nulla ex commodo aute amet laboris minim Lorem officia et sunt mollit. Fugiat id reprehenderit quis cillum in incididunt occaecat aute nisi veniam aute.<span id={"dots"+id} className="dots">...</span> <span id={"more"+id} className="more">Est excepteur occaecat irure aute mollit anim irure eu consequat fugiat pariatur excepteur reprehenderit culpa. Sunt deserunt nulla occaecat esse magna exercitation laboris laborum.Nulla ex commodo aute amet laboris minim Lorem officia et sunt mollit. Fugiat id reprehenderit quis cillum in incididunt occaecat aute nisi veniam aute. Est excepteur occaecat irure aute mollit anim irure eu consequat fugiat pariatur excepteur reprehenderit culpa. Sunt deserunt nulla occaecat esse magna exercitation laboris laborum.Nulla ex commodo aute amet laboris minim Lorem officia et sunt mollit. Fugiat id reprehenderit quis cillum in incididunt occaecat aute nisi veniam aute. Est excepteur occaecat irure aute mollit anim irure eu consequat fugiat pariatur excepteur reprehenderit culpa. Sunt deserunt nulla occaecat esse magna exercitation laboris laborum.</span></p>
                         <button id={"btn"+id} className="button" onClick={()=>handleText(id)} > read more</button>
                        
                        
                     </div>
                 </div>
             </div>  */}

             {/* creating a new foot Item */}

             <div className="item-main-div" id={"item-main-div"+id}>
                <div className="item-container" id={"item-container"+id}>
                    <img className="item-image" id={"item-image"+id} src={image} alt="food item image" />
                    <div className="item-description" id={"item-description"+id}>
                        Sint tempor ut cupidatat nostrud nostrud aute excepteur. Adipisicing ut est aliqua qui ex sit nulla. <span className={"dots"+id}>...</span><span className={"hidden-item-description"+id} style={{display:'none'}} >Amet consectetur consequat nisi ex do sit irure do id et eu. Nisi consectetur officia qui consectetur consectetur culpa cupidatat ut nostrud exercitation. Excepteur minim do cupidatat laborum elit nulla reprehenderit commodo amet pariatur reprehenderit. Do sit officia mollit cupidatat minim adipisicing laboris reprehenderit ullamco elit. Ea in cillum voluptate cupidatat.</span><button className={"btn"+id}  onClick={()=>{handleText(id)}}>read more</button>
                    </div>
                </div>

             </div>
         </>
    );
}

export default FoodItem;

