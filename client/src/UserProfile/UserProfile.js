import React,{useState} from 'react';

import axios from 'axios';
import './UserProfile.css';
import fire from '../Authorization/auth';

const UserProfile = () => {

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [male,setMale] = useState("");
    const [female,setFemale] = useState("");
    const [pic,setPic] = useState("");
    const [uid,setUid] = useState("");

    fire.auth().onAuthStateChanged( user => {
        setUid(user.providerData[0].uid)
    } )

    const picHandler= (e) => {
        const uploadpic = new FileReader();
         uploadpic.readAsDataURL(e.target.files[0]);
         uploadpic.onloadend = () => {
          setPic(uploadpic.result)
         };
    };

    const checkgender = () => {
        if( male === "" ){
            return "female";
        }
        else
        {
            return "male";
        }
    }

    const submitHandler = (e) => {
       e.preventDefault();
       let gender = checkgender();
       axios.post('http://localhost:8000/api/insert/posts',{firstName,lastName,gender,pic,uid});
    };


    return (
    
        <div className="profile-container">
            <div className="img-container">
              <img src="https://source.unsplash.com/random" alt="profile"/>
            </div>
            <div className="profile-container__content">
               <form onSubmit={submitHandler}>
                   <div>
                      <label>FirstName :</label>
                      <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                      &nbsp; <i className="fa fa-edit"></i>
                   </div>
                  
                   <div>
                     <label>LastName : </label>
                     <input type="text" onChange={(e) => setLastName(e.target.value)}/>
                     &nbsp; <i className="fa fa-edit"></i>
                   </div>

                   <div>
                      Gender :
                     <input type="radio" value="Male" name="gender" 
                     onChange={
                            (e) => {
                             setMale(e.target.value)
                             setFemale("") 
                            }}/>
                     <label>&nbsp; Male</label>

                     <input type="radio" value="Female" name="gender" onChange={(e) => {
                        setFemale(e.target.value)
                        setMale("")
                     }
                        }/>
                     <label>&nbsp; Female</label>
                   </div>

                   <div>
                       <label>Update Photo :</label>
                       <input type="file" onChange={picHandler}/>
                   </div>

                   <div>
                       <button>save info</button>
                   </div>

               </form>
            </div>
        </div>
    );
};

export default UserProfile;
