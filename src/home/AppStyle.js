import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
  },
  Header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center',
    paddingInline:10
  },
  storyCan: {
    paddingInline: 10,
    flexDirection:"row",
  },
  storyCard: {
    maxWidth: 50,
    padding: 10,
    marginInline: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2,
  }
  ,
  storyText: {
    color: "white",
    fontSize: 10,
    width: 100,
    textAlign: "center"
  },
  postHeader :{
    flexDirection:'row',
    gap:10,
    justifyContent:"space-between",
    alignItems:"center",
    paddingInline:10
  },
  profiledetail :{
    flexDirection:'row',
    gap:10,
    alignItems:"center"
  },
  postProfile: {
    width:50,
    height:50,
    borderRadius:100,
    borderColor:"white",
    borderWidth:2
  },
  post:{
    marginBlock:10,
    backgroundColor:"#323232",
    justifyContent:"center",
    alignItems:'center',
    minHeight:200
  }
});