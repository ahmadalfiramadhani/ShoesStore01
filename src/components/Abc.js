import { useState } from "react"
import Form from './Form'

function App() {


  const [isRefresh, setIsRefresh] = useState(true);
  const setRefresh = (status) => {
    setIsRefresh(status);
  };

  return (
      <div className="app-content"> 
          <Form setRefresh={setRefresh} isRefresh={isRefresh} />
      </div>
  );
}

export default App;