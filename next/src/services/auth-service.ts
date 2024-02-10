import http from "./http-service";

export function getUser() {
    return http.get("/user/profile").then(({ data }) => data.data);
  }