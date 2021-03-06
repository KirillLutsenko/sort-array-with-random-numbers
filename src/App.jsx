import React, { useState, useCallback } from 'react';
import { Title, Wrapper, Button, List, Item } from './AppStyles';

export const App = () => {
  const initHelper = () => {
    const arrayCopy = [];
    const randomLength = Math.random() * 1000 + 1000;

    for (let i = 0; i < randomLength; i++) {
      const randomNumber = Math.round(Math.random() * 205);

      arrayCopy.push(randomNumber);
    }

    return arrayCopy;
  };

  const [array, setArray] = useState(initHelper);
  const [sortedArray, setSortedArray] = useState(false);

  const bubbleSorting = useCallback(() => {
    let resOfCompare = false;
    const sortArray = [...array];

    while (!resOfCompare) {
      resOfCompare = true;

      for (let i = 1; i < sortArray.length; i++) {
        if (sortArray[i - 1] > sortArray[i]) {
          resOfCompare = false;

          const prev = sortArray[i - 1];
          const next = sortArray[i];

          sortArray[i - 1] = next;
          sortArray[i] = prev;
        }
      }
    }

    setArray(sortArray);
    setSortedArray(true);
  }, [array]);

  return (
    <div>
      <Title>Sorting Array</Title>

      <Wrapper>
        {!sortedArray && (
          <Button
            type="button"
            onClick={bubbleSorting}
          >
            Sort Array
          </Button>
        )}

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
