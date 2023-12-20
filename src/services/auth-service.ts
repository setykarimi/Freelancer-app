import http from "./http-service";

export function getOtp(data:any) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export function checkOtp(data:any) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}
