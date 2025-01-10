import React from 'react';
import { Stack } from 'expo-router';

export const unstable_settings = {
  intialRouteName: 'index',
};

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "overview" }} />
      <Stack.Screen name="details/[name]" options={{ title: "Details" }} />
    </Stack>
  );
}
