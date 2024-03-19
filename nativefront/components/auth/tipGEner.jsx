import React, { useState, useRef } from "react";
import { View, StyleSheet, FlatList, Animated } from "react-native";
import Tips from "./tips";
import slides from "./slides";

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <Tips item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id.toString()}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
