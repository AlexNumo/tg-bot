import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScheduleGet from 'Components/ScheduleGet/ScheduleGet';

function App() {

  return (
    <div className="App">
      <ScheduleGet />
      <div>
        <ToastContainer
          style={{marginTop: '55px'}}
          position="top-left"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
        />
      </div>
    </div>
  );
}

export default App;
