import http from "./http-service";

interface getOtpDataType {
  phoneNumber: string;
}

export function getOtp(data: getOtpDataType): Promise<any> {
  return http
    .post("/user/get-otp", data)
    .then(({ data }) => data.data)
    .catch((error) => {
      return Promise.reject(error);
    });
}

interface checkOtpDataType {
  phoneNumber: string;
  otp: string;
}

export function checkOtp(data: checkOtpDataType): Promise<any> {
  return http
    .post("/user/check-otp", data)
    .then(({ data }) => data.data)
    .catch((error) => {
      return Promise.reject(error);
    });
}

export function completeProfile(data: any) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export function getUser() {
  return http.get("/user/profile").then(({ data }) => data.data);
}

export function logoutApi() {
  return http.post("/user/logout").then(({ data }) => data.data);
}

export function getUsersApi() {
  return http.get("/admin/user/list").then(({ data }) => data.data);
}

export function changeUserStatusApi({ userId, postData }: any) {
  return http
    .patch(`/admin/user/verify/${userId}`, postData)
    .then(({ data }) => data.data);
}
