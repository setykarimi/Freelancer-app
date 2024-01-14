import http from "./http-service";

export function changeProposalStatusApi({ id, postData }: any): Promise<any> {
  return http
    .patch(`/proposal/${id}`, postData)
    .then(({ data }) => data.data)
    .catch((error) => Promise.reject(error));
}

export function getProposalsApi(): Promise<any> {
  return http
    .get(`/proposal/list`)
    .then(({ data }) => data.data)
    .catch((error) => Promise.reject(error));
}
