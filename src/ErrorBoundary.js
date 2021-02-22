import React,{Component} from 'react'
import {Link, Redirect} from '@reach/router'

export default class ErrorBoundary extends Component {
    state = {hasError : false, redirect: false}

    static getDerivedStateFromError(){
        return {hasError :true}
    }

    componentDidCatch(error, info) {
        console.error("error boundary", error, info)
    }

    componentDidUpdate(){
        if(this.state.hasError){
            setTimeout( ()=> {
                this.setState({redirect: true})
            }, 5000)
        }
    }

    render() {
        if(this.state.redirect){
            return <Redirect to="/" />
        }
        if(this.state.hasError){
            return (
                <h1>
                    There was an error with this listing <Link to="/">Click here</Link> to go back to home page or wait for another 5 seconds.
                </h1>
            )
        }
        return this.props.children
    }
}
