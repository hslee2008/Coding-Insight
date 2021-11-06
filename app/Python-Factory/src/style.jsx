import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  padsix: { padding: 6 },
  padten: { padding: 10 },
  margin: { margin: 40 },
  marginten: { margin: 10 },

  flexrow: { flexDirection: "row" },
  title: { fontSize: 30 },
  text: { fontSize: 10 },
  center: { justifyContent: "center", alignContent: "center" },
  view: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  image: { width: 100, height: 100 },
  back: { backgroundColor: "rgba(0,0,0,0)" },
  bar: { flexDirection: "row", justifyContent: "space-evenly" },
  scrollview: { alignContent: "center", marginTop: 10 },
  bar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 0.08,
    backgroundColor: "black",
  },
  bartwo: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 0.06,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  progress: { position: "absolute", width: "100%", height: 5, bottom: 0 },
  icon: {
    position: "absolute",
    backgroundColor: "white",
    right: 0,
    bottom: 0,
  },
  fab: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 10,
    backgroundColor: "white",
  },
  fab2: {
    position: "absolute",
    bottom: 0,
    left: 0,
    margin: 10,
    backgroundColor: "white",
  },
});

export default styles;
