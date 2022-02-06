import * as React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { Card as RNPCard } from 'react-native-paper';
import { Text } from './Text';
import { getColorStatus, TextSizes } from '../appearance';
import { LetterStatus } from '../types';
import { PreferencesContext } from '../context';
import { createFlipAnim } from '../utils';

export interface LetterCardProps {
  letter: string;
  size?: keyof typeof TextSizes;
  status?: LetterStatus;
}

export const Card: React.FC<LetterCardProps> = ({ letter, size, status }) => {
  const { darkMode } = React.useContext(PreferencesContext);
  const colorTheme = getColorStatus(darkMode);
  return (
    <RNPCard style={[styles.container, colorTheme[status]]} elevation={3}>
      <RNPCard.Content>
        {letter === '' ? (
          <Text bold size='lg' style={StyleSheet.flatten([styles.text, { opacity: 0 }])}>
            X
          </Text>
        ) : (
          <Text
            bold
            size={size ? size : 'xl'}
            style={StyleSheet.flatten([styles.text, { color: colorTheme[status].color }])}
          >
            {letter.toUpperCase()}
          </Text>
        )}
      </RNPCard.Content>
    </RNPCard>
  );
};

export const LetterCard: React.FC<LetterCardProps> = (props) => {
  const flipAnim = createFlipAnim(new Animated.Value(0));

  // React.useEffect(() => {
  //     flipAnim.flipCard()
  // }, [props.status]);

  return (
    <View>
      <Animated.View style={[styles.flip, flipAnim.frontAnimatedStyle]}>
        <Card {...props} />
      </Animated.View>
      <Animated.View style={[styles.flip, styles.flipBack, flipAnim.backAnimatedStyle]}>
        <Card {...props} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
  },
  text: {
    lineHeight: TextSizes.xxl,
  },
  flip: {
    backfaceVisibility: 'hidden',
  },
  flipBack: {
    position: 'absolute',
    top: 0,
  },
});
