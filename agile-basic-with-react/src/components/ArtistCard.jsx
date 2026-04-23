import AlbumItem from './AlbumItem'

function ArtistCard({ artist }) {
    return (
        <div>
            <h3>{artist.name}</h3>
            <p><strong>Genre:</strong> {artist.genre}</p>
            <p>{artist.bio}</p>

            <ul>
                {artist.albums.map((album, index) =>(
                    <AlbumItem key={index} album={album} />
                ))}
            </ul>
        </div>
    )
}
export default ArtistCard