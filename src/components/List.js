import { useFetch } from "../hooks/useFetch";
import { StyleSheet, FlatList, Text, Image, ActivityIndicator, View, } from "react-native"

export const List = () => {
  
  const {data, isLoading} = useFetch()
  
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    }
})
