import { Users } from "../entities/UserEntities";
import { Roles } from "../entities/RolesEntities";

import { Token } from "../entities/TokenEntities";
import { createConnection } from "typeorm";

const typeorm = async () => {
    const connections = await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        password: "root",
        username: "postgres",
        database: "sosmed",
        entities: [Users, Roles,Token],
        synchronize: true
    })
        if(connections){
            console.log("Database is Connections");
        } else{
            console.log("Database Not Connection" );
        }
    }

typeorm();
