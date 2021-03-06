import * as React from 'react';
import { Route } from 'react-router';
import {
    AppBarDemo,
    BordersDemo,
    BoxShadowDemo,
    Buttons,
    ColorsDemo,
    ExpansionPanelDemo,
    FileInputDemo,
    IconsDemo,
    LabeledInputDemo,
    ModalDemo,
    SelectDemo,
    SliderDemo,
    SpacingDemo,
    TextInputDemo,
    TypographyDemo,
} from './components/demos';
import { FadeDemo } from './components/demos/FadeDemo';
import { GettingStarted } from './components/GettingStarted';
import { Home } from './components/Home';
import { Principles } from './components/Principles';

const atomComponents = {
    label: 'Atoms',
    navLinks: [
        {
            component: Buttons,
            label: 'Buttons',
            route: '/buttons',
        },
        {
            component: SelectDemo,
            label: 'Select',
            route: '/select',
        },
        {
            component: IconsDemo,
            label: 'Icons',
            route: '/icons',
        },
        {
            component: FileInputDemo,
            label: 'File Input',
            route: '/file-input',
        },
        {
            component: SliderDemo,
            label: 'Slider',
            route: '/slider',
        },
        {
            component: TextInputDemo,
            label: 'Text Input',
            route: '/text-input',
        },
    ],
};

const moleculeComponents = {
    label: 'Molecules',
    navLinks: [
        {
            component: LabeledInputDemo,
            label: 'Labeled Inputs',
            route: '/labeled-inputs',
        },
        {
            component: ExpansionPanelDemo,
            label: 'Expansion Panel',
            route: '/expansion-panel',
        },
    ],
};

const organismComponents = {
    label: 'Organisms',
    navLinks: [
        {
            component: ModalDemo,
            label: 'Modal',
            route: '/modal',
        },
        {
            component: AppBarDemo,
            label: 'App Bar',
            route: '/app-bar',
        },
    ],
};

const themeConfiguration = {
    label: 'Style System',
    navLinks: [
        {
            component: ColorsDemo,
            label: 'Colors',
            route: '/colors',
        },
        {
            component: BordersDemo,
            label: 'Borders',
            route: '/borders',
        },
        {
            component: TypographyDemo,
            label: 'Typography',
            route: '/typography',
        },
        {
            component: BoxShadowDemo,
            label: 'Box Shadow',
            route: '/box-shadow',
        },
        {
            component: SpacingDemo,
            label: 'Spacing',
            route: '/spacing',
        },
        {
            component: FadeDemo,
            label: 'Fade Animation',
            route: '/fade-animation',
        },
    ],
};

const componentFolders = [themeConfiguration, atomComponents, moleculeComponents, organismComponents];

const navLinks = [
    {
        label: 'Getting Started',
        route: '/getting-started',
        component: GettingStarted,
    },
    {
        label: 'Principles',
        route: '/principles',
        component: Principles,
    },
];

const routesWithoutNavLink = [
    {
        label: 'Home',
        route: '/',
        component: Home,
    },
];

const navLinkRoutes = [...navLinks, ...routesWithoutNavLink].map((nl, i) => (
    <Route key={`route-${nl.route}-${i}`} path={nl.route} component={nl.component} exact={true} />
));

const folderRoutes = componentFolders.reduce(
    (prev, curr) => {
        prev.push(
            ...curr.navLinks.map((c, i) => (
                <Route key={`route-${c.route}-${i}`} path={c.route} component={c.component} exact={true} />
            )),
        );
        return prev;
    },
    [] as React.ReactNode[],
);

export const routes = [...folderRoutes, ...navLinkRoutes];

export const navInfos = [...navLinks, ...componentFolders];
