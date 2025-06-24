"use client";

import Button from "../components/library/Button";

const Library = () => {
  return (
    <div>
      <h1>Library</h1>
      <div className="mt-8 flex justify-evenly bg-slate-300 p-4">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
      </div>
      <div className="flex justify-evenly bg-slate-600 p-4">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
      </div>
      <div className="flex justify-evenly bg-slate-900 p-4">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
      </div>
    </div>
  );
};

export default Library;
