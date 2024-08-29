import Icons from '@/assets/icons'
import Header from '@/components/common/Header'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const GraphsLayout = ({ children }: Props) => {
    return <>
        <Header title='Graphs' icon={Icons.GraphIcon} />
        {children}
    </>
}

export default GraphsLayout