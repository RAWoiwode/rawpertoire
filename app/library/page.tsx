"use client";

import Button from "../components/library/Button";

const Library = () => {
  return (
    <div>
      <h1>Library</h1>
      <div className="mt-8 flex justify-evenly">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
      </div>
    </div>
  );
};

export default Library;
