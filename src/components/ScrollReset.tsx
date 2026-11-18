"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // If navigating to an in-page hash anchor (e.g. #contact or #tours), let the browser handle anchor scroll
    if (window.location.hash) return;

    // Immediately jump to the top of the new page, bypassing smooth-scroll cancellation conflicts
    const html = document.documentElement;
    const prevScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.body.scrollTop = 0;

    // Re-verify on the next frame in case of layout shifts
    const raf = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      html.style.scrollBehavior = prevScrollBehavior;
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}
