import './AlbumItem.css'
function AlbumItem({ album }) {
    return (
        <li className="album-item">
            {album.title} ({album.year})
        </li>
    )
}

export default AlbumItem