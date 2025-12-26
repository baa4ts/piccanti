import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import { useThemeColor } from '@/hooks/use-theme-color'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Chopin: require('./../assets/fonts/Chopin-Light.ttf'),
  })
  const background = useThemeColor({}, 'background')

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: background },
        headerShown: false,
      }}
    />
  )
}
