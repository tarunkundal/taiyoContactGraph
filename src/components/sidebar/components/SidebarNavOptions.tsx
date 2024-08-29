import { Flex } from '@chakra-ui/react'

import { SidebarOptionType } from '../hooks/useSidebarOptions'
import { SidebarItemRow } from './SidebarItemRow'

type Props = {
    options: SidebarOptionType[]
}

export const SidebarNavOptions = ({ options }: Props) => {
    return (
        <Flex flexDir="column" w="full" gap={1} >
            {options.map((option) => (
                <SidebarItemRow
                    key={option.label}
                    {...option}
                />
            ))}
        </Flex>
    )
}