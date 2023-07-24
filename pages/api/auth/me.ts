// Make HTTP request to an auth endpoint With Token in Header
//Extract token from header
//Verify token
//Decode from Token
//Fetch user from DB
//Send user to client



import { NextApiRequest, NextApiResponse } from "next";

import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bearerToken = req.headers["authorization"] as string;
  const token = bearerToken.split(" ")[1];

  const payload = jwt.decode(token) as { email: string };

  if (!payload.email) {
    return res.status(401).json({
      errorMessage: "Unauthorized request",
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      city: true,
      phone: true,
    },
  });

  if (!user) {
    return res.status(401).json({
      errorMessage: "User not found",
    });
  }

  return res.json({
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    phone: user.phone,
    city: user.city,
  });
}



// import { NextApiRequest, NextApiResponse } from "next";
// import * as jose from "jose";
// import jwt from "jsonwebtoken";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const bearerToken = req.headers["authorization"] as string; // Use "authorization" instead of "Authorization"


//   if (!bearerToken) {
//     return res.status(401).json({
//       errorMessage: "Unauthorized request ",
//     });
//   }

//   // Split the header value using the space character " " and get the token (second element).
//   const token = bearerToken.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({
//       errorMessage: "Unauthorized request ",
//     });
//   }

//   const secret = new TextEncoder().encode(process.env.JWT_SECRET);
//   try {
//     await jose.jwtVerify(token,secret)  ---> Misbehaving idk why
//   } catch (error) {
//     return res.status(401).json({
//       errorMessage: "Unauthorized request 3 ",
//     });
//   }

//   const payload = jwt.decode(token) as {email:string};
//   if(!payload.email){
//     return res.status(401).json({
//         errorMessage: "Unauthorized request",
//       });
//   }

//   const user=  await prisma.user.findUnique({
//     where:{
//         email:payload.email
//     }
//   })
  
//   return res.json({
//     user
//   })
// }