import { useState } from "react"
import Tabel from './Tabel'

function App() {


  const [isRefresh, setIsRefresh] = useState(true);
  const setRefresh = (status) => {
    setIsRefresh(status);
  };

  return (
      <div className="app-content"> 
          <Tabel setRefresh={setRefresh} isRefresh={isRefresh} />
      </div>
  );
}

export default App;