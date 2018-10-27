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

export const getProps = () => {
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
