import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Song = styled.div`
`

const ArtistList = (props) => {
    return (
        <div>
            <h2>All Artists</h2>
            {props.artists.map((artist,index) => {
                return (
                    <Song className="songContainer">
                        <Link key={index} to={`/artists/${artist.id}`}>{artist.name}</Link>
                    </Song>
                )
            })}

        </div>
    );
};

export default ArtistList;