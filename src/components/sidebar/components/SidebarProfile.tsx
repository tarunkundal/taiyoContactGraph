import { Avatar, Flex, Text } from '@chakra-ui/react'

import { TextVariant } from '@/styles/components/Text'
import { Border } from '@/styles/tokens/borders'


export const SidebarProfile = () => {
    return (
        <Flex w="full" flexDir="column" borderTop={Border.primary} justifyContent={'center'} alignItems={{ sm: 'center', md: 'flex-start' }} >
            <Flex alignItems="center" gap={2} py={3} ml={{ base: 0, md: 2 }}>
                <Avatar
                    src={undefined}
                    name={'Tarun Chauhan'}
                    size="regular"
                    variant="square"
                />
                <Text
                    variant={TextVariant.medium14}
                    noOfLines={1}
                    textOverflow="clip"
                    display={{ sm: 'none', md: 'block' }}
                >
                    Tarun Chauhan
                </Text>

            </Flex>
        </Flex>
    )
}