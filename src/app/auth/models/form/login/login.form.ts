import { LoginView } from '../../view/login/login.view';

export class LoginForm {
  username: string;

  static mapFromViewModel(view: LoginView): LoginForm {
    const formData = new LoginForm();
    formData.username = view.username;
    return formData;
  }
}
