import * as React from 'react';
import { useLocation } from 'react-router';
import { GetComponentProps } from '~/typeUtilities';
import { SideNav } from '~/components/organisms';

type SideNavProps = Omit<GetComponentProps<typeof SideNav>, 'currentRoute'>;

export const SideNavRouterContainer: React.FC<SideNavProps> = props => {
    const location = useLocation();
    return <SideNav {...props} currentRoute={location.pathname} />;
};
