import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, Text, View } from 'react-native';

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View className='w-[320px] border-[4px] border=[#ffd33d] rounded-[18px] h-[68px] mx-[20px] items-center justify-center padding-[3px]'>
        <Pressable
          className='rounded-[10px] w-full h-full items-center justify-center flex-row bg-white'
          onPress={onPress}
        >
          <FontAwesome
            name='picture-o'
            size={18}
            color='#25292e'
            className='pr-[8px]'
          />
          <Text className='text-base text-[#25292e]'>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View className='w-[320px] h-[68px] mx-[20px] items-center justify-center padding-[3px]'>
      <Pressable
        className='rounded-[10px] w-full h-full items-center justify-center flex-row'
        onPress={onPress}
      >
        <Text className='text-white text-base'>{label}</Text>
      </Pressable>
    </View>
  );
}
