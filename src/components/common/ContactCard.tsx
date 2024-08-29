import Icons from '@/assets/icons'
import { COLORS } from '@/styles/tokens/colors/constant'
import { FONT_SIZE, FONT_WEIGHT } from '@/styles/tokens/typography'
import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Text, useDisclosure } from '@chakra-ui/react'
import CustomModal from './CustomModal';
import CreateEditContactForm from '../contacts/components/CreateEditContactForm';
import { SetStateAction, useState } from 'react';
import { useAppDispatch } from '@/store/hook';
import { deleteContact } from '@/store/slices/contactsSlice';

interface Contact {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    status: string;
}

const ContactCard = ({ id, firstName, lastName, email, status }: Contact) => {
    const dispatch = useAppDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [updateContactId, setUpdateContactId] = useState<string>('')

    const handleEditContact = (id: SetStateAction<string> | undefined) => {
        if (!id) return
        onOpen()
        setUpdateContactId(id)
        console.log(id)
    }

    const handleDeleteContact = (id: string | undefined) => {
        if (!id) return
        dispatch(deleteContact(id))
    }

    return (
        <>
            <Card borderRadius={'md'}>
                <CardHeader bg={COLORS.Brand[200]} >
                    <Flex justifyContent={'center'}>
                        <Icons.BoardIcon />
                    </Flex>

                </CardHeader>
                <CardBody>
                    <Text fontWeight={FONT_WEIGHT.semibold} fontSize={FONT_SIZE.lg}>
                        {firstName + ' ' + lastName}
                    </Text>

                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text color={COLORS.BlackGrey[800]}>Email</Text>
                        <Text >{email}</Text>
                    </Flex>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text color={COLORS.BlackGrey[800]}>Status</Text>
                        <Text >{status}</Text>

                    </Flex>
                </CardBody>
                <CardFooter flexDirection={'column'} mt={-8} gap={2}>
                    <Flex
                        justify='space-between'
                        alignItems={'center'}
                    >
                        <Button onClick={() => handleEditContact(id)} w={'45%'} variant={'outline'}>
                            Edit
                        </Button>
                        <Button w={'45%'} onClick={() => handleDeleteContact(id)}>
                            Delete
                        </Button>
                    </Flex>

                </CardFooter >
            </Card >
            {
                isOpen &&
                <CustomModal
                    onClose={() => onClose()}
                    isOpen={isOpen}
                    children={<CreateEditContactForm onClose={onClose} updateContactId={updateContactId} />}
                    title='Update Contact'
                    footerButtons={[]}
                />
            }
        </>
    )
}

export default ContactCard