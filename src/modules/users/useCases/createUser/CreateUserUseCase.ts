import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailAlreadySigned = this.usersRepository.findByEmail(email);

    if (emailAlreadySigned) throw new Error("E-mail is already taken!");

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
