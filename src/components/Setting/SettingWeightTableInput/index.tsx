import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  outline: none;
  border: 0px;
  width: 100%;
  padding: 5px;
  margin: 5px;
`;
const SettingWeightTableInput = ({ ...props }) => {
  return <Input {...props} />;
};

export default SettingWeightTableInput;
