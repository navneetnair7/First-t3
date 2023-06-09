import { User } from "@clerk/nextjs/dist/api";

export const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    usrename: user.username,
    profileImageUrl: user.profileImageUrl,
  };
};
