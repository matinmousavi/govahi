import axios from "axios";

const GET_NATIONAL_ID =
  "https://govahi-api.iran.liara.run/api_v/search_national_id/";

const GET_CERTIFICATES = "https://govahi-api.iran.liara.run/api_v/Get_file";

export const getNationalId = async () => {
  return await axios
    .get(GET_NATIONAL_ID)
    .then((response) => response.data)
    .catch((err) => err.message);
};
export const getCertificates = async () => {
  return await axios
    .get(GET_CERTIFICATES)
    .then((response) => response.data)
    .catch((err) => err.message);
};
