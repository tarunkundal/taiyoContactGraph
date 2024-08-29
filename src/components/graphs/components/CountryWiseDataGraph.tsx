import React from 'react';
import Loading from '@/components/common/Loading';
import { Box, Text } from '@chakra-ui/react';
import { TextVariant } from '@/styles/components/Text';
import { COLORS } from '@/styles/tokens/colors/constant';
import { FONT_SIZE } from '@/styles/tokens/typography';
import { useGetCountryDataQuery } from '../api';
import CountryMap from './CountryData';

const CountryWiseDataGraph: React.FC = () => {
    const { data, error, isLoading } = useGetCountryDataQuery()

    if (!data) return
    if (isLoading) return <Loading />
    if (error) return <Text textAlign={'center'} color={COLORS.Red[400]} variant={TextVariant.bold20} fontSize={FONT_SIZE['4xl']}>Error loading data !</Text>;

    return <Box p={4}>
        <Text variant={TextVariant.bold16} fontSize={FONT_SIZE['2xl']} >Country Wise Data</Text>
        <CountryMap countryData={data} />
    </Box>
};

export default CountryWiseDataGraph;
