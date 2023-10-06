import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchSingleArtworkStart,
    fetchSingleArtworkSuccess,
    fetchSingleArtworkFailure,
} from '../redux/reducers/singleArtworkSlice';
import { RootState } from '../redux/store';
import { fetchArtworkById } from '../utls/artworkService';
import { SingleArtworkDisplayMolecule } from '../components/molecules/SingleArtworkDisplayMolecule';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { artwork, loading, error } = useSelector(
    (state: RootState) => state.artwork
  );

  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state;
  const previousPath = state?.from || '/main-page';

  const handleGoBack = () => {
    navigate(previousPath);
  };

  useEffect(() => {
    if (id) {
      const numericId = Number(id);
      dispatch(fetchSingleArtworkStart());
      fetchArtworkById(numericId)
        .then((data) => dispatch(fetchSingleArtworkSuccess(data.data)))
        .catch((err) => dispatch(fetchSingleArtworkFailure(err.message)));
    }
  }, [dispatch, id]);

  if (loading) {
    return <div className='w-full flex justify-center items-center min-h-screen'><div>Loading...</div></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!artwork) {
    return <div className='w-full flex justify-center items-center min-h-screen'><div>No art details found.</div></div>;
  }


  return (
    <div className="w-full flex pb-36  ">
      <div className="w-11/12 flex flex-col justify-center  mx-auto">
       
        <div className="flex w-full flex-col justify-center  mx-auto">
          <SingleArtworkDisplayMolecule art={artwork} onClickBack={handleGoBack} />
          
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
