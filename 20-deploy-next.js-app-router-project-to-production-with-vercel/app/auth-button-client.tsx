"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

import type { Session } from "@supabase/auth-helpers-nextjs";

export default function AuthButtonClient({
  session,
}: {
  session: Session | null;
}) {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return session ? (
    <button className="text-xs text-gray-400" onClick={handleSignOut}>
      Logout
    </button>
  ) : (
    <button className="text-xs text-gray-400" onClick={handleSignIn}>
      Login
    </button>
  );
}
