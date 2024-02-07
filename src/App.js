import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [time, setTime] = useState({ hour: 0, minute: 0, seconds: 0 });

  useEffect(() => {
    const currentTime = new Date();
    setTime({
      hour: currentTime.getUTCHours(),
      minute: currentTime.getUTCMinutes(),
      seconds: currentTime.getUTCSeconds(),
    });
  }, []);
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <div className="clock"></div>
    </div>
  );
}

export default App;
