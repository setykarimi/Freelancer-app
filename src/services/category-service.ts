import http from "./http-service";

export function getCategoryApi(): Promise<any> {
  return http
    .get(`/category/list`)
    .then(({ data }) => data.data)
    .catch((error) => {
      return Promise.reject(error);
    });
}
