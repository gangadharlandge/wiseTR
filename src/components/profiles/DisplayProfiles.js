import React, {useState,useEffect} from 'react';
import { MdFavoriteBorder, MdFavorite, MdCreate, MdDelete, MdLanguage,MdPhoneEnabled, } from "react-icons/md";
import {FaRegEnvelope} from 'react-icons/fa'
import './DisplayProfiles.css'
  function DisplayProfiles () {
    const [users, setUsers] = useState([]);

    function toggle(index){
        console.log(index)
        setUsers([...users, users[index].site_admin = !users[index].site_admin])

    }

    function handleDelete(index){
        setUsers(users.filter((user)=>{
            return users[index] !== user
        }))
        
        console.log(users.length)
    }

    useEffect(()=>{
        fetch('http://api.github.com/users')
        .then(res => res.json())
        .then((data)=>{
            console.log(data);
            setUsers(data);
        })
        .catch(() => {})
        
    },[])
    
  return (
    <div className='card'>
        {users.map((user,index) => {
            return(
                <div key={index} className = 'card-item'>
            
            <div className='img-box'>
        
                <img src={user.avatar_url} alt="" height={150} width={150}/>
            </div>
            
            <div className='name-box'>
                <p> <strong>{user.login} </strong><br />
                <MdLanguage/>&nbsp;&nbsp; abc@org.in <br />
                <MdPhoneEnabled/>&nbsp;&nbsp; 123 999 3456 <br />
                <FaRegEnvelope/> &nbsp;&nbsp; xyz@gmail.com
                </p>
            </div>
            <div className="footer-icons">
                <span onClick={() => {toggle(index)}}>{user.site_admin? <MdFavorite/>:<MdFavoriteBorder/>}</span>
                <span><MdCreate/></span>
                <span onClick={() => {handleDelete(index)}}><MdDelete/></span>
            </div>
            
            </div>
            
            )
        })}
    </div>
  )
}

export default DisplayProfiles