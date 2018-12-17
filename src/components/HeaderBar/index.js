import React from 'react'
import HeaderBar from 'ui/widgets/HeaderBar'
import { Col } from '../../helpers'
import i18n from '@dhis2/d2-i18n'

export class HeaderBarContainer extends React.Component {
    static id = 'headerbar'

    render() {
        return (
            <Col style={{ marginBottom: 250 }}>
                <HeaderBar appName={i18n.t('Tracker Report App')} />
            </Col>
        )
    }
}
