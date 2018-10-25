import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startupDataLoad } from './actions'
import CircularProgress from 'ui/core/CircularProgress'
import './App.css'

class App extends Component {
    render() {
        const props_ = {
            overlay: true,
            size: 'large',
        }
        return (
            <div className="App">
                <CircularProgress {...props_} />
            </div>
        )
    }
}

const mapStateToProps = ({ init }) => ({
    ...init,
})
const mapDispatchToProps = dispatch => ({
    startupDataLoad,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
