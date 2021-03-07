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
  text-align: center;
  padding: 5px 10px;
  margin-right: 5px;
  border: 1px solid black;
  background: #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: #fff;
    background: #000;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin: 20px;
`;

export const Item = styled.div`
  width: 0.3vw;
  background: #000;
  margin-right: 2px;
`;

export const Buttons = styled.div`
  display: flex;
`;
