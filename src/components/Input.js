import React, { useState } from 'react'
import { TextInput } from 'react-native'

export const Input = () => {
  const [text, setText] = useState('');
  return (
    <TextInput
        style={{ 
          height: 40,
          borderColor: 'gray',
          borderBottomWidth: 1,
          paddingVertical: 12,
          marginVertical: 12,
          marginHorizontal: 20,
        }}
        placeholder='Buscar gif'
        onChangeText={newText => setText(newText)}
        defaultValue={text}
    />
  )
}
