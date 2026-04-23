function AlbumItem({ album }){
    return(
        <li>
            {album.title} ({album.year})
        </li>
    )
}

export default AlbumItem