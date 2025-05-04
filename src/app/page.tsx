'use client';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
    // const token = (await cookies()).get('token')?.value;

    const token = true

    if (!token) {
      redirect('/auth/sign-in');
    } else {
      redirect('/journal');
    }

    return null;
}
