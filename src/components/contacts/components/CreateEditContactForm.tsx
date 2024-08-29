import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    Stack,
    VStack,
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { addContact, updateContact } from '@/store/slices/contactsSlice';
import useCustomToast from '@/components/common/hooks/useToastHook';

export interface CreateEditContactFormProps {
    updateContactId?: string;
    onClose: () => void
}

const CreateEditContactForm: React.FC<CreateEditContactFormProps> = ({ updateContactId, onClose }) => {
    const dispatch = useAppDispatch()
    const toast = useCustomToast()
    const contacts = useAppSelector(state => state.contacts.contacts)

    const contactToUpdate = contacts.find((contact) => contact.id === updateContactId)

    const [formData, setFormData] = useState({
        id: contactToUpdate?.id || '',
        firstName: contactToUpdate?.firstName || '',
        lastName: contactToUpdate?.lastName || '',
        email: contactToUpdate?.email || '',
        status: contactToUpdate?.status || 'active',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleStatusChange = (value: string) => {
        setFormData((prev) => ({ ...prev, status: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.id) {
            dispatch(updateContact(formData)); // Updating existing contact
            console.log('updated sucessfully');
            toast({
                title: 'Contact Updated Sucessfully!',
                status: 'success'
            })
        } else {
            dispatch(addContact({ ...formData, id: uuidv4() })); // Adding new contact with a unique ID
            toast({
                title: 'Contact Created Sucessfully!',
                status: 'success'
            })
        }
        onClose()
    };

    return (
        <Box maxW="md">
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <FormControl id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter first name"
                        />
                    </FormControl>

                    <FormControl id="lastName" isRequired>
                        <FormLabel>Last Name</FormLabel>
                        <Input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter last name"
                        />
                    </FormControl>

                    <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                        />
                    </FormControl>

                    <FormControl id="status" isRequired>
                        <FormLabel>Status</FormLabel>
                        <RadioGroup
                            value={formData.status}
                            onChange={handleStatusChange}
                        >
                            <Stack direction='row'>
                                <Radio value='active'>Active</Radio>
                                <Radio value='inactive'>Inactive</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>

                    <Button mt={3} type="submit" width="full">
                        {contactToUpdate ? 'Update Contact' : 'Add Contact'}
                    </Button>
                </VStack>
            </form>
        </Box>
    );
};

export default CreateEditContactForm;
