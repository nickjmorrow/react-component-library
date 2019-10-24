import * as React from "react";
import { useState } from "react";
import { FileInput, Typography } from "@nickjmorrow/react-component-library";
import styled from "styled-components";
import { DisplayPaper } from "../DisplayPaper";

export const FileInputDemo: React.SFC = () => {
  const setFile = useState<FileList | null>(null)[1];
  return (
    <Wrapper>
      <Typography styleVariant={"h1"}>File Input</Typography>
      <div>
        <Typography styleVariant={"h2"}>Core</Typography>
        <DisplayPaper>
          <FileInput onChange={setFile} isLoading={false} />
          <FileInput
            onChange={setFile}
            styleVariant={2}
            textColorVariant="core"
            colorVariant="core"
          />
          <FileInput
            onChange={setFile}
            styleVariant={3}
            textColorVariant="core"
            colorVariant="core"
          />
        </DisplayPaper>
      </div>
      <div>
        <Typography styleVariant={"h2"}>Accent</Typography>
        <DisplayPaper>
          <FileInput onChange={setFile} colorVariant={"accent"} />
          <FileInput
            onChange={setFile}
            styleVariant={2}
            textColorVariant="accent"
            colorVariant="accent"
          />
          <FileInput
            onChange={setFile}
            styleVariant={3}
            textColorVariant="accent"
            colorVariant="accent"
          />
        </DisplayPaper>
      </div>
      <div>
        <Typography styleVariant={"h2"}>Upload Label</Typography>
        <DisplayPaper>
          <FileInput
            id={"uploadable"}
            onChange={setFile}
            styleVariant={1}
            labelOnUpload={"Uploaded!"}
          />
        </DisplayPaper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 16px;
`;
