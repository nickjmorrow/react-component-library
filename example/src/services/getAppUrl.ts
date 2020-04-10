import { isDevelopmentEnvironment } from 'src/services/isDevelopmentEnvironment';

export const getAppUrl = isDevelopmentEnvironment()
    ? 'localhost:8080'
    : 'nickjmorrow.github.io/react-component-library';
