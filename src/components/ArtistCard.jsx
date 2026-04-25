import AlbumItem from './AlbumItem'
import './ArtistCard.css'

function ArtistCard({ artist }) {
    return (
        <div className="artist-card">
            <h3>{artist.name}</h3>
            <p><strong>Genre:</strong> {artist.genre}</p>
            <p>{artist.bio}</p>

            <ul>
                {artist.albums.map((album, index) => (
                    <AlbumItem key={index} album={album} />
                ))}
            </ul>
        </div>
    )
}
export default ArtistCard