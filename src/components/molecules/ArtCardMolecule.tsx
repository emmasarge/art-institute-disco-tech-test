
interface Art {
    id: number;
    title: string;
    image_id: string;
    // Add other properties as needed
  }
  
  interface ArtCardMoleculeProps {
    art: Art;
  }

export const ArtCardMolecule = ({ art }:ArtCardMoleculeProps) => {

    return (
        <div key={art.id} >
             <div >{art.title}</div>
            <div>
             <img
              alt={art.title}
              src=
              {`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}/>
            </div>
        </div>
    )
}
