import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, Dimensions, FlatList } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const CircularCarousel = ({ data, autoScrollSpeed = 0.5 }) => {
  const loopedData = [...data, ...data, ...data]; // simulate infinite loop
  const scrollX = useSharedValue(data.length * width); // start in middle
  const [currentIndex, setCurrentIndex] = useState(0);

  const flatListRef = React.useRef();

  // Continuous auto-scroll
  useEffect(() => {
    let frameId;
    const autoScroll = () => {
      scrollX.value = withTiming(
        scrollX.value + autoScrollSpeed,
        { duration: 16 },
        () => {
          frameId = requestAnimationFrame(autoScroll);
        },
      );
    };
    frameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(frameId);
  }, []);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
    onMomentumEnd: event => {
      // Optional: can update index
    },
  });

  const onScrollEnd = () => {
    const index = Math.round((scrollX.value % (data.length * width)) / width);
    setCurrentIndex(index);
  };

  return (
    <View>
      <AnimatedFlatList
        ref={flatListRef}
        data={loopedData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        onScroll={scrollHandler}
        onMomentumScrollEnd={onScrollEnd}
        renderItem={({ item }) => (
          <View
            style={{
              width,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 32 }}>{item}</Text>
          </View>
        )}
      />

      {/* Pagination Dots */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10,
        }}
      >
        {data.map((_, i) => (
          <View
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              margin: 5,
              backgroundColor: currentIndex === i ? 'black' : 'gray',
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default CircularCarousel;

const styles = StyleSheet.create({});
