import { Route, Routes } from 'react-router-dom';
import Studio from './pages/Studio/Studio';
import { useAppSelector } from './hooks/use-app-selector';
import { useEffect } from 'react';
import { useLazyGetCanvasesQuery } from './store/api/canvas-slice';
import Loader from './components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { setStage } from './store/slices/frame-slice';

function App() {
  const { stage } = useAppSelector((state) => state.frame);
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [getCanvases, { isLoading }] = useLazyGetCanvasesQuery();

  useEffect(() => {
    if (!isLoggedIn || stage.id) {
      return;
    }

    getCanvases({ skip: 0, take: 1 })
      .unwrap()
      .then(({ canvases, count }) => {
        if (!count || !canvases.length) {
          return;
        }
        const firstStage = canvases[0];
        dispatch(setStage({ ...firstStage }));
      })
      .catch((err) => console.error(err));
  }, [isLoggedIn]);

  return isLoading ? (
    <Loader isFullScreen />
  ) : (
    <Routes>
      <Route path="/" element={<Studio />} />
      </Routes>
      
    </Routes>
  );
}

export default App;
