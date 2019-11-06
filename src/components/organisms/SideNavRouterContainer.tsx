import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { GetComponentProps, Omit } from '~/typeUtilities';
import { SideNav } from '~/components/organisms';

type SideNavProps = Omit<GetComponentProps<typeof SideNav>, 'currentRoute'>;
const SideNavRouterContainerInternal: React.FC<SideNavProps & RouteComponentProps> = ({ location, ...props }) => {
    return <SideNav {...props} currentRoute={location.pathname} />;
};

export const SideNavRouterContainer = withRouter(SideNavRouterContainerInternal);
