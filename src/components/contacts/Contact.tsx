import ContactLayout from './layout/ContactLayout'
import { TextVariant } from '@/styles/components/Text';
import { COLORS } from '@/styles/tokens/colors/constant';
import { FONT_SIZE } from '@/styles/tokens/typography';
import { AddIcon } from '@chakra-ui/icons';
import { useDisclosure, Card, Text, Stack } from '@chakra-ui/react';
import ContactCard from '../common/ContactCard';
import CreateEditContactForm from './components/CreateEditContactForm';
import CustomModal from '../common/CustomModal';
import { useAppSelector } from '@/store/hook';

const Contact = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const contacts = useAppSelector((state) => state.contacts.contacts);

    const display = contacts.length ? 'grid' : 'flex'

    return (
        <ContactLayout>
            <Stack display={display} alignItems={'center'} m={4} spacing={4} gridTemplateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(4, 1fr)',
            }} >
                {!contacts.length && <Card w={'70%'} textAlign={'center'} top={4} display={'flex'} bgColor={COLORS.Brand[50]} p={6} onClick={onOpen} cursor={'pointer'} alignItems={'center'} justifyContent={'center'} >
                    <AddIcon fontSize={FONT_SIZE['6xl']} color={COLORS.Brand[500]} />
                    <Text variant={TextVariant.medium18} fontSize={FONT_SIZE.xl}>Create New Contact</Text>
                </Card>}
                {
                    contacts.length ?
                        <>
                            {contacts.map(contact =>
                                <ContactCard id={contact.id} key={contact.id} firstName={contact.firstName} lastName={contact.lastName}
                                    email={contact.email} status={contact.status}
                                />
                            )}</>
                        :
                        <Text
                            variant={TextVariant.bold24}
                            color={COLORS.Red[400]}
                            textAlign={'center'}
                        >
                            No contacts found!
                            <br />
                            Please add contacts from Create New Contact button

                        </Text>
                }
            </Stack>

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
        </ContactLayout>
    )
}

export default Contact