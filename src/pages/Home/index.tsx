import { AppWrapper } from "components";
import React from "react";

export const Home: React.FC<{}> = () => {
  return (
    <AppWrapper title="Home">
      <section className="first-section">
        <div className="inside">
          <div style={{ height: 126 }} />
          <p>This is the first section.</p>
          <p>This is the first section.</p>
        </div>
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
