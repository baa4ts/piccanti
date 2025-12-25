import { useThemeColor } from '@/hooks/use-theme-color'
import { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export type PropsContenedorPage = {
  children: ReactNode
}

export default function ContenedorPage({ children }: PropsContenedorPage) {
  const background = useThemeColor({}, 'background')

  return <SafeAreaView style={{ flex: 1, backgroundColor: background }}>{children}</SafeAreaView>
}
