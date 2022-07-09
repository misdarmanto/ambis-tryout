import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import BerhitungCepat from "../../Functions/BerhitungCepat";

const BerhitungCepatScreen = () => {
  const [question, setQuestion] = useState({});
  const getValue = () => {
    const obj = new BerhitungCepat();
    setQuestion(obj.addValue());
  };

  console.log(question.value.x);
  useEffect(() => {
    getValue();
  }, []);
  return (
    <View>
      <Text>
        {question.value.x} + {question.value.y} {question.result}
      </Text>
      <Button title="get value" onPress={getValue} />
    </View>
  );
};

export default BerhitungCepatScreen;
