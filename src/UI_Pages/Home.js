import './Home.css'
const image={
    objectFit:'cover',
    objectPosition:'center',
    overflow:'hidden' 
}

const description={
    marginTop:'-150px',
    fontSize:'15px'
}
const Home=()=>{
    const obj={
        minHeight:'80vh'
    }
    return(
        <>
        <div style={{minHeight:'80vh'}}>
            <div className="home-picture">
                <img className="pic image-fluid" src="images/morning.jpg" width="100%"  height="60%" />
            </div>

            <div className="home-description">
                <h5 className="text-center heading">Welcome to the home page</h5>
                <p>Eiusmod voluptate duis incididunt quis. Mollit ex mollit dolore est ipsum laborum magna ullamco eu sint dolore Lorem eiusmod dolor. Dolor veniam reprehenderit minim proident consectetur sint velit aliquip. Irure quis commodo reprehenderit magna proident ea adipisicing. Irure commodo aliqua tempor laboris est veniam amet elit exercitation exercitation. Et adipisicing sit esse duis et. Qui irure labore qui aliqua irure tempor nisi.Eiusmod voluptate duis incididunt quis. Mollit ex mollit dolore est ipsum laborum magna ullamco eu sint dolore Lorem eiusmod dolor. Dolor veniam reprehenderit minim proident consectetur sint velit aliquip. Irure quis commodo reprehenderit magna proident ea adipisicing. Irure commodo aliqua tempor laboris est veniam amet elit exercitation exercitation. Et adipisicing sit esse duis et. Qui irure labore qui aliqua irure tempor nisi.Eiusmod voluptate duis incididunt quis. Mollit ex mollit dolore est ipsum laborum magna ullamco eu sint dolore Lorem eiusmod dolor. Dolor veniam reprehenderit minim proident consectetur sint velit aliquip. Irure quis commodo reprehenderit magna proident ea adipisicing. Irure commodo aliqua tempor laboris est veniam amet elit exercitation exercitation. Et adipisicing sit esse duis et. Qui irure labore qui aliqua irure tempor nisi.Eiusmod voluptate duis incididunt quis. Mollit ex mollit dolore est ipsum laborum magna ullamco eu sint dolore Lorem eiusmod dolor. Dolor veniam reprehenderit minim proident consectetur sint velit aliquip. Irure quis commodo reprehenderit magna proident ea adipisicing. Irure commodo aliqua tempor laboris est veniam amet elit exercitation exercitation. Et adipisicing sit esse duis et. Qui irure labore qui aliqua irure tempor nisi.</p>
            </div>

            </div>
        </>
    );

}

export default Home;