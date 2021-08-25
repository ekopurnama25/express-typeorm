import "dotenv/config";
import { Response, Request } from 'express';
import argon2 from "argon2";
import { getRepository } from 'typeorm';
import { Users } from '../entities/UserEntities';
import { Token } from '../entities/TokenEntities';
import { createRefreshToken, createAccessToken } from "../Auth";

class AuthServices {

    static loginUsers = async (req: Request, res: Response) => {
        const user = new Users()

        user.email = req.body.email
        user.password = req.body.password

        const CheckUser = getRepository(Users);
        const validUSers = await CheckUser.findOne({ where:
            { email: user.email }
        });

        if(!user){
            res.status(501).json({
                message: "Email and Password cannot be empty" 
            });
        }else if(!user.email){
            res.status(501).json({
                message: "Email cannot be empty" 
            });
        }else if(!user.password){
            res.status(501).json({ 
                message: "Password cannot be empty" 
            });
        }else{
            if(validUSers){
                const validPassword = await argon2.verify(validUSers.password, user.password);
                if(validPassword){
                        const ChecToken = getRepository(Token);
                        const tokenUser = await ChecToken.findOne({ where:
                            { id_users: validUSers.id_users }});
                        if(!tokenUser?.token){
                            await getRepository(Token).save({
                                id_users: validUSers.id_users,
                                token: createAccessToken(user)
                            });
                        }else{
                            await ChecToken.find({where:{token: tokenUser?.token}});
                        }
                    }else{
                        res.status(505).json({ message: "Password Incorect" });
                    }
                
                    res.status(200).json({
                        accessToken: createAccessToken(validUSers),
                        refreshTOken: createRefreshToken(validUSers),
                    });
            }else{
                res.status(505).json({ message: "Email and Password Not Fount" });
            }
        }
    }

    static CheckUserData = async (req: Request, res: Response) => {
        const user = new Users()
        user.id_users = req.body.id_users
    
        const checkUSersData = await getRepository(Users)
        .createQueryBuilder('users')
        .leftJoinAndSelect("users.roles", "roles")
        .leftJoinAndSelect("users.token", "token")
        .where('users.id_users = :id_users', { id_users: user.id_users })
        .getOne();  

        if(checkUSersData){
            res.status(200).json({
                status: true,
                message: "success",
                data: {
                    data: checkUSersData
                }
            })
        }else{
            res.status(401).json({
                status: false,
                message: "Users Can't Be Found"
            })
        }
    }
}


export default AuthServices;