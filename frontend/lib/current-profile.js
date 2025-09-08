import { RedirectToSignIn, UserProfile } from "@clerk/clerk-react";
import { User } from "lucide-react";

export const CurrentProfile = async () => {
    const user = await UserProfile();

    if (!user) {
        return RedirectToSignIn();
    }

    return user;
};