import { StyleSheet } from "react-native";

export default StyleSheet.create({
  profileName: {
    position: "absolute",
    top: "24%",
    textAlign: "center",
  },
  profileImage: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  editPressable: {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    height: "5%",
    top: "30%",
    left: "8%",
    backgroundColor: "#F2F2F2",
  },
  resetPressable: {
    display: "flex",
    position: "absolute",
    top: "30%",
    right: "8%",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    height: "5%",
    backgroundColor: "#F2F2F2",
  },
  profileFields: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "8%",
    top: "39.6%",
    height: "23%",
    justifyContent: "space-between",
  },
  profileValues: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "37%",
    top: "39.6%",
    height: "23%",
    justifyContent: "space-between",
  },
  logoutPressable: {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: "77%",
    width: "40%",
    height: "5%",
    backgroundColor: "#C4C4C4",
  },
  profileImagePressable: {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: "6%",
    width: "37%",
    height: "16%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#F2F2F2",
    borderWidth: 2,
    borderStyle: "solid",
  },
  modalVisibleContainer: {
    flex: 1,
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    opacity: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  downArrow: {
    position: 'absolute',
    bottom: '6%',
  },
});
