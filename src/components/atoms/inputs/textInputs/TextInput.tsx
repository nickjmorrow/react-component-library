import * as React from "react";
import { StyledInput } from "./StyledInput";
import { TextInputProps } from "./types";
import { Trie } from "@nickjmorrow/algorithms";
import { StyledOptionList } from "~/components/molecules";
import { Option } from "~/components/molecules/select/Option";
import { useThemeContext } from "~/styleConstants";

export const TextInput: React.SFC<TextInputProps> = ({
  onChange: handleChange,
  value,
  placeholder,
  errors,
  style,
  possibleValues,
  numEligibleValues = 3
}) => {
  const [showMenu, setShowMenu] = React.useState(true);
  const handleChangeInternal = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.currentTarget.value);
    if (!showMenu) {
      setShowMenu(true);
    }
  }
    

  const [trie] = React.useState(new Trie(possibleValues));
  const eligibleWords = trie.getEligibleWords(value);

  console.log(eligibleWords);
  const shouldShowEligibleWords = value.length > 0;
  

  const { spacing } = useThemeContext();

  return (
    <div
      style={{
        height: "min-content",
        display: "flex",
        flexDirection: "column",
        position: "relative"
      }}>
      <StyledInput
        value={value}
        onChange={handleChangeInternal}
        type={"text"}
        errors={errors}
        placeholder={placeholder}
        style={style}
      />
      {shouldShowEligibleWords && showMenu && (
        <StyledOptionList style={{ top: "53px", minWidth: spacing.ss48 }}>
          {eligibleWords
            .filter((e, i) => i < numEligibleValues)
            .map(ew => (
              <Option
                option={{ value: ew, label: ew }}
                onClick={() => {
                  handleChange(ew);
                  setShowMenu(false);
                }}
              />
            ))}
        </StyledOptionList>
      )}
    </div>
  );
};
