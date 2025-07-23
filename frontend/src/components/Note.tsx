import React from 'react';

const Note = ({ title, description }) => {
  return (
    <div className="mt-12 w-80 h-48 flex flex-col items-center p-3  bg-secondary m-3">
      <span className="material-symbols-outlined cursor-pointer ml-60">
        delete
      </span>
      <h2 className="font-bold">{title}</h2>
      <p className="mt-2">{description} </p>
    </div>
  );
};

export default Note;
