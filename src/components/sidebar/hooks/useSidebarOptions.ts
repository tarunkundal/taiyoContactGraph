import Icons from '@/assets/icons'
import React from 'react'
import { matchPath, useLocation } from 'react-router-dom'

export type SidebarOptionType = {
    label: string
    navTo: string
    isActive?: boolean
    icon?: React.ElementType
}

export const useSidebarPrimaryOptions = () => {
    const location = useLocation()
    return [
        {
            label: 'Graphs',
            icon: Icons.GraphIcon,
            navTo: '/graphs',
            isActive: !!matchPath({ path: '/graphs' }, location.pathname) || !!matchPath({ path: '/' }, location.pathname),
        },
        {
            label: 'Contacts',
            icon: Icons.ContactIcon,
            navTo: '/contacts',
            isActive: !!matchPath({ path: '/contacts' }, location.pathname),
        },
    ]
}

export const useSidebarSecondaryOptions = () => {
    const location = useLocation()
    return [
        {
            label: 'Settings',
            icon: Icons.SettingsIcon,
            navTo: '/settings',
            isActive: !!matchPath({ path: '/settings' }, location.pathname),
        },
    ]
}