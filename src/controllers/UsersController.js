const { hash } = require("bcryptjs");

const AppError = require("../utils/AppError");
const knex = require("../database/knex")

class usersController {
  async create(request, response) {
    const { name, email, password } = request.body;
    
    
     const userExists = await knex("users").where('email', email).first();


    if (userExists) {
      throw new AppError("Esse email já está em uso");
    }

    const hashedPassword = await hash(password, 8);

    await knex("users").insert({
      name,
      email,
      password: hashedPassword
    });

    return response.json( 'deu tudo ok');
  }
}


module.exports = usersController;