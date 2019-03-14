import * as React from "react";
import { useState } from "react";
import { FileInput } from "react-component-library";
import styled from "styled-components";
import { DisplayPaper } from "../DisplayPaper";
import { Header } from "../shared";

export const FileInputDemo: React.SFC = () => {
  const setFile = useState<FileList | null>(null)[1];
  return (
    <Wrapper>
      <div>
        <Header>Core</Header>
        <DisplayPaper>
          <FileInput onChange={setFile} isLoading={false} />
          <FileInput
            onChange={setFile}
            styleVariant="secondary"
            textColorVariant="core"
            colorVariant="core"
          />
          <FileInput
            onChange={setFile}
            styleVariant="tertiary"
            textColorVariant="core"
            colorVariant="core"
          />
        </DisplayPaper>
      </div>
      <div>
        <Header>Accent</Header>
        <DisplayPaper>
          <FileInput onChange={setFile} colorVariant={"accent"} />
          <FileInput
            onChange={setFile}
            styleVariant="secondary"
            textColorVariant="accent"
            colorVariant="accent"
          />
          <FileInput
            onChange={setFile}
            styleVariant="tertiary"
            textColorVariant="accent"
            colorVariant="accent"
          />
        </DisplayPaper>
      </div>
      <div>
        <Header>Upload Label</Header>
        <DisplayPaper>
          <FileInput
            id={"uploadable"}
            onChange={setFile}
            styleVariant={"primary"}
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
