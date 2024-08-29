import { baseApi } from "@/store/rtk";
import { CountryStats, GlobalCovidData, HistoricalCases } from "../types";

export const covidApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getWorldWideData: builder.query<GlobalCovidData, void>({
            query: () => 'all', // Fetches worldwide COVID-19 data
        }),
        getCountryData: builder.query<CountryStats[], string | void>({
            query: (country) => country ? `countries/${country}` : 'countries', // Fetches data for a specific country or all countries
        }),
        getHistoricalData: builder.query<HistoricalCases, string | void>({
            query: (country) => {
                const countryPath = country ? country : 'all'; // Uses 'all' if no country is provided
                return `historical/${countryPath}?lastdays=all`; // Fetches historical data
            },
        }),
    }),
    overrideExisting: false,
});

// Export hooks for usage in functional components
export const {
    useGetWorldWideDataQuery,
    useGetCountryDataQuery,
    useGetHistoricalDataQuery,
} = covidApi;
