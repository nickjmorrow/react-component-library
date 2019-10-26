import * as React from 'react';
import { FULL_NAME, GITHUB_LINK, LINKED_IN_LINK } from '~/constants';
import { ThemeContext } from '~/styleConstants';
import { Typography, GithubIcon, InvisibleLink, LinkedInIcon } from '~/components/atoms';
import { Footer } from '~/components/organisms';

const currentYear = new Date().getFullYear();
const defaultText = `© ${currentYear} ${FULL_NAME}`;

export const PopulatedFooter: React.FC<{
    text?: string;
    style?: React.CSSProperties;
}> = ({ text = defaultText, style = {} }) => {
    const { spacing } = React.useContext(ThemeContext);
    return (
        <Footer style={style}>
            <Typography colorVariant="secondaryDark" sizeVariant={2}>
                {text}
            </Typography>{' '}
            <div
                style={{
                    display: 'grid',
                    gridAutoFlow: 'column',
                    gridColumnGap: spacing.ss3,
                }}
            >
                <InvisibleLink href={GITHUB_LINK}>
                    <GithubIcon sizeVariant={2} colorVariant={'secondaryDark'} />
                </InvisibleLink>
                <InvisibleLink href={LINKED_IN_LINK}>
                    <LinkedInIcon sizeVariant={2} colorVariant={'secondaryDark'} />
                </InvisibleLink>
            </div>
        </Footer>
    );
};
