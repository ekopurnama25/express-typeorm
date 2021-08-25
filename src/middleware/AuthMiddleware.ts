import jwt from "jsonwebtoken";
import { Response, Request, NextFunction } from 'express';
// import { getRepository } from 'typeorm';
// import { Users } from '../entities/UserEntities'

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const token = req.headers["authorization"];

        if (!token) {
          throw new Error("not authenticated");
        }
        const authtoken = token.split(" ")[1];
        
        if(token){
            const user = jwt.verify(authtoken, process.env.ACCESS_TOKEN_SECRET!);
            console.log(user);
            return user;
        }else{
            return res.status(400).json({
                "errors": [
                    {
                        "msg": "Token invalid",
                    }
                ]
            })
        }

        return next();

    }catch(error){
        return res.status(401).json({
            status: false, 
            message: "Your session is not valid.", 
            data: error
        });
    }
}

// export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {

//     const validAdmin = await getRepository(Users)
//     .createQueryBuilder('users')
//     .leftJoinAndSelect("users.roles", "roles")
//     .leftJoinAndSelect("users.token", "token")
//     .where('users.id_users = :id_users', { id_users: req.id_users })
//     .getOne();  

//     if (validAdmin){

//     }
//}

module.exports = {
    verifyToken,
}