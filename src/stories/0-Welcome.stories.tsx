import React from 'react';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Welcome',
};

export const toStorybook = () => <div>Hello</div>

toStorybook.story = {
  name: 'to Storybook',
};
