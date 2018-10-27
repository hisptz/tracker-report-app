import React from 'react'
import { Divider as CoreDivider } from 'ui/core/helpers'

export const Title = ({ children }) => <h1 className="title">{children}</h1>
export const Heading = ({ children }) => <h2 className="heading">{children}</h2>

export const Text = ({ style, children }) => (
    <Container style={style} children={children} styleClassName="text" />
)
export const Row = ({ style, children }) => (
    <Container style={style} children={children} styleClassName="row" />
)
export const Col = ({ style, children }) => (
    <Container style={style} children={children} styleClassName="col" />
)

export const Container = ({ style, children, styleClassName }) => (
    <div style={style} className={styleClassName}>
        {children}
    </div>
)

export const Divider = () => <CoreDivider margin="43px 0 60px 0" />
export const Spacer = ({ height }) => <div style={{ height, width: '100%' }} />
