import * as React from 'react';
import { Button } from './Button';
import * as TestRenderer from 'react-test-renderer/shallow';

const renderer = TestRenderer.createRenderer();
describe('Button rendering', () => {
    it('default', () => {
        const tree = renderer.render(<Button />);
        expect(tree).toMatchSnapshot();
    });
    it('render styleVariant of 1', () => {
        const tree = renderer.render(<Button styleVariant={1} />);
        expect(tree).toMatchSnapshot();
    });
    it('render styleVariant of 2', () => {
        const tree = renderer.render(<Button styleVariant={2} />);
        expect(tree).toMatchSnapshot();
    });
    it('render styleVariant of 3', () => {
        const tree = renderer.render(<Button styleVariant={3} />);
        expect(tree).toMatchSnapshot();
    });
});
