import { Image } from 'expo-image';
import { Platform, SafeAreaView, StyleSheet, View, Text, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';

export default function HomeScreen() {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
  <SafeAreaView className='flex-1 flex gap-4 mx-4'>
    <View className='flex flex-row justify-between'>
      <Text className='font-bold'>{date.toLocaleString()}</Text>
      <Pressable onPress={() => setShowDatePicker(true)}>
        <Text className='text-grey-500'>选择日期</Text>
      </Pressable>
    </View>
    {showDatePicker &&
      <DateTimePicker
        value={date}
        mode='date'
        display='inline'
        onChange={(event, selectedDate) => {
          if(selectedDate){
            setDate(selectedDate)
            setShowDatePicker(false)
          }
        }}
      />
    }
  </SafeAreaView>
)
}

const styles = StyleSheet.create({

});
