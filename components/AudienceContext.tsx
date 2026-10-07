"use client";

import React, { createContext, useContext, useEffect, useState, useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export type AudienceType = "all" | "recruiters" | "professors" | "admissions";

type AudienceContextType = {
  audience: AudienceType;
  setAudience: (aud: AudienceType) => void;
};

const AudienceContext = createContext<AudienceContextType | undefined>(undefined);

export function AudienceProvider({
  children,
  initialAudience = "all",
}: {
  children: React.ReactNode;
  initialAudience?: AudienceType;
}) {
  const [audience, setAudienceState] = useState<AudienceType>(initialAudience);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  useEffect(() => {
    // If route is /for/[audience], sync it
    if (pathname?.startsWith("/for/")) {
      const seg = pathname.replace("/for/", "").toLowerCase();
      if (seg === "recruiters" || seg === "professors" || seg === "admissions") {
        setAudienceState(seg as AudienceType);
        return;
      }
    }

    const q = searchParams?.get("for")?.toLowerCase();
    if (q === "recruiters" || q === "professors" || q === "admissions") {
      setAudienceState(q as AudienceType);
    } else if (q === "all") {
      setAudienceState("all");
    }
  }, [searchParams, pathname]);

  const setAudience = (aud: AudienceType) => {
    setAudienceState(aud);
    startTransition(() => {
      if (pathname === "/" || pathname?.startsWith("/for/")) {
        if (aud === "all") {
          router.replace("/", { scroll: false });
        } else {
          router.replace(`/?for=${aud}`, { scroll: false });
        }
      }
    });
  };

  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  );
}

export function useAudience() {
  const ctx = useContext(AudienceContext);
  if (!ctx) {
    return {
      audience: "all" as AudienceType,
      setAudience: () => {},
    };
  }
  return ctx;
}
