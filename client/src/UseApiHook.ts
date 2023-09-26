import axios from "axios";
import { useMemo } from "react";
import { Kit } from "./Kit";

export function useApiHook() {
  return useMemo(
    () => ({
      getKitsFiltered: (label_id: string): Promise<ReadonlyArray<Kit>> =>
        axios
          .get(`${BASE_URL}/api/kits/filter?label_id=${label_id}`)
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            console.error("Error fetching kit data:", error);
          }),
    }),
    []
  );
}

const BASE_URL = "http://localhost:3000";
