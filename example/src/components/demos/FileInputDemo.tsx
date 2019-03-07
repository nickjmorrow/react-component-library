import * as React from "react";
import { useState } from "react";
import { FileInput } from "react-component-library";
import styled from "styled-components";

export const FileInputDemo: React.SFC = () => {
  const setFile = useState(null as FileList | null)[1];
  return (
    <Wrapper>
      <FileInput onChange={setFile} isLoading={false} />
      <FileInput onChange={setFile} colorVariant={"accent"} />
      <FileInput
        onChange={setFile}
        styleVariant="secondary"
        textColorVariant="core"
        colorVariant="core"
      />
      <FileInput
        onChange={setFile}
        styleVariant="secondary"
        textColorVariant="accent"
        colorVariant="accent"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 16px;
`;
