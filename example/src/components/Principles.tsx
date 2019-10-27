import { Typography, Link } from '@nickjmorrow/react-component-library';
import * as React from 'react';
import { ContentWrapper } from './shared/ContentWrapper';

export const Principles: React.FC = () => {
    return (
        <ContentWrapper>
            <Typography styleVariant={'h1'}>Principles</Typography>
            <Typography styleVariant={'h2'}>Customization and Escape Hatches</Typography>
            <Typography>
                First and foremost, this component library should always allow for departures from the style guidelines.
                All components should support custom colors and other styling where applicable.
            </Typography>
            <Typography styleVariant={'h2'}>Decision Making</Typography>
            <Typography>
                At a high level, decisions should be able to be made regarding common style guidelines like coloring,
                spacing, and fonts. This should be mapped to the use cases of part of a style - colors are "success" or
                "core". Decisions can be made to map "success" to a shade of green and "core" to a shade of blue. These
                decisions should then be respected by all components by default - e.g. we should be able to pass a prop
                into a button component to denote its color as "success", and that color should respect the overarching
                decision for what color "success" should be. This helps to keep component styles in sync and reduces the
                number of unique decisions that must be made.{' '}
            </Typography>
            <Typography styleVariant={'h2'}>Component Organization</Typography>
            <Typography>
                For organizing components, I tried to follow{' '}
                <Link route={'https://bradfrost.com/blog/post/atomic-web-design/'} style={{ display: 'inline' }}>
                    Atomic Design
                </Link>
                . It helped drive me to focus on breaking down designs into atoms, designing the atoms, ensuring all of
                the atoms followed the design system and looked like they were related, and then ensuring the
                composition of the larger component was easy and pain-free.
            </Typography>
        </ContentWrapper>
    );
};
