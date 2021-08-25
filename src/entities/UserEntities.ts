import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from "typeorm";
import { Roles } from "./RolesEntities";
import { Token } from "./TokenEntities";

@Entity()
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id_users: string;

  @Column({type: 'varchar', length: 50, unique: true})
  username: string;

  @Column({type: 'varchar', length: 50, unique: true})
  email: string;

  @Column({type: 'varchar', length: 300})
  password: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  create_users: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  update_users: Date;

  @OneToOne(() => Token, token => token.users) 
  token: Token;

  @OneToOne(() => Roles, roles => roles.users) 
  roles: Roles;
}