"use client"
import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import AuthModalInput from './AuthModalInput';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
};

export default function AuthModal({isSignIn}:{isSignIn:boolean}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderContent=(signInContent:string, signUpContent:string)=>{
    return isSignIn ? signInContent: signUpContent
  }
  const [inputs, setInputs]= useState({
    firstName:"",
    lastName:"",
    phone:"",
    city:"",
    email:"",
    password :"",

  })
  const [disabled,setDisabled] = useState(true)
  useEffect(()=>{
    if(isSignIn){
      if(inputs.password && inputs.email ){
        return setDisabled(false)
      } 
    }
    else{
      if(inputs.firstName && inputs.lastName && inputs.phone && inputs.city && inputs.password && inputs.email){
        return setDisabled(false)
      }
    }
   
    setDisabled(true);
  },[inputs])
  const handleChangeInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setInputs({
      ...inputs,
      [e.target.name]:e.target.value
    })
  }
  return (
    <div>
       <button 
       onClick={handleOpen}
       className={`${renderContent("bg-blue-400 text-white","p-1 px-4")} 
        border rounded mr-3 p-1 px-4`}> 
       {renderContent("Sign In","Sign Up")}
       </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className="p-2 h-[490px]">
                <div className="uppercase font-bold text-center pb-2 border-b mb-2">
                    <div className="text-sm">
                        {renderContent("Sign In","Create Account")}
                    </div>
                </div>
                <div className=' m-auto '>
                    <h2 className='text-2xl font-light text-center'>
                        {renderContent("Log Into Your Account","Create your Open Table Account")}
                    </h2>
                    <AuthModalInput input={inputs}
                    handleChangeInput={handleChangeInput} 
                    isSignIn={isSignIn}/>
                    <button
                    disabled={disabled} 
                    className=' uppercase bg-red-600 w-full text-white p-3 rounded
                    text-sm mb-5 disabled:bg-gray-400'>
                      {
                        renderContent("Sign In","Create Account")
                      }
                    </button>
                </div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}
