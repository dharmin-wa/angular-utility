import { LoginForm } from '../../form/login/login.form';

export class LoginPost {
  username: string;

  static mapFromFormModel(formData: LoginForm): LoginPost {
    const postData = new LoginPost();
    postData.username = formData.username;
    return postData;
  }
}
