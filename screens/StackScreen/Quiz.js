import React, { useCallback, useState, useEffect } from "react";
import ModalStyle from "../../components/Modal";
import ProgressBar from "../../components/Progress";
import { ScrollView, StyleSheet, View } from "react-native";
import ButtonNavigation from "../../components/Button/ButtonNavigation";
import ButtonField from "../../components/Button/ButtonField";
import ButtonFieldRiview from "../../components/Button/ButtonFieldContainer";
import Finish from "../../pages/Finish";
import QuizStart from "../../pages/QuizStart";
import { corection } from "../../helpers/Functions";
import { BackGround, TextColorDark } from "../../Global/Color";
import BannerAdd from "../../components/Adds/BannerAdd";
import MathSymbol from "../../components/MathSymboles";
import interstitialAdd from "../../components/Adds/InterstitialAdd";
import CountDown from "react-native-countdown-component";
import { useNavigation } from "@react-navigation/native";
import RewardedAdd from "../../components/Adds/RewardedAdd";
import TextPrimary from "../../components/Text/TextPrimary";
import TextParagraph from "../../components/Text/TextParagraph";
import { heightPercentage, widthPercentage } from "../../Global/Dimensions";

export default function Quiz({ route }) {
  const { DB, level, isUsingMath, title } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progres, setProgres] = useState(1 / DB.length);
  const { question, answer, corectAnswer, pembahasan } = DB[currentIndex];

  const [buttonSelect, setButtonSelect] = useState({});
  const [isRiview, setIsRiview] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [grade, setGrade] = useState({});
  const [quizStart, setQuizStart] = useState(true);

  const [timer, setTimer] = useState(1);
  const [count, setCount] = useState(0);
  const [startCounting, setStartCounting] = useState(false);
  const navigation = useNavigation();

  const next = useCallback(() => {
    if (currentIndex === 10 && isRiview) RewardedAdd();
    if (currentIndex === DB.length - 1) {
      if (!isRiview) {
        setModalVisible(true);
      }
      return;
    }
    setCurrentIndex(currentIndex + 1);
    setProgres(progres + 1 / DB.length);
  }, [currentIndex]);

  const back = useCallback(() => {
    if (currentIndex <= 0) return;
    setCurrentIndex(currentIndex - 1);
    setProgres(progres - 1 / DB.length);
  }, [currentIndex]);

  useEffect(() => {
    if (isFinish) setGrade(corection(DB, buttonSelect));

    navigation.setOptions({
      headerRight: () =>
        startCounting &&
        !isFinish &&
        !isRiview && (
          <CountDown
            style={{ marginRight: widthPercentage(5) }}
            until={60 * timer}
            size={14}
            running={startCounting}
            onFinish={() => setIsFinish(true)}
            digitStyle={{ backgroundColor: BackGround }}
            digitTxtStyle={{ color: TextColorDark }}
            timeToShow={["H", "M", "S"]}
            timeLabels={{ m: "", s: "" }}
          />
        ),
    });
  }, [startCounting, isFinish, isRiview]);

  return quizStart ? (
    <QuizStart
      level={level}
      jumlahSoal={DB.length}
      onPress={() => {
        if (count === 0) {
          alert("atur waktu");
          return;
        }
        setTimer(count);
        setStartCounting(true);
        setQuizStart(false);
      }}
      title={title}
      setTimer={setCount}
      timer={count}
    />
  ) : isFinish ? (
    <Finish
      progress={grade.benar / DB.length}
      percent={((grade.benar / DB.length) * 100).toFixed(0)}
      grade={grade}
      onPress={() => {
        setIsRiview(true);
        setIsFinish(false);
        setProgres(1 / DB.length);
        setCurrentIndex(0);
      }}
    />
  ) : (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          marginTop: heightPercentage(2),
          alignItems: "center",
        }}
      >
        <View style={styles.progressContainer}>
          <ProgressBar progress={progres} />
          <TextPrimary style={{ paddingLeft: widthPercentage(5) }}>
            {`${currentIndex + 1} / ${DB.length}`}
          </TextPrimary>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <BannerAdd size="banner" />
        </View>

        {/* questions */}

        <View style={{ marginTop: heightPercentage(10) }}>
          {isUsingMath ? (
            <MathSymbol symbol={question} />
          ) : (
            <TextParagraph>{question}</TextParagraph>
          )}
        </View>

        {isRiview && (
          <View style={{ marginTop:heightPercentage(5) }}>
            <TextPrimary style={{ marginBottom: heightPercentage(1) }}>
              Pembahasan :
            </TextPrimary>

            {isUsingMath ? (
              <MathSymbol symbol={pembahasan} />
            ) : (
              <TextParagraph>{pembahasan}</TextParagraph>
            )}
          </View>
        )}

        {/* choices field   */}

        <View style={styles.radioButtonContainer}>
          {!isRiview ? (
            <ButtonField
              isUsingMath={isUsingMath}
              answer={answer}
              index={currentIndex}
              buttonSelect={buttonSelect}
              setButtonSelect={setButtonSelect}
            />
          ) : (
            <ButtonFieldRiview
              isUsingMath={isUsingMath}
              answer={answer}
              index={currentIndex}
              buttonSelect={buttonSelect}
              corectAnswer={corectAnswer}
            />
          )}
        </View>

        {/* modal */}

        {modalVisible && (
          <ModalStyle
            yes={() => {
              setModalVisible(!modalVisible);
              setIsFinish(true);
              setGrade(corection(DB, buttonSelect));
              setStartCounting(!startCounting);
            }}
            no={() => setModalVisible(!modalVisible)}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          />
        )}
      </ScrollView>
      <ButtonNavigation next={next} back={back} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFFBFF",
  },
  scroll: {
    paddingTop: heightPercentage(1),
    paddingLeft: widthPercentage(3),
    paddingRight: widthPercentage(3),
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: widthPercentage(3),
    marginBottom: heightPercentage(3),
  },
  radioButtonContainer: {
    marginVertical: heightPercentage(3),
  },
});
