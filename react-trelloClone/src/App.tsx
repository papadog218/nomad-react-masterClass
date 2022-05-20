import React from "react";
import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const onChangeMinutes = (e: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+e.currentTarget.value);
  }
  const [hours, setHours] = useRecoilState(hourSelector);
  const onHoursChange = (e: React.FormEvent<HTMLInputElement>) => {
    setHours(+e.currentTarget.value);
  }

  return (
    <div>
      <input type="number" placeholder="Minutes" onChange={onChangeMinutes} value={minutes} />
      <input type="number" placeholder="Hours" onChange={onHoursChange} value={hours} />
    </div>
  );
}

export default App;