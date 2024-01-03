import http from "./http-service";

export function getOwnerProjectsApi() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function removeProjectAPi(id: string){
  return http.get(`/project/${id}`).then(({ data }) => data.data);
}