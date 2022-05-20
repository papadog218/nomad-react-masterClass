import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const onChangeMinutes = (e: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+e.currentTarget.value);
  }
  const hours = useRecoilValue(hourSelector);

  return (
    <div>
      <input value={minutes} onChange={onChangeMinutes} type="number" placeholder="Minutes" />
      <input type="number" placeholder="Hours" value={hours} />
    </div>
  );
}

export default App;