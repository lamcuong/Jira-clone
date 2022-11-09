import { baseService } from "./baseServices";

export class ProjectService extends baseService {
    constructor() {
        super();
    }

    deleteProject = (id) => {

        return this.delete(`/Project/deleteProject?projectId=${id}`);
    }
    getProjectDetail = (projecId) => {
        return this.get(`Project/getProjectDetail?id=${projecId}`)
    }
    getAllProjectTask = () => {
        return this.get(`Project/getAllProject`);
    }

}

export const projectService = new ProjectService();