export interface User {
  email: string;
  name: string;
  socialType: "KAKAO" | "GOOGLE";
  birthDate: string | null;
  gender: "MALE" | "FEMALE" | null;
  isProfileCompleted: boolean;
}
