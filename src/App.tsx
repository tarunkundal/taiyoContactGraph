import { Box, Flex } from "@chakra-ui/react"
import Dashboard from "./components/dashboard"
import Sidebar from "./components/sidebar/Sidebar"
import { Suspense } from "react"
import Loading from "./components/common/Loading"
import { Navigate, Route, Routes } from "react-router-dom"
import GraphComponent from "./components/graphs"

export const App = () => {

  return (
    <Flex minH={'100vh'}>
      <Sidebar />
      <Box width={{ base: '90%', md: '85%' }} ml={{ sm: '10%', md: '15%' }}>
        <AppRoutes />
      </Box>
    </Flex>
  )
}

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<GraphComponent />} />
        <Route path="/graphs/*" element={<GraphComponent />} />
        <Route path="/contacts/*" element={<Dashboard />} />
        <Route path="/settings/*" element={<h1>This is Setting page</h1>} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Suspense>
  )
}
