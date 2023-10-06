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
import { useLocation, useNavigate } from "react-router-dom";

function HomePage() {
  const dispatch = useDispatch();
  const { artworks, loading, error } = useSelector(
    (state: RootState) => state.artworks
  );
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const handleClick = (id: number) => {
    navigate(`/artwork/${id}`, { state: { from: currentPath } });
  };

  useEffect(() => {
    dispatch(fetchArtworksStart());
    fetchArtworks()
      .then((data) => dispatch(fetchArtworksSuccess(data)))
      .catch((err) => dispatch(fetchArtworksFailure(err.message)));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center min-h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full flex pb-36 h-min-screen overflow-y-scroll mx-auto max-w-[1500px] ">
      <div className="w-11/12 flex flex-col justify-center items-center mx-auto">
        <div className="h-[50vh] lg:h-[60vh] w-full display flex flex-col items-start justify-center">
          <h1 className="text-[2.75em] leading-[1.12em] tracking-wide">
            The Art Institute of Chicago.
          </h1>
          <h2 className="text-[2em] leading-[1.3em] mt-1.5 lg:mt-0lg:leading-[1.125em] tracking-wider font-light">
            Permanent collection.
          </h2>
        </div>
        <div className="flex w-full  flex-col justify-center items-start mx-auto">
          <h1 className="text-[1.125em] tracking-wider font-medium uppercase leading-[1em]">Currently on display:</h1>
          <div className="w-full -mt-3">
            {artworks.map((artwork, index) => (
              <div key={index}>
                <ArtCardMolecule
                  art={artwork}
                  onClickNext={() => handleClick(artwork.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
