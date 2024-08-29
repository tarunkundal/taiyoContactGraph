
import CustomModal from '@/components/common/CustomModal';
import Header from '@/components/common/Header';
import { useAppSelector } from '@/store/hook';
import { AddIcon } from '@chakra-ui/icons';
import { Button, useDisclosure } from '@chakra-ui/react';
import CreateEditContactForm from '../components/CreateEditContactForm';
import Icons from '@/assets/icons';

type Props = {
    children: React.ReactNode
}

const ContactLayout = ({ children }: Props) => {
    const { onOpen, isOpen, onClose } = useDisclosure()
    const contacts = useAppSelector(state => state.contacts.contacts)

    const rightComponent = () => {
        return <Button leftIcon={<AddIcon />} onClick={onOpen}>
            Create New Contact
        </Button>
    }
    return (
        <>
            <Header title='Contacts' icon={Icons.ContactIcon} rightComponent={contacts.length ? rightComponent() : null} />
            {children}

            {
                isOpen &&
                <CustomModal
                    onClose={() => onClose()}
                    isOpen={isOpen}
                    children={<CreateEditContactForm onClose={onClose} />}
                    title='Create New Contact'
                    footerButtons={[]}
                />
            }
        </>
    )
}

export default ContactLayout