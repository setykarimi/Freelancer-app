import http from "./http-service";

export function changeProposalStatusApi({id,postData}: any): Promise<any> {
    console.log(postData);
    
    return http
      .patch(`/proposal/${id}`, postData)
      .then(({ data }) => data.data)
      .catch((error) => Promise.reject(error));
  }