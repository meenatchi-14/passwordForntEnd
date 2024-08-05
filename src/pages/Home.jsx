/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect,useState} from 'react';
import useLogout from '../Component/useLogout.jsx';


function Home() {
 const logout = useLogout()
 

  const [userName,setUserName]=useState("")

  useEffect(()=>{
    let userName = sessionStorage.getItem("userName")
    if(userName)
    {
      setUserName(userName)
    }
  },[])


  return (
    <>
   
      <div className="sign " id='sign' style={{paddingBottom:"100px"}} >
      <div className='wel'>
       WELCOME
    </div>
    <br/>
      <br/>
      <br/>
      <div style={{ position:'absolute', marginTop:"300px" }}>
  <span className="fast-flicker"></span><span  className="flicker">{userName}</span>
  <br />
  </div>
  <button id='log' style={{ position:'absolute', marginTop:"500px" }}>
  <span onClick={logout} >LOGOUT</span>
</button>
  
</div>   
</>
  );
}
export default Home;