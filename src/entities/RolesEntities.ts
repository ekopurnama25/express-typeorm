import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn
  } from "typeorm";

  
import { Users } from "./UserEntities";
  
  @Entity()
  export class Roles {
  
    @PrimaryGeneratedColumn("uuid")
    id_roles: string;

    @Column({type: 'varchar'})
    id_users: string;

    @Column({type: 'varchar', length: 50})
    roles: string;

    @Column({type: 'varchar', length: 15})
    status: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    create_roles: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_roles: Date;

    @OneToOne(() => Users, users => users.roles)
    @JoinColumn({name: "id_users"})
    users: Users;
  }