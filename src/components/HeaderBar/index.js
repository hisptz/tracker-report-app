import React from 'react'
import HeaderBar from 'ui/widgets/HeaderBar/HeaderBar.Component'
import { Col } from '../../helpers'
import PropTypes from 'prop-types'

export class HeaderBarContainer extends React.Component {
    static id = 'headerbar'

    render() {
        return (
            <Col style={{ marginBottom: 250 }}>
                <HeaderBar {...this.props} />
            </Col>
        )
    }
}

HeaderBarContainer.propTypes = {
    baseUrl: PropTypes.string,
    instanceName: PropTypes.string,
    appName: PropTypes.string,
    profile: PropTypes.object,
    apps: PropTypes.array,
    messages: PropTypes.object,
    interpretations: PropTypes.object,
}
