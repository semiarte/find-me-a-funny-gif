import React, { useEffect, useState } from 'react'
import { View, TextInput, Button, StyleSheet, FlatList, Text, Image } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

export const SearchInput = () => {
  const [category, setCategory] = useState('alice')
  const [data, setData] = useState([]);
  
  const searchResults = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key==${category}&limit=10`)
    const json = await response.json();
    setData(json.data)
    console.log(json)
  }

  useEffect(() => {
    searchResults(category)
  }, [category])
  
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
        category: ''
    }
  })

  const onSubmit = () => {
        const { category } = getValues()
        setCategory(category)
        searchResults(category)
  }
    return (
    <View style={styles.form}>
        <Controller 
            control={control}
            render= {({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    placeholder='Type whatever'
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
            )}
            name='category'
        />
        <Button
            title='Search'
            onPress={ handleSubmit(onSubmit) }
        />
        <FlatList
          style={{ marginTop: 20 }}
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <View style={{ 
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20}}
            >
              <Image
                source={{
                  uri: `${item.images.downsized_medium.url}`,
                }}
                style={{ width: 120, height: 120 }}
              />
              <Text style={{ flex: 1, fontSize: 16, marginLeft: 15 }}>{item.title}</Text>
              
            </View>
          )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    form: {
        marginHorizontal: 20,
    },
    input : { 
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 12,
        paddingLeft: 12
    },
})
