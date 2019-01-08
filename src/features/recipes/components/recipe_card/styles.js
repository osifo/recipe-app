import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 0
  },

  banner: {
    flex: 1,
    resizeMode: "cover",
    height: 180,
    padding: 0,
    marginBottom: 5
  },

  cardContainer: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 0,
    margin: 7.5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "transparent"
  },

  imageWrap: {
    margin: 0,
    backgroundColor: "#fff"
  },

  divider: {
    height: 1,
    backgroundColor: "#efefef",
    margin: 5
  },

  metadata: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10
  },

  smallerTextBold: {
    fontSize: 12,
    fontWeight: "600"
  },

  smallText: {
    fontSize: 14
    // textOverflow: "ellipsis"
  },

  separator: {
    marginLeft: 5,
    marginRight: 5
  }
});
