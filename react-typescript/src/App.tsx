import React, { useState } from "react";

function App() {
  const [val, setVal] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: {value}
    } = e;
    setVal(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`hello`, val);
  };
  return (
   <div>
     <form onSubmit={onSubmit}>
       <input type="text" placeholder="username" value={val} onChange={onChange} />
       <button>Login</button>
     </form>
   </div>
  );
}

export default App;
