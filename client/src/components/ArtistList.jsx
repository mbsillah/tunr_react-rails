import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SongList = styled.div`

`

const ArtistList = (props) => {
    return (
        <div>
            <h2>All Artists</h2>
            {props.artists.map((artist,index) => {
                return (
                    <div>
                        <Link key={index} to={`/artists/${artist.id}`}>{artist.name}</Link>
                    </div>
                )
            })}

        </div>
    );
};

export default ArtistList;