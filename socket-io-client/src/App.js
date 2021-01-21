import React, {useState, useEffect} from "react";
import socketIOClient from "socket.io-client";

const App = () => {
  const [response, setResponse] = useState(null);
  const endpoint = 'http://localhost:4001';

  useEffect(() => {
    const socket = socketIOClient(endpoint, { transport : ['websocket'] });
    socket.on("FromAPI", data => setResponse({ response: data }));
  })
  console.log(response)
   
    return (
      <div style={{ textAlign: "center" }}>
        {response
          ? <p>
              The temperature in {response?.response?.location?.name} is: {response?.response?.current?.temp_c} °C
            </p>
          : <p>Loading...</p>}
      </div>
    );
  }

export default App;