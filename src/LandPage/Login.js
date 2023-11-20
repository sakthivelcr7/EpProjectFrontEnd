import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const nav = useNavigate();
  let userId = useRef();
  let userPass = useRef();
  const [selectedOption, setSelectedOption] = useState('user');
  const [userData, setUserData] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const loginUser = () => {
    let uid = userId.current.value;
    let upass = userPass.current.value;

    axios.get("http://localhost:3000/employee").then((res) => {
      setUserData(res.data);
      const data = userData.filter((val) => val.name === uid && val.pass === upass);

      if (selectedOption === 'admin' && uid !== 'admin') {
        window.alert("Invalid credentials for admin");
        return;
      }

      if (selectedOption === 'user' && uid === 'admin') {
        window.alert("Invalid credentials for user");
        return;
      }

      const path = selectedOption === 'admin' ? '/admindash' : '/userdash';

      if (data.length > 0) {
        if(path==='/admindash'){
          sessionStorage.setItem("user", uid);
          nav(path);
        }
        else if(path==='/userdash'){
          sessionStorage.setItem("user", uid);
          nav(path);
        }
        
      } else {
        window.alert("Wrong Credential");
        userId.current.value = "";
        userPass.current.value = "";
      }
    }).catch((err) => {
      console.error("Error fetching data:", err);
    });
  };

  return (
    <div>
                  
      <div className='vh-100'>
      <h1 className='text-align-center text-white'>Login</h1>
            <div className='w-200 border bg-white shadow px-5 pt-3 pb-5 rounded' style={{height:'350px', paddingTop:'100px'}}>

           <form className=' justify-content-center align-items-center vh-80'>
           <input
                type="radio"
                id="userRadio"
                name="userType"
                value="user"
                checked={selectedOption === 'user'}
                onChange={handleOptionChange}
            />
            <label htmlFor="userRadio" style={{marginRight:'40px'}}><strong>User</strong></label>
            
           

            <input
                type="radio"
                id="adminRadio"
                name="userType"
                value="admin"
                checked={selectedOption === 'admin'}
                onChange={handleOptionChange}
            />
            <label htmlFor="adminRadio" ><strong>Admin</strong></label>
            <br/>
            <br/>
            <label><strong>Enter User Id</strong></label>
            <input type='text' name='userid' ref={userId} className='form-control mb-4' />
            <label><strong>Enter User password</strong></label>
            <input type='password' name='userpass' ref={userPass} className='form-control' />
            <button type='button' className='btn btn-success mt-2' onClick={loginUser}>Login</button>
           </form>
           </div> 
           </div>
    </div>
  );
};

export default Login;









// import React, { useRef, useState } from 'react'

// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const nav = useNavigate();
//     let userId = useRef();
//     let userPass = useRef();
//     const [userData,setUserData] = useState([]);
//     let path = '';


//     const [selectedOption, setSelectedOption] = useState('user');
//     const handleOptionChange = (event) => {
//         setSelectedOption(event.target.value);
//       };


//     // if(selectedOption==='admin' ){
//     //     path = '/admin'
//     // }
//     // else{
//     //     path='/dashboard'
//     // }

//     const loginUser = () => {
//         let uid = userId.current.value;
//         let upass = userPass.current.value;
      
//         axios.get("http://localhost:3000/employee").then((res) => {
//           setUserData(res.data);
//           const data = userData.filter((val) => val.name === uid && val.pass === upass);
      
//           if (selectedOption === 'admin' && uid !== 'admin') {
//             // Admin option selected, but user credentials entered
//             window.alert("Invalid credentials for admin");
//             return;
//           }
      
//           if (selectedOption === 'user' && uid === 'admin') {
//             // User option selected, but admin credentials entered
//             window.alert("Invalid credentials for user");
//             return;
//           }
      
//           const path = selectedOption === 'admin' ? '/admin' : '/userdash';
      
//           if (data.length > 0) {
//             sessionStorage.setItem("user", uid);
//             nav(path);
//           } else {
//             window.alert("Wrong Credential");
//             userId.current.value = "";
//             userPass.current.value = "";
//           }
//         }).catch((err) => {});
//       };
      

      
      

//     return (
//         <div>
//             <h1>Login</h1>
          //   <div className='vh-100'>
          //   <div className='w-200 border bg-white shadow px-5 pt-3 pb-5 rounded' style={{height:'350px', paddingTop:'100px'}}>
          //  <form className=' justify-content-center align-items-center vh-80'>
          //  <input
          //       type="radio"
          //       id="userRadio"
          //       name="userType"
          //       value="user"
          //       checked={selectedOption === 'user'}
          //       onChange={handleOptionChange}
          //   />
          //   <label htmlFor="userRadio" style={{marginRight:'40px'}}><strong>User</strong></label>
            
           

          //   <input
          //       type="radio"
          //       id="adminRadio"
          //       name="userType"
          //       value="admin"
          //       checked={selectedOption === 'admin'}
          //       onChange={handleOptionChange}
          //   />
          //   <label htmlFor="adminRadio" ><strong>Admin</strong></label>
          //   <br/>
          //   <br/>
          //   <label><strong>Enter User Id</strong></label>
          //   <input type='text' name='userid' ref={userId} className='form-control mb-4' />
          //   <label><strong>Enter User password</strong></label>
          //   <input type='text' name='userpass' ref={userPass} className='form-control' />
          //   <button type='button' className='btn btn-success mt-2' onClick={loginUser}>Login</button>
          //  </form>
          //  </div> 
          //  </div>

//         </div>
//     )
// }

// export default Login


