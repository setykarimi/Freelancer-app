import http from "./http-service";

export function getOwnerProjectsApi() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function removeProjectApi(id: string): Promise<any>{
  return http.delete(`/project/${id}`).then(({ data }) => {
    return data.data
  }).catch((error)=> {    
    return Promise.reject(error);
  })
}