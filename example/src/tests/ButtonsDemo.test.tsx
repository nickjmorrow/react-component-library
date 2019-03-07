import * as React from "react";
import { Buttons } from "../components/demos/Buttons";
import { createRenderer } from "react-test-renderer/shallow";

const renderer = createRenderer();
it("renders correctly", () => {
  const tree = renderer.render(<Buttons />);
  expect(tree).toMatchSnapshot();
});
