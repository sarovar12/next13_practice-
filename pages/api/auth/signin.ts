import * as jose  from 'jose';
import bcrypt  from 'bcrypt';
import  validator  from 'validator';

// Validate the user Input - email and password
// Check if user has an account
// compare hashed password
//create JWT and send it to user

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
    ) {
        if(req.method === "POST"){
            const errors:string[]=[]
            const {email,password} = req.body
            const validationSchema =[
                
                {
                    valid:validator.isEmail(email),
                    errorMessage:"Email is invalid"
                },
                {
                    valid:validator.isLength(password,{
                        min:1,
                    }),
                    errorMessage:"Password is Invalid"
                }
            ]
            validationSchema.forEach((check)=>{
                if(!check.valid){
                    errors.push(check.errorMessage)
                }
            })
            if(errors.length){
                return res.status(404).json(errors)
            }
            // Check account exist

            const userWithEmail = await prisma.user.findUnique({
                where:{
                    email
                }
            });
            if(!userWithEmail){
                return res.status(401).json({
                    errorMessage:" Incorrect email or passoword "
                })
            }
            const isMatch = await bcrypt.compare(password,userWithEmail.password);
            if(!isMatch){
                return res.status(401).json({
                    errorMessage:"Incorrect email or passowrd"
                })
            }
            const alg = "HS256"
            const secret = new TextEncoder().encode(process.env.JWT_SECRET)
            const token = await new jose.SignJWT({
                email:userWithEmail.email
            }).setProtectedHeader({ alg })
            .setExpirationTime("24h")
            .sign(secret)
    
            return res.status(200).json({
                token, 
            })

        }
        return res.status(404).json("Unknown Endpoint")

}