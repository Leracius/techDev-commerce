import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { styles } from '../colors/styleArray';
import { setStyleIndex } from '../redux/configs/styleSlice';

const MainContainer = styled.main`
  background-repeat: repeat;
  padding-bottom: 40px;
`;

const ButtonColor = styled.button`
  background-color: transparent;
  border: none;
  color: gray ;
  position: fixed;
  bottom: 60px;
  left: 10px;
  background-color: black;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  
  &:hover {
    color: white;
  }
`;

const MainStyles = ({ children }) => {
  const dispatch = useDispatch();
  const currentStyleIndex = useSelector((state) => state.style);

  const currentStyle = styles[currentStyleIndex];

  const handleButtonClick = () => {
    const newIndex = (currentStyleIndex + 1) % styles.length;
    dispatch(setStyleIndex(newIndex));
  };

  return (
    <MainContainer style={currentStyle}>
      {children}
      <ButtonColor onClick={handleButtonClick} >Cambiar color</ButtonColor>
    </MainContainer>
  );
};

export default MainStyles;
