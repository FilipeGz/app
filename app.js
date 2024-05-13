// Modelo (Model)
class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }
  
  // Controlador (Controller)
  class UserController {
    constructor() {
      this.users = [];
    }
  
    addUser(name, email) {
      const newUser = new User(name, email);
      this.users.push(newUser);
      return newUser;
    }
  
    getUsers() {
      return this.users;
    }
  }
  
  // Visualização (View)
  class UserView {
    showUsers(users) {
      users.forEach(user => {
        console.log(`Name: ${user.name}, Email: ${user.email}`);
      });
    }
  }
  
  // Camada de Serviço (Service Layer)
  class UserService {
    getUsersFromExternalService() {
      // Simula a obtenção de usuários de um serviço externo
      return [
        { name: 'Alice', email: 'alice@example.com' },
        { name: 'Bob', email: 'bob@example.com' }
      ];
    }
  }
  
  // Implementação do serviço REST
  const express = require('express');
  const app = express();
  const userService = new UserService();
  
  app.get('/users', (req, res) => {
    const users = userService.getUsersFromExternalService();
    res.json(users);
  });
  
  const PORT = process.env.PORT || 3000; // Define a porta para o servidor
  
  app.listen(PORT, () => {
    console.log(`Servidor REST rodando na porta ${PORT}`);
  });
  
  // Utilização dos componentes em um aplicativo
  const userController = new UserController();
  const userView = new UserView();
  
  userController.addUser('John', 'john@example.com');
  userController.addUser('Doe', 'doe@example.com');
  
  const users = userController.getUsers();
  userView.showUsers(users);
  