import * as React from 'react';
import { Button } from './Button';
import * as TestRenderer from 'react-test-renderer/shallow';

const renderer = TestRenderer.createRenderer();
describe('Button rendering', () => {
    it('default', () => {
        const tree = renderer.render(<Button />);
        expect(tree).toMatchSnapshot();
    });
});
