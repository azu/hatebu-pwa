import { UseCase } from "almin";
import { createSwitchCurrentHatebuUserUseCase } from "./SwitchCurrentHatebuUserUseCase";
import { HatebuRepository, hatebuRepository } from "../infra/repository/HatebuRepository";
import { AppSessionRepository, appSessionRepository } from "../infra/repository/AppSessionRepository";

const debug = require("debug")("hatebupwa");

export const createRestoreLastSessionUseCase = () => {
    return new RestoreLastSessionUseCase({
        hatebuRepository,
        appSessionRepository
    });
};

export class RestoreLastSessionUseCase extends UseCase {
    constructor(private repo: { hatebuRepository: HatebuRepository; appSessionRepository: AppSessionRepository }) {
        super();
    }

    async execute() {
        const lastSession = this.repo.appSessionRepository.get();
        debug("last session: %o", lastSession);
        if (!lastSession) {
            return;
        }
        if (!lastSession.props.hatebuId) {
            return;
        }
        const hatebu = this.repo.hatebuRepository.findByUserName(lastSession.props.hatebuId.toValue());
        if (!hatebu) {
            return;
        }
        debug("last hatebu: %s", hatebu.name);
        await this.context.useCase(createSwitchCurrentHatebuUserUseCase()).execute(hatebu.name);
    }
}
