import { RedirectToSignIn, UserProfile } from "@clerk/clerk-react";
import { User } from "lucide-react";

export const CurrentProfile = async () => {
    const user = await UserProfile();

    console.log(user);

    if (!user) {
        return RedirectToSignIn();
    }

    return user;
};