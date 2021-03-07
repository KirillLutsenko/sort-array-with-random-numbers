import React, { useState } from 'react';
import { getBubbleSortingAnimations } from './algorithms/bubbleSorting';
import { Title, Wrapper, Button, List, Item, Buttons } from './AppStyles';

export const App = () => {
  const [array, setArray] = useState([]);
  const [sortedArray, setSortedArray] = useState(false);
  const [generateArray, setGenerateArray] = useState(false);

  const arrayGeneration = () => {
    const arrayCopy = [];
    const randomLength = Math.random() * 100 + 100;

    for (let i = 0; i < randomLength; i += 1) {
      const randomNumber = Math.round(Math.random() * 205);

      arrayCopy.push(randomNumber);
    }

    setArray(arrayCopy);
    setSortedArray(false);
    setGenerateArray(true);
  };

  const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms),
  );

  const parseAnimations = async(animations) => {
    for (const animation of animations) {
      const { type, data, arr } = animation;
      const [i, j] = data;

      if (type === 'swap') {
        document.querySelector(`#item-${i}`).style.backgroundColor = '#ff0000';
        document.querySelector(`#item-${j}`).style.backgroundColor = '#ff0000';
      } else if (type === 'select') {
        document.querySelector(`#item-${i}`).style.backgroundColor = '#0c8e3e';
        document.querySelector(`#item-${j}`).style.backgroundColor = '#ff0000';
      }

      await sleep(5);

      if (type === 'swap' && arr) {
        setArray(arr);
      }

      document.querySelector(`#item-${i}`).style.backgroundColor = '#000000';
      document.querySelector(`#item-${j}`).style.backgroundColor = '#000000';
    }

    await setGenerateArray(false);
  };

  const bubbleSorting = async(alg) => {
    let animations = [];

    setSortedArray(true);

    if (alg === 'select') {
      animations = getBubbleSortingAnimations(array);
    }

    await parseAnimations(animations);
  };

  return (
    <div>
      <Title>Sorting Array</Title>

      <Wrapper>
        <Buttons>
          {!generateArray && (
            <Button
              type="button"
              onClick={arrayGeneration}
            >
              Generate new Array
            </Button>
          )}

          {!sortedArray && (
            <Button
              type="button"
              onClick={() => bubbleSorting('select')}
            >
              Sort Array
            </Button>
          )}
        </Buttons>

        <List>
          {array.map((number, index) => (
            <Item
              key={index}
              style={{ height: `${number}px` }}
              id={`item-${index}`}
            />
          ))}
        </List>
      </Wrapper>
    </div>
  );
};
