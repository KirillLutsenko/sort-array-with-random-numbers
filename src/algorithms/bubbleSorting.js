export function getBubbleSortingAnimations(arr = []) {
  const arrCopy = [...arr];
  const animations = [];

  for (let i = 0; i < arr.length; i += 1) {
    let min = i;

    for (let j = i + 1; j < arr.length; j += 1) {
      animations.push({
        type: 'select',
        data: [i, j],
      });

      if (arrCopy[j] < arrCopy[min]) {
        min = j;
      }
    }

    if (min !== i) {
      const copy = arrCopy[i];

      arrCopy[i] = arrCopy[min];
      arrCopy[min] = copy;
      animations.push({
        type: 'swap',
        data: [i, min],
        arr: [...arrCopy],
      });
    }
  }

  return animations;
}
