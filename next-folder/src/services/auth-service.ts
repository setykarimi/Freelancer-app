import http from "./http-service";

export function getUser() {
  return http.get("/user/profile").then(({ data }) => data.data);
}

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
