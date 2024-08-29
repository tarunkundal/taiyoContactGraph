import React from 'react';
import { useGetWorldWideDataQuery, } from '../api';
import Loading from '@/components/common/Loading';
import { Box, Text } from '@chakra-ui/react';
import { TextVariant } from '@/styles/components/Text';
import { COLORS } from '@/styles/tokens/colors/constant';
import { FONT_SIZE } from '@/styles/tokens/typography';
import WorldWideData from './WorldWideData';

const WorldWideDataGraph: React.FC = () => {
    const { data, error: e1, isLoading: l1 } = useGetWorldWideDataQuery()
    console.log(data);

    if (!data) return
    if (l1) return <Loading />
    if (e1) return <Text textAlign={'center'} color={COLORS.Red[400]} variant={TextVariant.bold20} fontSize={FONT_SIZE['4xl']}>Error loading data !</Text>;

    return <Box p={4}>
        <Text variant={TextVariant.bold16} fontSize={FONT_SIZE['2xl']} >Global COVID-19 Data</Text>
        <WorldWideData data={data} />
    </Box>
};

export default WorldWideDataGraph;
