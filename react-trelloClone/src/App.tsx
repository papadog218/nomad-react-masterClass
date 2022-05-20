import React from "react";
import { useRecoilState } from "recoil";
import { minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const onChangeMinutes = (e: React.FormEvent<HTMLInputElement>) => {
    setMinutes(e.currentTarget.value);
  }

  return (
    <div>
      <input value={minutes} onChange={onChangeMinutes} type="number" placeholder="Minutes" />
      <input type="number" placeholder="Hours" />
    </div>
  );
}

export default App;