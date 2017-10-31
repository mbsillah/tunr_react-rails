import React from 'react';

const SongsList = (props) => {
    return (
        <div>
          {props.songs.map((song,index) => {
                return (
                    <div>
                        <h4>{song.title}</h4>
                        <audio controls src={song.preview_url}></audio>
                    </div>
                )
            })}

        </div>
    );
};

export default SongsList;