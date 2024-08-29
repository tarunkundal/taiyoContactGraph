import { TextVariant } from '@/styles/components/Text'
import { BorderColor } from '@/styles/tokens/colors/border'
import { Box, Flex, Image, Text, } from '@chakra-ui/react'

const SidebarHeader = () => {
    return (
        <Box h={14} borderBottom={'1px solid white'} borderBottomColor={BorderColor.primary}>
            <Flex alignItems={'center'} justifyContent={'flex-start'} px={{ base: 0, md: 3 }} gap={2}>
                <Image w={12} src='https://photos.wellfound.com/startups/i/8514589-851e7c45de88ddc70740b1b3e47308ac-medium_jpg.jpg?buster=1631822539' />
                <Text display={{ sm: 'none', md: 'block' }} variant={TextVariant.medium16}>Taiyō.AI</Text>
            </Flex>
        </Box>
    )
}

export default SidebarHeader