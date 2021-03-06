import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  background: #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: #fff;
    background: #000;
  }
`;

export const List = styled.ul`
  margin: 20px 0;
`;

export const Item = styled.li`
  text-align: center;
  font-size: 18px;
`;
