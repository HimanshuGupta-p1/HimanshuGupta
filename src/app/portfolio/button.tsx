import React from 'react';
import Data from './project'

interface ButtonsProps {
  filterItem: (value: string) => void;
  setItem: (data: any) => void;
  btns: string[];
}

const Buttons: React.FC<ButtonsProps> = ({ filterItem, setItem, btns }) => {
  return (
    <div className="d-flex justify-content-center">
      <button className="btn-outline-primary btn" onClick={() => setItem(Data)}>
        All
      </button>
      {btns.map((val, id) => (
        <button
          className="btn-outline-primary btn"
          onClick={() => filterItem(val)}
          key={id}
        >
          {val}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
