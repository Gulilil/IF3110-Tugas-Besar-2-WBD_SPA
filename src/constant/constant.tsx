export const REST_URL = "http://localhost:3000/api"

export function delay(time : number){
  return new Promise (resolve => setTimeout(resolve, time));
} 