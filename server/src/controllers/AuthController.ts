import type { Request, Response } from "express";
import prisma from "../config/db.config.js";
import jwt from "jsonwebtoken";

interface LoginPayloadType{
    name:string;
    email:string;
    providerId:string;
    oauth_id:string;
    image?:string;
}

class AuthController {
    // Controller methods here
    static async login(request: Request, response: Response) {
        try{
            const body: LoginPayloadType = request.body;
            let findUser = await prisma.user.findUnique({
                where: { 
                    email: body.email
                 },
            });

            if(!findUser){
                findUser= await prisma.user.create({
                    data:body
                });
            }

            let JWTPayload = {
                id: findUser.id,
                name: findUser.name,
                email: findUser.email
            };

            const token = jwt.sign(JWTPayload, process.env.JWT_SECRET || "", {
                expiresIn: "365d",
            });

            return response.json({
                message:'Logged in Successfully',
                user:{
                    ...findUser,
                    token: `Bearer ${token}`
                }
            })
        }catch(error){
            return response.status(500).json({
                message:'Something went wrong, please try again later.'
            });
        }

    }
}

export default AuthController;