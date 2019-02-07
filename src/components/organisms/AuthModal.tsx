import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button, PasswordInput, TextInput, Typography } from "../..";
import { PaperModal } from "~/components/atoms";
import { horizontalSpacing } from "~/styleConstants";
import { ILoginInfo, IRegisterInfo } from "~/types";

export const AuthModal: React.SFC<IProps> = ({
  isOpen,
  renderAdditionalComponents,
  onLoginClick: handleLoginClick,
  onRegisterClick: handleRegisterClick,
  onRequestClose: handleRequestClose
}) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleLoginInternal = () => {
    if (isLoggingIn) {
      handleLoginClick({
        email,
        password
      });
      handleRequestClose();
    } else {
      setIsLoggingIn(true);
    }
  };

  const handleRegisterInternal = () => {
    if (!isLoggingIn) {
      handleRegisterClick({
        email,
        password,
        name: fullName
      });
      handleRequestClose();
    } else {
      setIsLoggingIn(false);
    }
  };

  const registerInputs = (
    <InputWrapper>
      <TextInput value={email} onChange={setEmail} placeholder={"Email"} />
      <TextInput
        value={fullName}
        onChange={setFullName}
        placeholder={"Full Name"}
      />
      <PasswordInput
        value={password}
        onChange={setPassword}
        placeholder={"Password"}
        type={"password"}
      />
    </InputWrapper>
  );

  const loginInputs = (
    <InputWrapper>
      <TextInput value={email} onChange={setEmail} placeholder={"Email"} />
      <PasswordInput
        value={password}
        onChange={setPassword}
        placeholder={"Password"}
      />
    </InputWrapper>
  );

  const authInputs = isLoggingIn ? loginInputs : registerInputs;
  return (
    <PaperModal isOpen={isOpen} onRequestClose={handleRequestClose}>
      <div style={{ margin: `0 ${horizontalSpacing.default}` }}>
        <Typography noMargin={true} variant="h2">
          {"Sign In"}
        </Typography>
        {authInputs}
        <ButtonContainer>
          <Button style={buttonBarStyle} onClick={handleRegisterInternal}>
            Register
          </Button>
          <Button style={buttonBarStyle} onClick={handleLoginInternal}>
            Log In
          </Button>
          {renderAdditionalComponents
            ? renderAdditionalComponents.map(render => render())
            : null}
        </ButtonContainer>
      </div>
    </PaperModal>
  );
};

const buttonBarStyle = { width: "100%" };

interface IProps {
  isOpen: boolean;
  isRegistering?: boolean;
  renderAdditionalComponents?: Array<() => React.ReactNode>;
  onRequestClose(): void;
  onRegisterClick(registerInfo: IRegisterInfo): void;
  onLoginClick(loginClick: ILoginInfo): void;
}

const InputWrapper = styled.div`
  margin-top: 28px;
`;

const ButtonContainer = styled.div`
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
