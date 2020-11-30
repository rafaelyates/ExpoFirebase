export declare type SignInData = {
  readonly username: string;
  readonly password: string;
};

export declare type SignUpData = SignInData & {
  readonly repeat: string;
};
