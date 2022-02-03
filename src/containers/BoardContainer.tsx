import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Board } from '../components';
import { RootState } from '../store';

export interface BoardContainerProps {}

export const BoardContainer: React.FC<BoardContainerProps> = () => {
  const dispatch = useDispatch();
  const wordLength = useSelector((state: RootState) => state.settings.wordLength);

  return <Board size={wordLength} />;
};
