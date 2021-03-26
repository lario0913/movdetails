import React, { Component } from 'react'
import {connect} from 'react-redux'

import SearchForm from './SearchForm'
import Typicall from '../Typical/Typical';
import Spinner from '../spinner/Spinner';

export class Landing extends Component {
    render() {
        const {loading,movies} = this.props
        // let display = <Typicall />
        // console.log(loading)
        // console.log(movies)
        // let display = <Typicall />

        // if(!loading && movies === []){
        //     return (display = <Typicall />)
        // }

        return (
            <div className="landing">
                <SearchForm />
                {/* {display}               */}
                {
                    loading ? <Spinner />                     
                            : movies.length === 0
                            ? <Typicall />
                            : <div>Movie</div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movies: state.movies.movies
})

export default connect(mapStateToProps)(Landing)
