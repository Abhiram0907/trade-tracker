'use client';

import { useState } from 'react';
import { getHealth } from '@/lib/api';

interface HealthResponse {
  message: string;
  status: number;
}

export default function Home() {
  const [data, setData] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getHealthStatus = async () => {
    try {
      const response = await getHealth();
      setData(response);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch health status');
      setData(null);
    }
  }

  return (
    <div>
      <button className='border border-black-300 rounded-md p-2 m-5' onClick={getHealthStatus}>Check Health</button>
      {error && <p>Error: {error}</p>}
      <p>Status: {data?.message}</p>
      <p>Code: {data?.status}</p>
    </div>
  );
}
