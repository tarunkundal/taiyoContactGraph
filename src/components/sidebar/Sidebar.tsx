
import { Flex } from '@chakra-ui/react'
import SidebarHeader from './components/SidebarHeader'
import { SidebarNavOptions } from './components/SidebarNavOptions'
import { useSidebarPrimaryOptions, useSidebarSecondaryOptions } from './hooks/useSidebarOptions'
import { SidebarLayout } from './layout/SidebarLayout'
import { SidebarProfile } from './components/SidebarProfile'

const Sidebar = () => {
    const primaryOptions = useSidebarPrimaryOptions()
    const secondaryOptions = useSidebarSecondaryOptions()

    return (
        <SidebarLayout>
            <Flex
                flexDir="column"
                w="full"
                gap={6}
            >
                <SidebarHeader />
                <SidebarNavOptions options={primaryOptions} />
            </Flex>

            <Flex
                flexDir="column"
                gap={8}
                alignItems={'center'}
            >
                <SidebarNavOptions options={secondaryOptions} />
                <SidebarProfile />
            </Flex>
        </SidebarLayout>
    )
}

export default Sidebar