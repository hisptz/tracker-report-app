import React from 'react'
import { shallow } from 'enzyme'
import { HeaderBarContainer } from '../HeaderBar'
import { getProps } from '../../helpers/helper.constants'

describe('HeaderBarContainer Test', () => {
    it('Renders HeaderBar Component', () => {
        const wrapper = shallow(<HeaderBarContainer {...getProps()} />)
        expect(wrapper.exists()).toEqual(true)
        expect(wrapper.find('HeaderBar').exists()).toEqual(true)
    })

    it('Has correct props', () => {
        const wrapper = shallow(<HeaderBarContainer {...getProps()} />)
        expect('baseURL' in wrapper.children().props()).toEqual(true)
        expect('appName' in wrapper.children().props()).toEqual(true)
        expect('instanceName' in wrapper.children().props()).toEqual(true)
        expect('profile' in wrapper.children().props()).toEqual(true)
        expect('apps' in wrapper.children().props()).toEqual(true)
        expect('messages' in wrapper.children().props()).toEqual(true)
        expect('interpretations' in wrapper.children().props()).toEqual(true)
    })

    it('Has correct value for props its passing', () => {
        const wrapper = shallow(<HeaderBarContainer {...getProps()} />)

        expect(wrapper.children().prop('baseURL')).toEqual(
            'http://localhost:8080'
        )
        expect(wrapper.children().prop('appName')).toEqual('Tracker Report App')
    })
})
