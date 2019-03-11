import * as React from "react";
import { Button } from "./Button";
import * as TestRenderer from "react-test-renderer/shallow";

const renderer = TestRenderer.createRenderer();
describe("Button rendering", () => {
  it("default", () => {
    const tree = renderer.render(<Button />);
    expect(tree).toMatchSnapshot();
  });
  it("primary", () => {
    const tree = renderer.render(<Button styleVariant={"primary"} />);
    expect(tree).toMatchSnapshot();
  });
  it("secondary", () => {
    const tree = renderer.render(<Button styleVariant={"secondary"} />);
    expect(tree).toMatchSnapshot();
  });
  it("tertiary", () => {
    const tree = renderer.render(<Button styleVariant={"tertiary"} />);
    expect(tree).toMatchSnapshot();
  });
});
