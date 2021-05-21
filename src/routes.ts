import { request, Router } from "express";
import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

routes.post("/settings", (request, response) => {
    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
        chat,
        username
    })

    await settingsRepository.save(settings);

})

export { routes };