import { AppWrapper } from "components";
import React from "react";

export const Home: React.FC<{}> = () => {
  return (
    <AppWrapper title="Home">
      <section className="first-section">
        <h1>Welcome to the Home Page</h1>
        <p>This is the first section.</p>
      </section>
      <section className="second-section">
        <h2>Second Section</h2>
        <p>This is some content in the second section.</p>
      </section>
      <section className="third-section">
        <h2>Third Section</h2>
        <p>This is some content in the third section.</p>
      </section>
    </AppWrapper>
  );
};
