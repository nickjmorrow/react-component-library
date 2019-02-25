import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import {
  Button,
  PaperModal,
  PasswordInput,
  TextInput,
  Typography
} from "~/components/atoms";
import { ThemeContext } from "~/styleConstants";
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

  const inputsWrapperRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);
  if (
    inputsWrapperRef.current &&
    inputsWrapperRef.current.clientHeight > height
  ) {
    setHeight(inputsWrapperRef.current.clientHeight);
  }
  const { spacing } = React.useContext(ThemeContext);

  return (
    <PaperModal isOpen={isOpen} onRequestClose={handleRequestClose}>
      <div style={{ margin: `0 ${spacing.ss4}` }}>
        <Typography sizeVariant={6} weightVariant={2}>
          {"Sign In"}
        </Typography>
        <InputsWrapper ref={inputsWrapperRef} height={height}>
          {authInputs}
        </InputsWrapper>
        <ButtonContainer verticalMargin={spacing.ss4}>
          <Button
            style={buttonBarStyle}
            onClick={handleRegisterInternal}
            textColorVariant={isLoggingIn ? "core" : "primaryLight"}
            styleVariant={isLoggingIn ? "secondary" : "primary"}>
            Register
          </Button>
          <Button
            style={buttonBarStyle}
            onClick={handleLoginInternal}
            useMargin={false}
            textColorVariant={isLoggingIn ? "primaryLight" : "core"}
            styleVariant={isLoggingIn ? "primary" : "secondary"}>
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

const ButtonContainer = styled("div")<{ verticalMargin: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin: ${p => p.verticalMargin} 0;
`;

const InputsWrapper = styled("div")<{ height: number }>`
  min-height: ${p => p.height}px;
`;
