import { AuthenticationContext } from "@/app/context/authContext";
import axios from "axios";
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
    const signUp = async ()=>{
        
    }
    return{
        signIn, 
        signUp
    }


}

export default useAuth 


//Credentials for Login
//email - example1@example.com
// pw- subBitches123@
