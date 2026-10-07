"use client";

import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CommandPalette } from "./CommandPalette";
import { AssistantDrawer } from "./AssistantDrawer";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <>
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      <main id="main-content" className="flex-1 w-full bg-grid-pattern">
        {children}
      </main>
      <Footer />
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
      <AssistantDrawer />
    </>
  );
}
