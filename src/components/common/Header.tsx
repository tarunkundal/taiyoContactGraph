import { TextVariant } from '@/styles/components/Text'
import { BorderColor } from '@/styles/tokens/colors/border'
import { COLORS } from '@/styles/tokens/colors/constant'
import { Box, Flex, Icon, Text, } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  title: string
  icon: React.ElementType
  rightComponent?: ReactNode
}

const Header = ({ icon, title, rightComponent }: Props) => {
  return (
    <Box h={14} overflowY={'auto'} borderLeft={'1px solid'} borderLeftColor={BorderColor.primary}>
      <Flex w={'full'} top={0}
        height={14}
        bgColor={COLORS.Brand[50]}
        px={6}
        justifyContent={'space-between'}
        alignItems={'center'}
        position={'relative'}>
        <Box py={6} display={'flex'} alignItems={'center'} gap={4} justifyContent={'center'} >
          <Icon as={icon} />
          <Text variant={TextVariant.semibold20}> {title} </Text>
        </Box>

        <Box position={'absolute'} right={16} zIndex={1}>
          {rightComponent && rightComponent}
        </Box>

      </Flex>
    </Box>
  )
}

export default Header