import { UserActions } from 'app/actions';
import { ActionType } from 'typesafe-actions';

export interface Register {
  username: string;
  password: string;
  repeatPassword: string;
  email: string;
  country?: string;
  fullName: string;
  pragyanId?: string;
}

export interface EditUserDetails {
  username?: string;
  password?: string;
  repeatPassword?: string;
  email?: string;
  country?: string;
  fullName?: string;
}

export interface Login {
  username: string;
  password: string;
}

const actions = {
  editUserProfile: UserActions.editUserProfile,
  getUserDetails: UserActions.getUserDetails,
  login: UserActions.login,
  logout: UserActions.logout,
  register: UserActions.register,
  toggleUserProfileModal: UserActions.toggleUserProfileModal,
  updateErrorMessage: UserActions.updateErrorMessage,
  updateUserDetails: UserActions.updateUserDetails,
};

export interface UserStoreState {
  errorMessage: string;
  fullName: string;
  username: string;
  email: string;
  country: string;
  isLoggedIn: boolean;
  isUserProfileModalOpen: boolean;
}

export type UserStoreAction = ActionType<typeof actions>;
