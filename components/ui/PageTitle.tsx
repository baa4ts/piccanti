import { useThemeColor } from '@/hooks/use-theme-color'
import { Text, View } from 'react-native'

export enum Posicion {
  izquierda = 'flex-start',
  centro = 'center',
  derecha = 'flex-end',
}

export type Props = {
  titulo: string
  alinear?: keyof typeof Posicion
}

export default function PageTitle({ titulo, alinear = 'centro' }: Props) {
  const texto = useThemeColor({}, 'texto')

  const justifyContent = Posicion[alinear]

  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent,
      }}
    >
      <Text
        style={{
          color: texto,
          fontFamily: 'Chopin',
          fontWeight: '900',
          fontSize: 24,
        }}
      >
        {titulo}
      </Text>
    </View>
  )
}
