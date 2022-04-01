import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modalView: {
    position: "absolute",
    height: "93.9%",
    width: "100%",
    top: "6%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  topGreyLine: {
    position: "absolute",
    width: "13.6%",
    height: 3,
    borderRadius: 12,
    backgroundColor: "#C4C4C4",
    top: "1.6%",
    left: "43.2%",
  },
  exitPressable: {
    position: "absolute",
    top: "1.8%",
    right: "4.2%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: 36,
    height: 19,
  },
  modalTitle: {
    position: "absolute",
    top: "11.4%",
    left: "8%",
    width: "81.3%",
  },
  subText1: {
    position: "absolute",
    top: "19%",
    left: "8%",
    width: "81.3%",
  },
  subText2: {
    position: "absolute",
    top: "26.7%",
    left: "8%",
    width: "81.3%",
  },
  emailInput: {
    position: "absolute",
    top: "32.6%",
    left: "7.7%",
    width: "84.5%",
    height: "5.1%",
    borderColor: "#A9A9A9",
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 5,
    paddingLeft: "5%",
    backgroundColor: "#F2F2F2",
  },
  emailInputTyping: {
    position: "absolute",
    top: "32.6%",
    left: "7.7%",
    width: "84.5%",
    height: "5.1%",
    borderColor: "#A9A9A9",
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 5,
    paddingLeft: "5%",
    backgroundColor: "#FFFFFF",
  },
  verifyInput: {
    position: "absolute",
    top: "32.6%",
    left: "7.7%",
    width: "84.5%",
    height: "5.1%",
    borderColor: "#A9A9A9",
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 5,
    paddingLeft: "5%",
    backgroundColor: "#F2F2F2",
  },
  verifyInputTyping: {
    position: "absolute",
    top: "32.6%",
    left: "7.7%",
    width: "84.5%",
    height: "5.1%",
    borderColor: "#A9A9A9",
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 5,
    paddingLeft: "5%",
    backgroundColor: "#FFFFFF",
  },
  setNewInput: {
    position: "absolute",
    top: "22.5%",
    left: "7.7%",
    width: "84.5%",
    height: "5.1%",
    borderColor: "#A9A9A9",
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 5,
    paddingLeft: "5%",
    backgroundColor: "#F2F2F2",
  },
  setNewInputTyping: {
    position: "absolute",
    top: "22.5%",
    left: "7.7%%",
    width: "84.5%",
    height: "5.1%",
    borderColor: "#A9A9A9",
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 5,
    paddingLeft: "5%",
    backgroundColor: "#F2F2F2",
  },
  confirmNewInput: {
    position: "absolute",
    top: "33.4%",
    left: "7.7%",
    width: "84.5%",
    height: "5.1%",
    borderColor: "#A9A9A9",
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 5,
    paddingLeft: "5%",
    backgroundColor: "#F2F2F2",
  },
  confirmNewInputTyping: {
    position: "absolute",
    top: "33.4%",
    left: "7.7%",
    width: "84.5%",
    height: "5.1%",
    borderColor: "#A9A9A9",
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 5,
    paddingLeft: "5%",
    backgroundColor: "#F2F2F2",
  },
  resetContinuePressable: {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: "50%",
    left: "7.4%",
    width: "85%",
    height: "6.1%",
    backgroundColor: "#A9A9A9",
    borderRadius: 5,
  },
  resetContinuePressableAllowed: {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: "50%",
    width: "85%",
    left: "7.4%",
    height: "6.1%",
    backgroundColor: "#253C85",
    borderRadius: 5,
  },
  resendPressable: {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: "52.2%",
    left: "7.7%",
    width: "40.8%",
    height: "6.1%",
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#526DC2",
    borderRadius: 5,
  },
  verifyContinuePressable: {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: "52.2%",
    right: "7.7%",
    width: "40.8%",
    height: "6.1%",
    backgroundColor: "#A9A9A9",
    borderRadius: 5,
  },
  verifyContinuePressableAllowed: {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: "52.2%",
    right: "7.7%",
    width: "40.8%",
    height: "6.1%",
    backgroundColor: "#253C85",
    borderRadius: 5,
  },
  closePressable: {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: "45%",
    width: "84.5%",
    left: "7.7%",
    height: "6.1%",
    backgroundColor: "#253C85",
    borderRadius: 5,
  },
  mustBeCharacter: {
    position: "absolute",
    top: "27%",
    right: "9.3%",
    color: "#A9A9A9",
    fontFamily: "Avenir",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    height: 16,
    textAlign: "left",
  },
  pwMustMatch: {
    position: "absolute",
    top: "37%",
    right: "9.3%",
    color: "#A9A9A9",
    fontFamily: "Avenir",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    height: 16,
    textAlign: "left",
  },
  successTitle: {
    position: "absolute",
    top: "25.9%",
    left: "7.7%",
    width: "84%",
  },
  successSubTitle: {
    position: "absolute",
    top: "33.6%",
    left: "7.7%",
    width: "84%",
  },
  whiteText: {
    color: "#FFFFFF",
  },
  greyText: {
    color: "#F2F2F2",
  },
  closeText: {
    color: "#526DC2",
  },
  labelPassword: {
    position: "absolute",
    left: "7.7%",
    top: "19.3%",
  },
  labelConfirmPassword: {
    position: "absolute",
    left: "7.7%",
    top: "30.2%",
  },
  characterCheckIcon: {
    position: "absolute",
    top: "42%",
    left: "8%",
    display: "flex",
    alignItems: "center",
    height: "2%",
    justifyContent: "center",
  },
  characterCheckText: {
    position: "absolute",
    top: "42%",
    left: "13.3%",
    display: "flex",
    alignItems: "center",
    height: "2%",
  },
  uppercaseCheck: {
    position: "absolute",
    top: "42%",
    left: "8%",
    display: "flex",
    alignContent: "center",
    flexDirection: "row",
    marginVertical: 8,
  },
});
