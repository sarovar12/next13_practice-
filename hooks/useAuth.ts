import { AuthenticationContext } from "@/app/context/authContext";
import axios from "axios";
import { deleteCookie, removeCookies } from "cookies-next";
import { cookies } from "next/dist/client/components/headers";
import { useContext } from "react";


const useAuth =()=>{
    const {data,error,loading,setAuthState } = useContext(AuthenticationContext)
    const signIn = async ({
        email,password
    }:{email:string;
        password:string;
    }, handleClose:()=>void)=>{
        setAuthState({
            data:null,
            error:null,
            loading:true,
        });
        
        try {
          const response =  await axios.post("http://localhost:3000/api/auth/signin",{
                email,
                password
            })
            setAuthState({
                data:response.data,
                error:null,
                loading:false,
            });
            handleClose();
        } catch (error:any ) {
            // console.log(error.response.data.errorMessage)
            setAuthState({
                data:null,
                error:error.response.data.errorMessage,
                loading:false,
            })
        }
    }
    const signUp = async ({
        email,
        password,
        firstName,
        lastName,
        city,
        phone,
    }:{email:string;
        password:string;
        firstName:string;
        lastName:string;
        phone:string;
        city:string;
    }, handleClose:()=>void)=>{
        try {
            const response =  await axios.post("http://localhost:3000/api/auth/signup",{
                  email,
                  password,
                  firstName,
                  lastName,
                  phone,
                  city
 
              })
              setAuthState({
                  data:response.data,
                  error:null,
                  loading:false,
              });
              handleClose();
          } catch (error:any ) {
              // console.log(error.response.data.errorMessage)
              setAuthState({
                  data:null,
                  error:error.response.data.errorMessage,
                  loading:false,
              })
          }        

    };

    const signOut =()=>{
        deleteCookie("jwt")  //removeCookie is deprecated
        setAuthState({
            data:null,
            error:null,
            loading:false,
        })
    }

    return{
        signIn, 
        signUp,
        signOut

    }


}

export default useAuth 


//Credentials for Login
//email - example1@example.com
// pw- subBitches123@
