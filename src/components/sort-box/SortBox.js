import React, { useState } from "react";
import Cube from "./Cube";

function SortBox() {
  const tempArr = [5, 7, 2, 6, 3, 8, 0, 1, 4];
  //   const tempArr = [5];
  const [arr, setArr] = useState(tempArr);
  const [activeIndex, setActiveIndex] = useState(null);
  const [foundIndex, setFoundIndex] = useState(null);
  const defaultDelay = 500;

  function delay(ms = defaultDelay) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function blink(index) {
    // for (let i = 0; i < 5; i++) {
    //   setActiveIndex(index);
    //   setFoundIndex(null);
    //   await delay(100);
    //   setActiveIndex(null);
    //   setFoundIndex(index);
    //   await delay(100);
    // }
  }

  async function bubbleSort(ary) {
    for (let i = 0; i < ary.length; i++) {
      var isSwapped = false;
      setActiveIndex(0);
      await delay();
      for (let j = 0; j < ary.length - i - 1; j++) {
        if (ary[j] > ary[j + 1]) {
          await blink(j);
          isSwapped = true;
          let temp = ary[j];
          ary[j] = ary[j + 1];
          ary[j + 1] = temp;
        }
        setArr(ary);
        setFoundIndex(null);
        setActiveIndex(j + 1);
        await delay();
      }
      if (!isSwapped) {
        break;
      }
    }
    await delay();
    setActiveIndex(null);
  }

  const boxes = () => {
    const ret = [];
    for (let i = 0; i < arr.length; i++) {
      ret.push(
        <Cube
          data={arr[i]}
          isActive={activeIndex == i}
          isFound={foundIndex == i}
        />
      );
    }
    return ret;
  };

  console.log("boxes", boxes);
  return (
    <div className="sort-box-container">
      <button
        onClick={() => {
          bubbleSort([...arr]);
          console.log("clicked");
          console.log("arr", arr);
        }}
        title="Sort"
        className="btn"
      >
        Sort
      </button>
      <button
        onClick={() => {
          setArr(tempArr);
          setActiveIndex(null);
        }}
        title="Sort"
        className="btn"
      >
        Reset
      </button>
      <div className="array-container">{boxes()}</div>
    </div>
  );
}

export default SortBox;
