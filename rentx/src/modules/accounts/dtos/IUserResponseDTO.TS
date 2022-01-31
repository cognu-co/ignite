interface IUserResponseDTO {
  id: string;
  name: string;
  email: string;
  avatar: string;
  driver_license: string;
  created_at?: Date;
  avatar_url(): string;
}

export { IUserResponseDTO };
