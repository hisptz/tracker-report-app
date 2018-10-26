import React from 'react'
import { shallow } from 'enzyme'
import { Divider as CoreDivider } from 'ui/core/helpers'
import { Title, Heading, Col, Row, Divider, Spacer } from '../helper.components'

describe('Title Test', () => {
    it('Renders Title Component', () => {
        const wrapper = shallow(
            <Title>
                <h2>Title</h2>
            </Title>
        )
        expect(wrapper.find('.title')).toBeDefined()
        expect(wrapper.find('h2')).toBeDefined()
        expect(wrapper.find('h2').text()).toEqual('Title')
    })
})

describe('Heading Test', () => {
    it('Renders Heading Component', () => {
        const wrapper = shallow(
            <Heading>
                <h1>Heading</h1>
            </Heading>
        )
        expect(wrapper.find('.heading')).toBeDefined()
        expect(wrapper.find('h1')).toBeDefined()
        expect(wrapper.find('h1').text()).toEqual('Heading')
    })
})

describe('Col Test', () => {
    it('Renders Col Component', () => {
        const wrapper = shallow(
            <Col>
                <div>
                    <p>just a paragraph</p>
                </div>
            </Col>
        )
        expect(wrapper.find('.col')).toBeDefined()
        expect(wrapper.html()).toEqual(
            '<div class="col"><div><p>just a paragraph</p></div></div>'
        )
        expect(wrapper.find('p').text()).toEqual('just a paragraph')
    })
})

describe('Row Test', () => {
    it('Renders Row Component', () => {
        const wrapper = shallow(
            <Row>
                <div>
                    <p>just a paragraph</p>
                </div>
            </Row>
        )
        expect(wrapper.find('.row')).toBeDefined()
        expect(wrapper.html()).toEqual(
            '<div class="row"><div><p>just a paragraph</p></div></div>'
        )
        expect(wrapper.find('p').text()).toEqual('just a paragraph')
    })
})

describe('Divider Test', () => {
    it('Renders Divider Component', () => {
        const wrapper = shallow(<Divider />)
        expect(wrapper.contains(<div data-foo="foo">Hello</div>)).toEqual(false)
        expect(
            wrapper.contains(<CoreDivider margin="43px 0 60px 0" />)
        ).toEqual(true)
    })
})

describe('Spacer Test', () => {
    it('Renders Spacer Component', () => {
        const wrapper = shallow(<Spacer height="12" />)
        expect(
            wrapper.equals(<div style={{ height: '12', width: '100%' }} />)
        ).toEqual(true)
        expect(wrapper.type()).toEqual('div')
    })
})
