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

export function removeCategoryApi(id: any): Promise<any> {
  return http
    .delete(`/admin/category/remove/${id}`)
    .then(({ data }) => data.data)
    .catch((error) => {
      return Promise.reject(error);
    });
}


export function editCategoryApi({id, data}: any): Promise<any> {
  return http
    .patch(`/admin/category/update/${id}`, data)
    .then(({ data }) => data.data)
    .catch((error) => {
      return Promise.reject(error);
    });
}

