import { Flex, Icon, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { TextVariant } from '@/styles/components/Text'
import { BgColor } from '@/styles/tokens/colors/bg'
import { IconColor } from '@/styles/tokens/colors/icon'

import { SidebarOptionType } from '../hooks/useSidebarOptions'

export const SidebarItemRow = ({
    label,
    icon,
    navTo,
    isActive,
}: SidebarOptionType) => {
    return (
        <Flex w="full" flexDir="column" justifyContent={'center'} alignItems={{ base: 'center', md: 'inherit' }} >
            <Link to={navTo} style={{ textDecoration: 'none' }} color={TextVariant.medium14}>
                <Flex
                    w={'auto'}
                    gap={3}
                    px={3}
                    py={2}
                    borderRadius="6px"
                    cursor="pointer"
                    bg={isActive ? BgColor.active_primary : 'transparent'}
                    _hover={{
                        bg: BgColor.hover_primary,
                    }}
                    alignItems="center"
                    justifyContent={'flex-start'}
                >
                    <Icon
                        as={icon}
                        color={isActive ? IconColor.active_primary : IconColor.primary}
                        fontSize="20px"
                    />
                    <Text display={{ base: 'none', md: 'block' }} variant={TextVariant.medium14}>{label}</Text>
                </Flex>
            </Link>
        </Flex>
    )
}