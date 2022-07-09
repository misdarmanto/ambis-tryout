import React, { memo, useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BackGround, Primary, TextColorDark } from "../../Global/Color";
import { heightPercentage, widthPercentage} from "../../Global/Dimensions";


const ButtonNavigation = ({ next, back }) => {
  const [active, setActive] = useState("");
 
  return (
    <View style={styles.buttonContainer}>
      <ButtonToogle
        onClick={() =>{
           back()
           setActive("arrowleft")
        }}
        name="arrowleft"
        active={active}
      />
      <ButtonToogle
        onClick={() => {
          next()
          setActive("arrowright")
        }}
        name="arrowright"
        active={active}
      />
    </View>
  );
};

const ButtonToogle = (props) => {
  const { active, onClick, name } = props;

  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        styles.button,
        { backgroundColor: active === name ? Primary : BackGround },
      ]}
    >
      <AntDesign
        name={name}
        size={25}
        color={active === name ? "#FFF" : TextColorDark}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    height: heightPercentage(9),
    paddingLeft: widthPercentage(2),
    paddingRight: widthPercentage(2),
    borderTopWidth: 1,
    borderColor: "#CCC",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: heightPercentage(7),
    width: widthPercentage(25),
    borderRadius: 30,
  },
});

export default memo(ButtonNavigation);
