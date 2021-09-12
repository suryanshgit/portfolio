import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const PlacedOrder=()=>{
    return(
        <>
            <div style={{minHeight:'80vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h5 style={{textAlign:"center",color:"green",fontSize:'50px'}}>Order placed successfully</h5>
                <CheckCircleIcon style={{color:"green",fontSize:'100px',display:'block'}}/>
            </div>
        </>
    );
}

export default PlacedOrder;