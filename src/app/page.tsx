'use client';

import { useState } from 'react';

interface HealthResponse {
  message: string;
  status: number;
}

export default function Home() {

  const [data, setData] = useState<HealthResponse | null>(null);

  function getHealthStatus(): void {
    fetch('https://trade-tracker-backend-kz74.onrender.com/test')
    .then(response => response.json())
    .then(data => {
      setData(data);
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching health status:', error);
    });
  }

  return (
    <div>
      <button className='border border-black-300 rounded-md p-2 m-5' onClick={getHealthStatus}>Test Health</button>
      <p>Status: {data?.message}</p>
      <p>Code: {data?.status}</p>
    </div>
  );
}
