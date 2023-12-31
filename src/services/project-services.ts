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
