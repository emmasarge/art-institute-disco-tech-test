// HomePage.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  fetchArtworksStart,
  fetchArtworksSuccess,
  fetchArtworksFailure,
} from "../redux/reducers/artworkSlice";
import { fetchArtworks } from "../utls/artworkService";
import { ArtCardMolecule } from "../components/molecules/ArtCardMolecule";

function HomePage() {
  const dispatch = useDispatch();
  const { artworks, loading, error } = useSelector(
    (state: RootState) => state.artworks
  );

  useEffect(() => {
    dispatch(fetchArtworksStart());
    fetchArtworks()
      .then((data) => dispatch(fetchArtworksSuccess(data)))
      .catch((err) => dispatch(fetchArtworksFailure(err.message)));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full h-min-screen overflow-y-scroll">
      <h1>Artworks</h1>
      <div>
      

        {artworks.map((artwork, index) => (
          <div key={index}>
           <ArtCardMolecule art={artwork}/>
           </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
