import { baseService } from "./baseServices";

export class StatusService extends baseService {
    constructor() {
        super();
    }

    getAllStatus = () => {
        return this.get(`Status/getAll`)
    }

}

export const statusService = new StatusService();