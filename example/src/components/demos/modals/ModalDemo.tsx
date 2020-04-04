import * as React from 'react';
import { ButtonModal, Button, Typography } from '@nickjmorrow/react-component-library';
import { DescriptionContainer } from '../../shared/DescriptionContainer';

export const ModalDemo: React.SFC = () => {
    const [isOneButtonModalOpen, setIsOneButtonModalOpen] = React.useState(false);
    const [isTwoButtonModalOpen, setIsTwoButtonModalOpen] = React.useState(false);
    const handleOneButtonModalRequestClose = () => setIsOneButtonModalOpen(false);
    const handleTwoButtonModalRequestClose = () => setIsTwoButtonModalOpen(false);

    const openOneButtonModal = () => setIsOneButtonModalOpen(currentIsOpen => !currentIsOpen);
    const openTwoButtonModal = () => setIsTwoButtonModalOpen(currentIsOpen => !currentIsOpen);
    return (
        <>
            <Typography styleVariant={'h1'}>{'Modals'}</Typography>
            <Typography styleVariant={'h2'}>{'One Button Modal'}</Typography>
            <DescriptionContainer>
                <Typography>Display a modal containing a single button.</Typography>
            </DescriptionContainer>
            <>
                <ButtonModal
                    isOpen={isOneButtonModalOpen}
                    primaryButtonInfo={{ onClick: handleOneButtonModalRequestClose, element: 'Okay' }}
                    onRequestClose={handleOneButtonModalRequestClose}
                >
                    <div style={{ width: '400px' }}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. At in tellus integer feugiat scelerisque varius morbi enim
                            nunc. Sem et tortor consequat id porta nibh. Cursus sit amet dictum sit amet justo donec.
                        </Typography>
                    </div>
                </ButtonModal>
                <Button useMargin={false} onClick={openOneButtonModal}>
                    Toggle One Button Modal
                </Button>
            </>
            <Typography styleVariant={'h2'}>{'Two Button Modal'}</Typography>
            <DescriptionContainer>
                <Typography>Display a modal containing two buttons.</Typography>
            </DescriptionContainer>
            <>
                <ButtonModal
                    isOpen={isTwoButtonModalOpen}
                    primaryButtonInfo={{ onClick: handleTwoButtonModalRequestClose, element: 'Okay' }}
                    secondaryButtonInfo={{ onClick: handleTwoButtonModalRequestClose, element: 'Cancel' }}
                    onRequestClose={handleTwoButtonModalRequestClose}
                >
                    <div style={{ width: '400px' }}>
                        <Typography>
                            Sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. At in tellus integer feugiat scelerisque varius
                            morbi enim nunc. Sem et tortor consequat id porta nibh. Cursus sit amet dictum sit amet
                            justo donec.
                        </Typography>
                    </div>
                </ButtonModal>
                <Button useMargin={false} onClick={openTwoButtonModal}>
                    Toggle Two Button Modal
                </Button>
            </>
        </>
    );
};
