import {
  useContext,
  createContext,
  type PropsWithChildren,
  useCallback,
} from "react";
import { useStorageState } from "@/hooks/shared";
import { useAuth } from "@/hooks/queries/auth";
import { Credentials, SESSION_STORAGE_KEY } from "@/domains/models/auth";

const AuthContext = createContext<{
  signIn: (credentials: Credentials) => Promise<void>;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: async () => {},
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const { isPending, signIn } = useAuth();
  const [[isInitialLoading, session], setSession] =
    useStorageState(SESSION_STORAGE_KEY);

  const handleSignIn = useCallback(
    async (credentials: Credentials) => {
      // Perform sign-in logic here
      signIn(credentials, {
        onSuccess: (data) => {
          setSession(data.token);
        },
      });
    },
    [setSession, signIn]
  );

  const handleSignOut = useCallback(() => {
    // Perform sign-out logic here
    setSession(null);
  }, [setSession]);

  return (
    <AuthContext.Provider
      value={{
        signIn: handleSignIn,
        signOut: handleSignOut,
        session,
        isLoading: isInitialLoading || isPending,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
