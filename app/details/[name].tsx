import React from 'react';
import Head from 'expo-router/head';
import { useLocalSearchParams } from 'expo-router';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export async function generateStaticParams(): Promise<Record<string, string>[]> {
  return [
    { name: 'Vladyslav' },
    { name: 'Simon' },
    { name: 'Anna' },
    { name: 'Evan' },
  ]
}

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <Head>
        <title>My Details for {name}</title>
        <meta name="description" content="This could be awesome." />
      </Head>
      <Container>
        <ScreenContent path="screens/details.tsx" title={`Showing details for user ${name}`} />
      </Container>
    </>
  );
}
