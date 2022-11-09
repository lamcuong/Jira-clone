import { baseService } from "./baseServices";

export class TaskTypeService extends baseService {
    constructor() {
        super();
    }

    getTaskType = () => {
        return this.get(`TaskType/getAll`)
    }

}

export const taskTypeService = new TaskTypeService();