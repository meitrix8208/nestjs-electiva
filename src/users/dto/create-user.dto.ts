export class CreateUserDto {
  readonly email: string;
  password: string;
  readonly name: string;
  readonly lastName: string;
  readonly identification: number;
  readonly picture?: string;
  readonly phone?: string;
  readonly birthday?: string;
  readonly country?: string;
  readonly state?: string;
  readonly city?: string;
  readonly address?: string;
  readonly active?: boolean;
}
