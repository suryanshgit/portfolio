
import {useContext} from 'react'
import {LatestState} from '../App'
import {useHistory} from 'react-router-dom';

const Logout=()=>{
  const history=useHistory();
  const obj= useContext(LatestState);
  console.log("Value of obj in logout component")
  console.log(obj)
  obj.dispatch();
  return(<>
    {history.push("/home")}
    </>
  );



}

export default Logout;