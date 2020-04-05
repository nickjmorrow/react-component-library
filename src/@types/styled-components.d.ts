import 'styled-components';
import { getTheme } from '~/theming';

declare module 'styled-components' {
    export interface DefaultTheme {
        njmTheme: ReturnType<typeof getTheme>;
    }
}
