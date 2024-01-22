class Auth {
  private static instance: Auth;
  // TODO:後々にユーザー情報に変更してもいいと思います。
  isAuthenticated: Boolean;

  private constructor() {
    // TOTO:アクセストークンを確認する。
    this.isAuthenticated = false;
  }

  static getInstance(): Auth {
    if (Auth.instance === undefined) Auth.instance = new Auth();
    return Auth.instance;
  }

  signUp(): void {
    // TODO: 後ほど修正
    this.isAuthenticated = true;
  }

  signUpAnonymously(): void {
    // TODO: 後ほど修正
    this.isAuthenticated = true;
  }

  login(): void {
    // TODO: 後ほど修正
    this.isAuthenticated = true;
  }
}

export default Auth;
