class Auth {
  private static instance: Auth;
  // TODO:後々にユーザー情報に変更してもいいと思います。
  isAuthenticated: Boolean;

  private constructor() {
    // TOTO:アクセストークンを確認する。
    this.isAuthenticated = true;
  }

  static getInstance(): Auth {
    if (Auth.instance === undefined) Auth.instance = new Auth();
    return Auth.instance;
  }
}

export default Auth;
