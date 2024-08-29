import { Flex } from '@chakra-ui/react'
import React from 'react'

import { Border } from '@/styles/tokens/borders'
import { BgColor } from '@/styles/tokens/colors/bg'
import { TextColor } from '@/styles/tokens/colors/text'

type Props = {
    children: React.ReactNode
}
export const SidebarLayout = ({ children }: Props) => {

    return (
        <Flex
            h="100vh"
            position={'fixed'}
            w={{ base: '10%', md: '15%' }}
            flexDir="column"
            justifyContent="space-between"
            bg={BgColor.primary}
            color={TextColor.primary}
            borderRight={Border.primary}
        >
            {children}
        </Flex>
    )
}