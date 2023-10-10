export interface JwtPayload {
    iss: string;
    sub: string;
    exp: number;
    iat: number;
    scope: string;
  }