import { useQuery } from "react-query";
import { getCertificates, getNationalId } from "./api";

export const useNationalId = () => {
  return useQuery("user-nagtional-id", getNationalId);
};
export const useCertificate = () => {
  return useQuery("user-certificate", getCertificates);
};
