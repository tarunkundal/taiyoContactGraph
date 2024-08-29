import GraphsLayout from "./layout/GraphsLayout"
import HistoricalGraph from "./components/HistoricalGraph"
import WorldWideDataGraph from "./components/WorldWideDataGraph"
import CountryWiseDataGraph from "./components/CountryWiseDataGraph"

const GraphComponent = () => {
    return <GraphsLayout >
        <CountryWiseDataGraph />
        <HistoricalGraph />
        <WorldWideDataGraph />
    </GraphsLayout>
}

export default GraphComponent