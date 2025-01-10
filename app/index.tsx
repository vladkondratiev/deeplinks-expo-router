import React from 'react';
import { Stack, Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import Head from 'expo-router/head';


import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Galaxies Video Page</title>
        <meta name="description" content="This could be awesome." />
      </Head>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />
        <Link href={'/details/Simon'} asChild>
          <Button title="Show Details" style={styles.button} />
        </Link>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20,
  },
})
