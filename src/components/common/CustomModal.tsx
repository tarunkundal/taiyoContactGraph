import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface FooterButton {
    label: string;
    onClick: () => void;
    variant?: string;
    colorScheme?: string;
    isDisabled?: boolean;
}

interface CustomModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
    title: ReactNode | string;
    footerButtons?: FooterButton[]
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, children, title, footerButtons }) => {
    return (
        <Modal onClose={onClose} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton cursor={'pointer'} />
                <ModalBody>
                    {children}
                </ModalBody>
                {footerButtons ?
                    <ModalFooter>
                        {footerButtons.map((button, index) => (
                            <Button
                                key={index}
                                variant={button?.variant}
                                colorScheme={button?.colorScheme}
                                onClick={button.onClick}
                                isDisabled={button?.isDisabled}
                                mr={index < footerButtons.length - 1 ? 3 : 0} // Adds margin to the right except the last button
                            >
                                {button.label}
                            </Button>
                        ))}
                    </ModalFooter>
                    : null}
            </ModalContent>
        </Modal>
    );
};

export default CustomModal;
