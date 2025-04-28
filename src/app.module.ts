import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa o TypeORM

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Tipo de banco de dados
      host: 'localhost', // Host do MySQL
      port: 3306, // Porta do MySQL
      username: 'root', // Usuário do MySQL
      password: '', // Senha do MySQL
      database: 'meu_banco', // Nome do banco de dados
      entities: [Usuario], // Registra a entidade Usuario
      synchronize: true, // Sincroniza as entidades com o banco de dados. NÃO usar em produção
    }),
   
    UsuarioModule, // Registra a entidade no módulo
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
