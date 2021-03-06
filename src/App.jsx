import React, { useState, useEffect } from 'react';
import { Title, Wrapper, Button, List, Item } from './AppStyles';

export const App = () => {
  const [array, setArray] = useState([]);
  const randomLength = Math.random() * 1000 + 1000;

  useEffect(() => {
    const arrayCopy = [];

    for (let i = 0; i < randomLength; i++) {
      const randomNumber = Math.round(Math.random() * 205);

      arrayCopy.push(randomNumber);
    }

    setArray(arrayCopy);
  }, []);

  const sortArray = async() => {
    let resOfCompare = false;
    const copyOfArray = [...array];

    while (!resOfCompare) {
      resOfCompare = true;

      for (let i = 1; i < copyOfArray.length; i++) {
        if (copyOfArray[i - 1] > copyOfArray[i]) {
          resOfCompare = false;

          const prev = copyOfArray[i - 1];
          const next = copyOfArray[i];

          copyOfArray[i - 1] = next;
          copyOfArray[i] = prev;
        }
      }
    }

    setArray(copyOfArray);
  };

  return (
    <div>
      <Title>Sorting Array</Title>

      <Wrapper>
        <Button
          type="button"
          onClick={sortArray}
        >
          Sort Array
        </Button>

        <List>
          {array.map((number, index) => (
            <Item key={index}>
              {number}
            </Item>
          ))}
        </List>
      </Wrapper>
    </div>
  );
};
