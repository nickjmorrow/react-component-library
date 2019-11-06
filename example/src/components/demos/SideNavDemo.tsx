import * as React from 'react';
import { SideNavRouterContainer } from '@nickjmorrow/react-component-library';

export const SideNavDemo: React.FC = () => {
    return (
        <div style={{ height: '700px', border: '2px solid pink', width: 'max-content', overflowY: 'scroll' }}>
            <SideNavRouterContainer
                navInfos={[
                    { label: 'Home', route: '/side-nav' },
                    {
                        label: 'Client',
                        navLinks: [
                            { label: 'Data Elements', route: '/data-elements' },
                            { label: 'Attributes', route: '/attributes' },
                            {
                                label: 'Benchmark Weights',
                                route: '/benchmark-weights',
                            },
                            { label: 'Competitive Sets', route: '/competitive-sets' },
                            { label: 'Instance Status', route: '/instance-status' },
                        ],
                    },
                    {
                        label: 'Global',
                        navLinks: [
                            { label: 'Data Elements', route: '/data-elements' },
                            {
                                label: 'Client Instances',
                                route: '/client-instances',
                            },
                            {
                                label: 'Databases',
                                route: '/databases',
                            },
                            {
                                label: 'Custom Definitions',
                                route: '/custom-definitions',
                            },
                        ],
                    },
                    {
                        label: 'Datasets',
                        navLinks: [
                            {
                                label: 'Dataset Management',
                                route: '/dataset-creation',
                            },
                            {
                                label: 'Attribute Creation',
                                route: '/attribute-creation',
                            },
                            {
                                label: 'Run Management',
                                route: '/run-approval',
                            },
                            {
                                label: 'Publishing',
                                route: '/publishing',
                            },
                        ],
                    },
                ]}
            />
        </div>
    );
};
