import React from 'react';
import { useTheme } from 'react-native-paper';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel } from 'victory-native';
import { GutterSizes, TextSizes } from '../appearance';
import { GuessStats } from '../types';
import { MAX_ATTEMPTS } from '../utils';

export interface BarChartProps {
  guesses: GuessStats[];
}

export const BarChart: React.FC<BarChartProps> = ({ guesses }) => {
  const { colors } = useTheme();

  return (
    <VictoryChart domain={{ x: [1, MAX_ATTEMPTS] }} domainPadding={{ x: GutterSizes.lg, y: 0 }}>
      <VictoryAxis
        tickFormat={(x) => x}
        label='GUESSES'
        axisLabelComponent={<VictoryLabel dy={10} />}
        style={{
          grid: { stroke: 'transparent' },
          axisLabel: {
            fontWeight: 'bold',
          },
          tickLabels: {
            padding: 0,
          },
        }}
      />
      <VictoryBar
        x='attempt'
        y='value'
        animate={{
          duration: 1000,
          onLoad: { duration: 1000 },
        }}
        barWidth={30}
        cornerRadius={{ top: GutterSizes.md }}
        data={guesses}
        labels={({ datum }) => Number(datum.value).toFixed(0)}
        labelComponent={<VictoryLabel dy={GutterSizes.md} dx={0} textAnchor='middle' verticalAnchor='start' />}
        style={{
          data: { fill: colors.success.background },
          labels: { fill: colors.white, fontSize: TextSizes.md, fontWeight: 'bold' },
        }}
      />
    </VictoryChart>
  );
};
