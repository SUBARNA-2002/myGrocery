import * as React from 'react';
import {
  Text,
  View,
  useWindowDimensions,
  StyleSheet,
  Image,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

const defaultDataWith6Colors = [
  '#B0604D',
  '#899F9C',
  '#B3C680',
  '#5C6265',
  '#F5D399',
  '#F1F1F1',
];
const date = [
  {
    id: 1,
    Image: require('../../assets/images/BigBanner2.png'),
  },
  {
    id: 2,
    Image: require('../../assets/images/BigBanner.png'),
  },
];

// Animated pagination dot component
const Dot = ({ index, progress }) => {
  const aStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      progress.value,
      [index - 1, index, index + 1],
      [0.5, 1, 0.5],
    );
    const scale = interpolate(
      progress.value,
      [index - 1, index, index + 1],
      [1, 1.4, 1],
    );
    return {
      opacity,
      transform: [{ scale }],
      backgroundColor: '#333',
    };
  });

  return <Animated.View style={[styles.dot, aStyle]} />;
};

function Index() {
  const progress = useSharedValue(0);
  const window = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Carousel
        width={window.width}
        height={350}
        data={date}
        autoPlay
        autoPlayInterval={2000}
        loop
        pagingEnabled
        snapEnabled
        onProgressChange={progress}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.card,
              // {
              //   backgroundColor:
              //     defaultDataWith6Colors[index % defaultDataWith6Colors.length],
              // },
            ]}
          >
            <Image
              source={item.Image}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
        )}
      />

      {/* Dots pagination
      <View style={styles.paginationWrapper} pointerEvents="none">
        {date.map((_, i) => (
          <Dot key={i} index={i} progress={progress} />
        ))}
      </View> */}
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    // borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    color: '#ae1d1dff',
    fontWeight: '700',
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 2,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 6,
  },
});
