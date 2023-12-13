import styled from 'styled-components';
import { BaseContainer } from '@/shared/ui/styles/BaseContainer';

const Container = styled.div`
  background: #f0f0f0;
  padding: 20px;
  max-width: 600px;
  margin: auto;
  height: 660px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled(BaseContainer).attrs({
  as: 'textarea',
})``;

export { Container, Label, Input };
