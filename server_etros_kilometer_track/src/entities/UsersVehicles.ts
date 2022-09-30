import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users_vehicles')
export class UsersVehicles {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  vehicle_id: string;

  @Column()
  current_kilometers: number;

  @CreateDateColumn()
  created_at: Date
}
