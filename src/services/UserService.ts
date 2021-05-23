import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository);
        // Verifica se usuário existe

        const userExists = await usersRepository.findOne({
            email,
        });
        
        // Se existir, retorna user
        if(userExists) {
            return userExists;
        }

        const user = usersRepository.create({
            email,
        });
        
        await usersRepository.save(user);

        // Se não existir, salvar no DB
        return user;
    }
}

export { UsersService };