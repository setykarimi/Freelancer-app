import http from "./http-service";

export function getOwnerProjectsApi() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function removeProjectAPi(id: string): Promise<any>{
  return http.get(`/project/${id}`).then(({ data }) => {
    console.log("data", data);
    return data.data
    
  }).catch((error)=> {
    console.log("error", error);
    
    return Promise.reject(error);
  })
}