import * as React from 'react';
import { FULL_NAME, LINKED_IN_LINK } from '~/constants';
import { ThemeContext } from '~/styleConstants';
import { Typography, GithubIcon, InvisibleLink, LinkedInIcon } from '~/components/atoms';
import { Footer } from '../../';

const currentYear = new Date().getFullYear();
const defaultText = `© ${currentYear} ${FULL_NAME}`;

export const PopulatedFooter: React.FC<{
    text?: string;
    className?: string;
    style?: React.CSSProperties;
}> = ({ text = defaultText, style, className }) => {
    const {
        spacing,
        appSettings: { githubUrl, linkedInUrl },
    } = React.useContext(ThemeContext);
    return (
        <Footer style={style} className={className}>
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
                <InvisibleLink href={githubUrl}>
                    <GithubIcon sizeVariant={2} colorVariant={'secondaryDark'} />
                </InvisibleLink>
                <InvisibleLink href={linkedInUrl}>
                    <LinkedInIcon sizeVariant={2} colorVariant={'secondaryDark'} />
                </InvisibleLink>
            </div>
        </Footer>
    );
};
