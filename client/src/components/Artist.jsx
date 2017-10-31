import React, { Component } from 'react'
import axios from 'axios'
import SongsList from './SongsList'

class Artist extends Component {

    state = {
        artist: {},
        songs: []
    }

    async componentWillMount() {
        try {
            const artistId = this.props.match.params.artistId
            const res = await axios.get(`/api/artists/${artistId}`)
            this.setState({ artist: res.data })
            const songs = await axios.get(`/api/artists/${artistId}/songs`)
            this.setState({ songs: songs.data })
        } catch (error) {
            console.log(error)
        }

    }

    render() {
        return (
            <div>
                <img src={this.state.artist.photo_url} alt={this.state.artist.name} />
                <h2>{this.state.artist.name}</h2>
                <SongsList
                songs={this.state.songs} 
                />
            </div>
        )
    }
}

export default Artist