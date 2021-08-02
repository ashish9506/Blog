import { connectedRouterRedirect } from 'redux-auth-wrapper/history3/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history3/locationHelper';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';

const userIsAuthenticatedDefaults = {
  authenticatedSelector: state => state.LoginPage.token.id !== undefined,
  wrapperDisplayName: 'UserIsAuthenticated',
};

export const userIsAuthenticated = connectedAuthWrapper(
  userIsAuthenticatedDefaults,
);

export const userIsAuthenticatedRedir = connectedRouterRedirect({
  ...userIsAuthenticatedDefaults,
  redirectPath: '/login',
  allowRedirectBack: true,
});

const locationHelper = locationHelperBuilder({});

const userIsNotAuthenticatedDefaults = {
  authenticatedSelector: state => state.LoginPage.token.id === undefined,
  wrapperDisplayName: 'UserIsNotAuthenticated',
};

export const userIsNotAuthenticated = connectedAuthWrapper(
  userIsNotAuthenticatedDefaults,
);

export const userIsNotAuthenticatedRedir = connectedRouterRedirect({
  ...userIsNotAuthenticatedDefaults,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || '/',
  allowRedirectBack: false,
});
