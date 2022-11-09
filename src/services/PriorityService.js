import { baseService } from "./baseServices";

export class PriorityService extends baseService {
    constructor() {
        super();
    }

    getPriority = () => {
        return this.get(`Priority/getAll`)
    }

}

export const priorityService = new PriorityService();