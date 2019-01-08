import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },

  loaderWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  containerWrap: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15
  },

  container: {
    alignItems: "stretch",
    padding: 0
  },

  listContainer: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 0
  },

  listingWrapper: {
    flex: 1,
    backgroundColor: "#fff"
  },

  listHeader: {
    fontSize: 18,
    marginTop: 15,
    fontWeight: "300"
  },

  listSubHeader: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "100"
  },

  loadMoreTrigger: {
    backgroundColor: "#ff5a5f",
    borderColor: "#ff5a5f",
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 20
  },

  loadMoreText: {
    fontSize: 12
  }
});
