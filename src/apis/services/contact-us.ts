import axios from "axios";

export const SendContact = async (obj: any) => {
  const apiUrl = import.meta.env.VITE_PUBLIC_API_URL + "/api/sendcontact";
  const response = await axios.post(apiUrl, obj)
  return response.data;
}