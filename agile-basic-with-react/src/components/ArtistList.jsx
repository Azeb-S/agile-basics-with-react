import ArtistCard from './ArtistCard'

function ArtistList({ artists }) {
  return (
    <div>
      {artists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
        </div>
     
  )
}

export default ArtistList