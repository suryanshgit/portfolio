
const mainDiv={
    width:'100vw',
    height:'61vh',
    // border:'2px solid red',
    display:'flex',
    justifyContent:'center'
}
const styles={
    // position:'absolute',
    // marginLeft:'12%',
    // marginTop:'20px'
    // objectFit:'contain',
    // objectPosition:'center',
    // height:'70vh',
    // overflow:'hidden'
}

const ImageSlider=()=>{
    return (
        <>
            
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel" style={styles} >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/misal_pav.jpg" className="d-block w-100" height="500px" alt="misal pav" style={{opacity:'0.6'}} />
    </div>
    <div className="carousel-item">
      <img src="images/pav_bhaji.jpeg" className="d-block w-100" height="500px" alt="pav bhaji" style={{opacity:'0.6'}} />
    </div>
    <div className="carousel-item">
      <img src="images/vada_pav.jpg" className="d-block w-100" height="500px" alt="vada pav" style={{opacity:'0.6'}} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </>
    );
}

export default ImageSlider;