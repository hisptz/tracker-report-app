import React from 'react'
import HeaderBar from 'ui/widgets/HeaderBar/HeaderBar.Component'
import { Col } from '../../helpers'

// TODO: use proper props from the system
const props = {
    baseURL: 'http://localhost:8080',
    instanceName: 'Sierra Leone',
    appName: 'Tracker Report App',
    profile: {
        name: 'John Doe',
        email: 'john_doe@dhis2.org',
    },
    apps: [
        {
            name: 'Dashboard',
            path: '',
            img: '',
        },
        {
            name: 'Data Visualizer',
            path: '',
            img: '',
        },
        {
            name: 'Capture',
            path: '',
            img: '',
        },
        {
            name: 'Maintenance',
            path: '',
            img: '',
        },
        {
            name: 'Maps',
            path: '',
            img: '',
        },
        {
            name: 'Event Reports',
            path: '',
            img: '',
        },
        {
            name: 'Interpretations',
            path: '',
            img: '',
        },
        {
            name: 'Messaging',
            path: '',
            img: '',
        },
        {
            name: 'Import/Export',
            path: '',
            img: '',
        },
        {
            name: 'User Settings',
            path: '',
            img: '',
        },
    ],
}

function getProps() {
    return {
        ...props,
        messages: {
            count: Math.floor(Math.random() * 40),
        },
        interpretations: {
            count: Math.floor(Math.random() * 20),
        },
    }
}
export class HeaderBarContainer extends React.Component {
    static id = 'headerbar'

    render() {
        return (
            <Col style={{ marginBottom: 250 }}>
                <HeaderBar {...getProps()} />
            </Col>
        )
    }
}
