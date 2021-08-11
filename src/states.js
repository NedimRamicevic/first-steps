import React, { useState, useEffect } from "react";

export function Clock() {
  const [date, setDate] = useState(new Date());
  const tick = () => setDate(new Date());

  //   useEffect(() => {
  //     setInterval(tick, 1000);
  //   });

  return (
    <div>
      <h1>{date}</h1>
    </div>
  );
}
