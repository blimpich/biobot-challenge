import React, { useCallback, useMemo, useState } from "react";
import { TextField } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { Kit } from "./Kit";
import { useApiHook } from "./UseApiHook";
import debounce from "lodash/debounce";

export function KitSearch({ setKit }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [kits, setKits] = useState<ReadonlyArray<Kit>>([]);
  const { getKitsFiltered } = useApiHook();
  const options = useMemo(() => kits.map((kit: Kit) => kit.label_id), [kits]);

  const handleInputChange = useCallback(
    (event: React.SyntheticEvent<Element, Event>, newInputValue: string) => {
      setInputValue(newInputValue);

      debounce(async (newInputValue: string) => {
        if (newInputValue !== "") {
          const data = await getKitsFiltered(newInputValue);
          setKits(data);
        }
      }, 400)(newInputValue);
    },
    [getKitsFiltered]
  );

  return (
    <Autocomplete
      id="kit-search"
      options={options}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      onChange={(e, value) => {
        setKit(kits.filter((kit) => kit.label_id === value)[0]);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Kit ID Search"
          variant="outlined"
          fullWidth
        />
      )}
    />
  );
}

interface Props {
  setKit: React.Dispatch<React.SetStateAction<Kit | undefined>>;
}
