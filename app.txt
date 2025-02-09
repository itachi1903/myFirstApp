import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, useColorScheme, StyleSheet, Text, View, Appearance, ScrollView, Image, FlatList } from 'react-native';
import { storyData } from './dummyData';
import Icon from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { styles } from './AppStyle';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.Header}>
        <Text style={{ fontSize: 20, color: "white", padding: 10 }}>Instagram</Text>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <Icon name="message1" size={20} color={"white"} />
          <Icon name="hearto" size={20} color={"white"} />
        </View>
      </View>
      {/* story components */}
      <View style={[styles.storyCan, { paddingLeft: 0 }]}>
        <View style={styles.storyCard}>
          <Image source={{ uri: "https://i.pinimg.com/474x/c2/ec/1f/c2ec1ffb5c4f2fd089796ec3baf71598.jpg" }} style={styles.profileImage} />
          <Text style={styles.storyText}>Hamza</Text>
        </View>
        <FlatList
          data={storyData}
          keyExtractor={item => item.username}
          renderItem={({ item }) => (
            <View style={styles.storyCard}>
              <Image source={{ uri: item.profile_image }} style={styles.profileImage} />
              <Text style={styles.storyText}>{item.username}</Text>
            </View>
          )}
          // numColumns={8}
          // columnWrapperStyle={{}}
          horizontal
        />
      </View>

      {/* post can start*/}
      <View style={{ paddingBlock: 50 }}>
        {/* post start */}
        <FlatList
          data={storyData}
          keyExtractor={item=>item.name}
          renderItem={({ item }) => (
            <View>
              {/* post header */}
              <View style={styles.postHeader}>
                <View style={styles.postHeader}>
                  <Image source={{ uri: item.profile_image }} style={styles.postProfile} />
                  <View>
                    <Text style={{ textTransform: "capitalize", fontSize: 20, color: "white" }}>{item.name}</Text>
                    <Text style={{ textTransform: "capitalize", fontSize: 15, color: "gray" }}>{item.username}</Text>
                  </View>
                </View>
                <Entypo name='dots-three-vertical' size={20} color={"white"} />
              </View>
              {/* post header end */}

              {/* post description */}
              <View style={styles.post}>
                <Text style={{ color: "white", textAlign: "center",width:"50%" }}>{item.post_description}</Text>
              </View>
              {/* like ,comment area */}
              <View style={{ paddingInline: 20 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
                  <View style={{ flexDirection: "row", alignItems: 'center', gap: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: 'center', gap: 5 }}>
                      <Icon name='hearto' size={20} color={"white"} />
                      <Text style={{ color: "white" }}>{item.no_of_likes}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center', gap: 5 }}>
                      <FontAwesome name='commenting-o' size={20} color={"white"} />
                      <Text style={{ color: "white" }}>{item.no_of_comments}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center', gap: 5 }}>
                      <FontAwesome name='share-square-o' size={20} color={"white"} />
                      <Text style={{ color: "white" }}>{item.no_of_shares}</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: 'center', gap: 5 }}>
                    <FontAwesome name='bookmark' size={20} color={"white"} />
                  </View>
                </View>
                {/* title of post */}
                <Text style={{ color: "white", marginTop: 10, marginBottom: 20 }}>
                  {item.post_title}
                </Text>
              </View>

            </View>
          )}
          ItemSeparatorComponent={<View style={{height:2,width:"50%",margin:'auto',backgroundColor:"#909090",marginBlock:10,marginBottom:20}}></View>}
        />

        {/* post end */}
      </View>
      {/* post can end */}

      <StatusBar style="light" />
    </ScrollView>
  );
}
