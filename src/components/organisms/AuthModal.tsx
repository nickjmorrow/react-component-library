import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Button, PaperModal, PasswordInput, TextInput, Typography } from '../atoms';
import { ThemeContext } from '~/theming';
import { validateEmail, isRequired } from '../atoms/inputs';
import { StyleConstant } from '../../typeUtilities';

interface ILoginInfo {
    email: string;
    password: string;
}

interface IRegisterInfo {
    email: string;
    password: string;
    name: string;
}

export const AuthModal: React.SFC<IProps> = ({
    isOpen,
    renderAdditionalComponents,
    onLoginClick: handleLoginClick,
    onRegisterClick: handleRegisterClick,
    onRequestClose: handleRequestClose,
    isLoading,
}) => {
    const { spacing } = React.useContext(ThemeContext);

    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const emailErrors = validateEmail(email);
    const fullNameErrors = isRequired(fullName, 'full name');
    const passwordErrors = isRequired(password, 'password');

    const [displayedEmailErrors, setDisplayedEmailErrors] = useState<string[]>([]);
    const [displayedFullNameErrors, setDisplayedFullNameErrors] = useState<string[]>([]);
    const [displayedPasswordErrors, setDisplayedPasswordErrors] = useState<string[]>([]);

    const loginErrors = [...emailErrors, ...passwordErrors].length > 0;
    const registerErrors = [...emailErrors, ...fullNameErrors, ...passwordErrors].length > 0;

    const setDisplayedLoginErrors = () => {
        setDisplayedEmailErrors(emailErrors);
        setDisplayedPasswordErrors(passwordErrors);
    };
    const setDisplayedRegisterErrors = () => {
        setDisplayedEmailErrors(emailErrors);
        setDisplayedFullNameErrors(fullNameErrors);
        setDisplayedPasswordErrors(passwordErrors);
    };

    const handleLoginInternal = () => {
        if (loginErrors && isLoggingIn) {
            setDisplayedLoginErrors();
            return;
        }
        if (isLoggingIn) {
            setDisplayedLoginErrors();
            handleLoginClick({
                email,
                password,
            });
        } else {
            setIsLoggingIn(true);
        }
    };

    const handleRegisterInternal = () => {
        if (registerErrors && !isLoggingIn) {
            setDisplayedRegisterErrors();
            return;
        }
        if (!isLoggingIn) {
            setDisplayedRegisterErrors();
            handleRegisterClick({
                email,
                password,
                name: fullName,
            });
        } else {
            setIsLoggingIn(false);
        }
    };

    const emailInput = (
        <TextInput
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
            placeholder={'Email'}
            errors={displayedEmailErrors}
        />
    );
    const passwordInput = (
        <PasswordInput
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
            placeholder={'Password'}
            type={'password'}
            errors={displayedPasswordErrors}
        />
    );

    const registerInputs = (
        <InputWrapper spacing={spacing}>
            {emailInput}
            <TextInput
                value={fullName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.currentTarget.value)}
                placeholder={'Full Name'}
                errors={displayedFullNameErrors}
            />
            {passwordInput}
        </InputWrapper>
    );

    const loginInputs = (
        <InputWrapper spacing={spacing}>
            {emailInput}
            {passwordInput}
        </InputWrapper>
    );

    const authInputs = isLoggingIn ? loginInputs : registerInputs;

    const inputsWrapperRef = React.useRef<HTMLDivElement>(null);
    const [height, setHeight] = React.useState(0);
    if (inputsWrapperRef.current && inputsWrapperRef.current.clientHeight > height) {
        setHeight(inputsWrapperRef.current.clientHeight);
    }

    return (
        <PaperModal isOpen={isOpen} onRequestClose={handleRequestClose}>
            <Typography sizeVariant={6} weightVariant={5} style={{ alignSelf: 'flex-start' }}>
                {'Sign In'}
            </Typography>
            <InputsWrapper ref={inputsWrapperRef} height={height}>
                {authInputs}
            </InputsWrapper>
            <ButtonContainer verticalMargin={spacing.ss4}>
                <StyledButton
                    onClick={handleRegisterInternal}
                    textColorVariant={isLoggingIn ? 'core' : 'primaryLight'}
                    styleVariant={isLoggingIn ? 2 : 1}
                    isLoading={isLoading && !isLoggingIn}
                >
                    Register
                </StyledButton>
                <StyledButton
                    onClick={handleLoginInternal}
                    useMargin={false}
                    textColorVariant={isLoggingIn ? 'primaryLight' : 'core'}
                    styleVariant={isLoggingIn ? 1 : 2}
                    isLoading={isLoading && isLoggingIn}
                >
                    Log In
                </StyledButton>
                {renderAdditionalComponents && renderAdditionalComponents.map(render => render())}
            </ButtonContainer>
        </PaperModal>
    );
};

interface IProps {
    isOpen: boolean;
    isRegistering?: boolean;
    isLoading?: boolean;
    renderAdditionalComponents?: Array<() => React.ReactNode>;
    onRequestClose(): void;
    onRegisterClick(registerInfo: IRegisterInfo): void;
    onLoginClick(loginClick: ILoginInfo): void;
}

const InputWrapper = styled('div')<{ spacing: StyleConstant<'spacing'> }>`
    margin-top: ${p => p.spacing.ss6};
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: ${p => p.spacing.ss2};
`;

const ButtonContainer = styled('div')<{ verticalMargin: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin: ${p => p.verticalMargin} 0;
`;

const InputsWrapper = styled('div')<{ height: number }>`
    min-height: ${p => p.height}px;
`;

const StyledButton = styled(Button)`
    width: 100%;
`;
