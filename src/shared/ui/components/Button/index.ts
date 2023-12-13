import styled from 'styled-components';

type AlignType = 'left' | 'center' | 'right';

type ButtonContainerProps = {
  align: AlignType;
};

const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  justify-content: ${props => {
    switch (props.align) {
      case 'left':
        return 'flex-start';
      case 'center':
        return 'center';
      case 'right':
        return 'flex-end';
      default:
        return 'center';
    }
  }};
`;

const Button = styled.button`
  background-color: #007bff; // Bootstrap primary button color
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #0056b3;
  }
`;

export { Button, ButtonContainer };
