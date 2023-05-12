import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Error } from './pages';
import { AllJobs, Add, ProtectedRoute, SharedLayout } from './pages/dashboard';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<AllJobs />} />
            <Route path="about" element={<About />} />
            <Route
              path="add-job"
              element={
                <ProtectedRoute>
                  <Add />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        pauseOnFocusLoss={false}
        transition={Flip}
      />
    </>
  );
}

export default App;
