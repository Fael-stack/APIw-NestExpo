import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity('pessoas')// nome da tabela no banco de dados
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome: string;
    @Column()
    email: string;
}