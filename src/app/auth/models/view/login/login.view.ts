import { LoginApi } from '../../api/login/login.api';

export class LoginView {
  username: string;

  static mapFromApiModel(api: LoginApi): LoginView {
    const viewData = new LoginView();
    viewData.username = api.username;
    return viewData;
  }
}
