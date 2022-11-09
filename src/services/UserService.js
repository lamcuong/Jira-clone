import { baseService } from "./baseServices";

export class UserService extends baseService {
    constructor() {
        super();
    }

    getUser = (keyword) => {

        return this.get(`Users/getUser?keyword=${keyword}`);
    }
    assignUser = (userProject) => {
        return this.post(`Project/assignUserProject`, userProject)
    }
    removeUserFromProject = (userProject) => {
        return this.post(`Project/removeUserFromProject`, userProject)
    }
    getUserByProjectId = (projectId) => {
        return this.get(`Users/getUserByProjectId?idProject=${projectId}`)
    }

}

export const userService = new UserService();