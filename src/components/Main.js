import React from 'react'
import { View } from 'react-native'
import { AppBar } from './AppBar'
import { SearchInput } from './SearchInput'
// import { List } from './List'

export const Main = () => {
  return (
    <View style={{ flex: 1 }}>
        <AppBar />
        <SearchInput />
        {/* <List /> */}
    </View>
  )
}
