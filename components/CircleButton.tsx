import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, View } from 'react-native';

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View
      style={styles.circleButtonContainer}
      className='w-[84px] h-[84px] mx-[60px] border-[4px] border-[#ffd33d] rounded-[42px] p-[3px]'
    >
      <Pressable
        className='flex-1 items-center justify-center rounded-[42px] bg-white'
        onPress={onPress}
      >
        <MaterialIcons name='add' size={38} color='#25292e' />
      </Pressable>
    </View>
  );
}
