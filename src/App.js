import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startupDataLoad } from './actions'
import './App.css'

class App extends Component {
    render() {
        const { startupDataLoad } = this.props
        return (
            <div className="App">
                <button onClick={startupDataLoad}>Test redux action</button>
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
