
import FoodItem from './FoodItem'
import './Display.css'

const obj = {
    minHeight: '81vh',
}
const festival = {
    color: 'tomato',
    display: 'flex',
    // flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // background: 'lightblue',

    // border:'2px solid black',


}
const heading={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'10px'
}
const food = {
    color: 'blue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // background: '#ff7979'
}

const Display=({value})=>{
    console.log("Value of single object in Display is ")
    console.log(value)
    return (
        <>
            <div style={obj} class="display-div">
                <h5 style={heading}>Famous food of {value.state} state</h5>
               
                <div style={festival} className="main-display-container">
                  

                    {value.images.map((image, index, array) => {
                                console.log("Value of image is")
                                console.log(image)
                             
                                return(
                                <FoodItem image={image} id={index}/>
                                )
                               
                    })}

                </div>
            </div>
        </>
    );

}

export default Display;