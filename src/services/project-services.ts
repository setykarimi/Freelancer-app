import http from "./http-service";

export function getOwnerProjectsApi() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function removeProjectApi(id: string): Promise<any> {
  return http
    .delete(`/project/${id}`)
    .then(({ data }) => data.data)
    .catch((error) => Promise.reject(error));
}

export function createProjectApi(postData: any): Promise<any> {
  return http
    .post(`/project/add`, postData)
    .then(({ data }) => data.data)
    .catch((error) => Promise.reject(error));
}

export function editProjectApi({ id, postData }: any): Promise<any> {
  return http
    .patch(`/project/update/${id}`, postData)
    .then(({ data }) => data.data)
    .catch((error) => Promise.reject(error));
}

export function toggleProjectStatusApi({ id, postData }: any): Promise<any> {
  return http
    .patch(`/project/${id}`, postData)
    .then(({ data }) => data.data)
    .catch((error) => Promise.reject(error));
}

export function getProjectApi(id:string | undefined): Promise<any> {
  return http
    .get(`/project/${id}`)
    .then(({ data }) => data.data)
    .catch((error) => Promise.reject(error));
}


export function getProjectsApi() {
  return http.get("/project/list").then(({ data }) => data.data);
}