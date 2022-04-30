import * as React from "react";
import { useState, useRef, useContext, useEffect } from "react";
import { View, Text, Pressable, ScrollView, TextInput } from "react-native";
import RectangularButton from "../../components/RectangularButton/RectangularButton";
import { AuthenticatedUserContext } from "../../context/userContext";
import { getUser } from "../../firebase/firestore/user";
import { getFamily } from "../../firebase/firestore/family";
import { Z_DEFAULT_STRATEGY } from "zlib";
import globalStyles from "../../globalStyles";
import styles from "../Invite/styles";
import SvgIcon from "../../../assets/SvgIcon";

const FamilyNameScreen = ({ navigation }: any) => {
  const { userUID, setUserUID } = useContext(AuthenticatedUserContext);
  const [familyName, setFamilyName] = useState("");

  const [isFocused, changeFocus] = React.useState(true);
  const handleFocus = () => changeFocus(false);
  const handleBlur = () => changeFocus(true);

  return (
    <View style={styles.container}>
      <View style={styles.separator2} />
      <Text style={styles.title1}>You're in charge!</Text>
      <Text style={styles.title2}>Create your family name</Text>
      <View style={styles.innerContainer2}>
        <Text style={globalStyles.overline2}>family name</Text>
        <TextInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={[
            styles.input,
            {
              borderColor: isFocused ? "#A9A9A9" : "#526DC2",
              borderWidth: 1,
              backgroundColor: familyName ? "#ffffff" : "#f2f2f2",
            },
          ]}
          value={familyName}
          placeholder="Your surname"
          onChangeText={(newName) => setFamilyName(newName)}
          placeholderTextColor="#A9A9A9"
        />
      </View>
      <RectangularButton
        onPress={() => navigation.navigate("LoginStack", { screen: "Invite" })}
        text="done"
        buttonStyle={{ backgroundColor: "#253C85" }}
        textStyle={{ color: "#FFF" }}
      />
      <View style={styles.separator} />
    </View>
  );
};

export default FamilyNameScreen;
