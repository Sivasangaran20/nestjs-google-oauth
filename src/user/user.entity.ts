import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class UserDTO {
  email: string;
  displayName: string;
}
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: true })
  displayName: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdOn: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedOn: Date;
}
