
import './FoodItem.css';

const obj = {
    // minHeight:'80vh'
    //    display:'flex',
    //    flexDirection:'row',
    // border:'2px solid red',
    margin: '5px',
    width: '40%',
    marginLeft: '80px',
    marginTop: '20px',
    marginBottom: '20px'
}
const row = {
    // border:'2px solid red',

    marginTop: '3px',
    marginLeft: '3px',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'
}
const img = {
    padding: '0',
    // border:'2px solid black',

}


const handleText = (id) => {
    console.log("value of id is");
    console.log(id);
    const dots = document.getElementById("dots"+id);
    const more = document.getElementById("more"+id);
    const btn = document.getElementById("btn"+id);
    const main=document.querySelector(".main"+id);
    const image=document.getElementById('image'+id);
    //if it is not expanded
    if (more.style.display == 'none') {
        dots.style.display = 'none';
        more.style.display = 'inline';
        btn.innerText="read less";
        main.style.width='80%';
        image.style.width='500px';
        image.style.height='340px';
    }
    //if it is expanded
    else {
        dots.style.display = 'inline';
        more.style.display = 'none';
        btn.innerText='read more';
        main.style.width='40%';
        image.style.width='250px';
        image.style.height='170px'
    }
}

const FoodItem = ({image,id}) => {
   console.log("Value of image is ");
   console.log(image);
   console.log("Valud of id is ")
   console.log(id);
    
    return (
       
     <>
            <div id={"main"} className={"main"+id} style={obj}>
                <div className="row" style={row}>
                    <div className="col-sm-12 col-md-6 image" style={img}>
                       
                        <img id={'image'+id} src={image} width="100%" height="100%" />
                    </div>

                    <div className="col-sm-12 col-md-6  desc" >
                         <p>Nulla ex commodo aute amet laboris minim Lorem officia et sunt mollit. Fugiat id reprehenderit quis cillum in incididunt occaecat aute nisi veniam aute.<span id={"dots"+id} className="dots">...</span> <span id={"more"+id} className="more">Est excepteur occaecat irure aute mollit anim irure eu consequat fugiat pariatur excepteur reprehenderit culpa. Sunt deserunt nulla occaecat esse magna exercitation laboris laborum.Nulla ex commodo aute amet laboris minim Lorem officia et sunt mollit. Fugiat id reprehenderit quis cillum in incididunt occaecat aute nisi veniam aute. Est excepteur occaecat irure aute mollit anim irure eu consequat fugiat pariatur excepteur reprehenderit culpa. Sunt deserunt nulla occaecat esse magna exercitation laboris laborum.Nulla ex commodo aute amet laboris minim Lorem officia et sunt mollit. Fugiat id reprehenderit quis cillum in incididunt occaecat aute nisi veniam aute. Est excepteur occaecat irure aute mollit anim irure eu consequat fugiat pariatur excepteur reprehenderit culpa. Sunt deserunt nulla occaecat esse magna exercitation laboris laborum.</span></p>
                         <button id={"btn"+id} className="button" onClick={()=>handleText(id)} > read more</button>
                        
                        
                     </div>
                 </div>
             </div> 
         </>
    );
}

export default FoodItem;

