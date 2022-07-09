import React, { useState, useEffect, useCallback } from "react";
import { FlatList, RefreshControl } from "react-native";
import List from "../../components/List";
import {
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
  getDoc,
  doc,
  orderBy,
} from "firebase/firestore";
import { db } from "../../helpers/firebase";
import { useNavigation } from "@react-navigation/native";
import Badgeds from "../../components/Badgeds";
import NetInfo from "@react-native-community/netinfo";
import InternetNotConnect from "../../pages/InternetNotConnect";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import Layout from "../../Global/Layout";

export default function ListQuiz() {
  const [isDataAvaliable, setIsDataAvaliable] = useState(false);
  const [dataCollections, setDataCollections] = useState([]);
  const [isOffline, setIsOfflineStatus] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [badged, setBadged] = useState();
  const dbCollections = collection(db, "SoalUTBK");
  const docRef = doc(db, "general", "badged");
  const navigation = useNavigation();

  useEffect(() => {
    const getNetInfo = NetInfo.addEventListener((state) => {
      setIsOfflineStatus(!state.isConnected || !state.isInternetReachable);
    });
    if (!isOffline) getDocuments();
    return () => getNetInfo();
  }, [isOffline]);

  const extractData = (snapshoot) => {
    const data = [];
    snapshoot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    setDataCollections(data);
    setIsDataAvaliable(true);
  };

  const getDocuments = async () => {
    const document = await getDoc(docRef);
    setBadged(document.data().badgeds);
    const q = query(dbCollections, orderBy("meta.title", "asc"));
    const snapshoot = await getDocs(q);
    extractData(snapshoot);
  };

  const sorting = (item) => {
    if (item === "Semua") {
      getDocuments();
    } else {
      const q = query(dbCollections, where("meta.category", "==", item));
      onSnapshot(q, (querySnapshot) => {
        extractData(querySnapshot);
      });
    }
  };

  const navigateToQUiz = (item) => {
    navigation.navigate("Quiz", {
      DB: item.soal,
      level: item.meta.level,
      isUsingMath: item.meta.usingMath,
      title: item.meta.title,
    });
  };

  const renderItem = ({ item }) => {
    return (
      <List
        title={item.meta.title}
        soal={item.soal.length}
        icon={item.meta.icon}
        level={item.meta.level}
        newListItem={item.meta.isNewItem}
        onPress={() => navigateToQUiz(item)}
      />
    );
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setDataCollections([]);
    setBadged("");
    getDocuments().then(() => setRefreshing(false));
  }, []);

  return isOffline ? (
    <InternetNotConnect />
  ) : (
    <>
      {!isDataAvaliable && <LoadingSkeleton />}

      {/* List Item */}

      {isDataAvaliable && (
        <Layout>
          <Badgeds sorting={sorting} isRefresh={refreshing} badged={badged} />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dataCollections}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </Layout>
      )}
    </>
  );
}
