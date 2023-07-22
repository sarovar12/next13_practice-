import {NextApiRequest, NextApiResponse} from "next";
import  validator  from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
export default async function Handler
(req:NextApiRequest
,res:NextApiResponse
) {
    if(req.method === "POST"){
        const {firstName,lastName,email, phone, city,password} = req.body;
        const errors:string[]=[];
        const validationSchema =[
            {
                valid:validator.isLength(firstName,{
                    min:1,
                    max:20
                }),
                errorMessage:"First Name is Invalid"
            },
            {
                valid:validator.isLength(lastName,{
                    min:1,
                    max:20
                }),
                errorMessage:"Last Name is invalid"
            },
            {
                valid:validator.isEmail(email),
                errorMessage:"Email is invalid"
            },
            {
                valid:validator.isMobilePhone(phone),
                errorMessage:"Phone number is Invalid"
            },
            {
                valid:validator.isLength(city,{
                    min:1,
                }),
                errorMessage:"First Name is Invalid"
            },
            {
                valid:validator.isStrongPassword(password),
                errorMessage:"Password is Not Strong Enough Recommend at least 1 Uppercase, 1 Lowercase,1 digit and 1 symbol"
            }
        ]
        validationSchema.forEach((check)=>{
            if(!check.valid){
                errors.push(check.errorMessage)
            }
        })
        if(errors.length){
            return res.status(400).json({
                errorMessage:errors[0]
            })
        }
        const userWithEmail = await prisma.user.findUnique({
            where: {
              email,
            },
          });
        if(userWithEmail){
            return res.status(400).json({
                errorMessage:"Email is associated with another account"
            })
        }
        const hashedPassword = await bcrypt.hash(password,10)




        res.status(200).json({
            hello:hashedPassword, 
        }) 
    }

}