import React, {useState, useEffect} from "react";
import socketIOClient from "socket.io-client";

const App = () => {
  const [response, setResponse] = useState(null);
  const endpoint = 'http://localhost:4001';

  useEffect(() => {
    const socket = socketIOClient(endpoint, { transport : ['websocket'] });
    socket.on("Task", data => setResponse({ response: data }));
  }, []);
  console.log(response)
   
    return (
      <>
        <div style={{ textAlign: "center" }}>
          {response
            ? <p>
                Latest Task: {response?.response?.task}
              </p>
            : <p>Loading...</p>}
        </div>
      </>
    );
  }

export default App;