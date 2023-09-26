import axios from "axios";

export function useApiHook() {
  return {
    getKitsFiltered: (label_id: string) => {
      return axios
        .get(`${base_url}/api/kits/filter?label_id=${label_id}`)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.error("Error fetching autocomplete data:", error);
        });
    },
  } as const;
}

const base_url = "http://localhost:3000";
