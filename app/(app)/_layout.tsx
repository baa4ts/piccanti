import { useThemeColor } from '@/hooks/use-theme-color'
import { Tabs } from 'expo-router'
import { Save, ScanSearch, Sparkles, Wrench } from 'lucide-react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Layout() {
  const insets = useSafeAreaInsets()
  const background = useThemeColor({}, 'background')
  const iconColor = useThemeColor({}, 'acento')
  return (
    <Tabs
      screenOptions={{
        animation: 'shift',
        headerShown: false,
        tabBarShowLabel: false,
        sceneStyle: { backgroundColor: background },
        tabBarStyle: {
          height: 60 + insets.bottom,
          backgroundColor: background,
          borderTopColor: background,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarItemStyle: { marginTop: 18 },
        tabBarActiveTintColor: iconColor,
      }}
    >
      {/* Ventana para novedades */}
      <Tabs.Screen
        name='novedades'
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Sparkles color={color} size={focused ? size + 5 : size} />
          ),
        }}
      />

      {/* Ventana para realizar busquedas */}
      <Tabs.Screen
        name='buscar'
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <ScanSearch color={color} size={focused ? size + 5 : size} />
          ),
        }}
      />

      {/* Ventana para guardados */}
      <Tabs.Screen
        name='guardados'
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Save color={color} size={focused ? size + 5 : size} />
          ),
        }}
      />

      {/* Ventana de configuracion */}
      <Tabs.Screen
        name='configuracion'
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Wrench color={color} size={focused ? size + 5 : size} />
          ),
        }}
      />
    </Tabs>
  )
}
