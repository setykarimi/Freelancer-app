import http from "./http-service";

export function getCategoryApi(): Promise<any> {
  return http
    .get(`/category/list`)
    .then(({ data }) => data.data)
    .catch((error) => {
      return Promise.reject(error);
    });
}

export function createCategoryApi(data: any): Promise<any> {
  return http
    .post(`/admin/category/add`, data)
    .then(({ data }) => data.data)
    .catch((error) => {
      return Promise.reject(error);
    });
}
