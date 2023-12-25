import http from "./http-service";

export function getOtp(data:any) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data).catch((err)=>{
    console.log(err);
    
    return err
  });
}

export function checkOtp(data:any) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export function completeProfile(data:any) {
  return http.post("/user/complete-profile", data).then(({ data }) => data.data);
}

export function getUser() {
  return http.post("/user/profile").then(({ data }) => data.data);
}