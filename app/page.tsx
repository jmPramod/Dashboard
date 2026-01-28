"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Pencil,
  Moon,
  Sun,
  Laptop,
  RefreshCcw,
  X,
} from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerDescription,
} from "@/components/ui/drawer";
import { useTheme } from "next-themes";

export default function Home() {
  const [direction, setDirection] = useState<
    "top" | "right" | "bottom" | "left"
  >("right");

  const { setTheme, theme, resolvedTheme } = useTheme();

  // Theme helpers
  const isLight = resolvedTheme === "light";
  const isDark = resolvedTheme === "dark";
  const isSystem = theme === "system";

  // Icon styles
  const baseIcon =
    "cursor-pointer flex items-center justify-center rounded-md p-2 w-10 h-10 transition-all active:scale-95";

  const activeIcon =
    "bg-blue-500/15 border border-blue-500 text-blue-600 dark:text-blue-400";

  const inactiveIcon =
    "border border-transparent hover:bg-muted";

  // Reset handler
  const handleReset = () => {
    setTheme("system");
  };

  return (
    <div className="relative w-full h-screen p-6">
      {/* Direction selector (demo) */}
      <div className="flex gap-2 mb-6">
        {(["top", "right", "bottom", "left"] as const).map((dir) => (
          <Button
            key={dir}
            size="sm"
            variant={direction === dir ? "default" : "outline"}
            onClick={() => setDirection(dir)}
          >
            {dir}
          </Button>
        ))}
      </div>

      <Drawer direction={direction}>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon">
            <Settings />
          </Button>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="flex items-center justify-between">
              Theme Customizations

              <span className="flex gap-2">
                {/* Reset */}
                <RefreshCcw
                  size={18}
                  onClick={handleReset}
                    className="cursor-pointer opacity-70 hover:opacity-100 active:rotate-180 transition"
                />

                {/* Close */}
                <DrawerClose asChild>
                  <X
                    size={18}
                     
                    className="cursor-pointer opacity-70 hover:opacity-100"
                  />
                </DrawerClose>
              </span>
            </DrawerTitle>

            {/* IMPORTANT: asChild prevents nested <p> */}
            <DrawerDescription asChild>
              <div className="space-y-6 text-sm text-muted-foreground">
                {/* Primary color */}
                <div>
                  <div className="font-bold mb-2 text-foreground">
                    Primary Color
                  </div>
                  <div className="flex gap-3">
                    {[
                      "bg-red-500",
                      "bg-blue-500",
                      "bg-green-500",
                      "bg-yellow-500",
                      "bg-purple-500",
                    ].map((color) => (
                      <div
                        key={color}
                        className="border rounded-md p-1 hover:ring-2 ring-blue-500/30 cursor-pointer"
                      >
                        <div
                          className={`w-6 h-6 rounded ${color}`}
                        />
                      </div>
                    ))}

                    <div className="border rounded-md p-2 hover:bg-muted cursor-pointer">
                      <Pencil size={16} />
                    </div>
                  </div>
                </div>

                {/* Theme */}
                <div>
                  <div className="font-bold mb-2 text-foreground">
                    Theme
                  </div>

                  <div className="flex gap-3">
                    <Sun
                      size={20}
                      onClick={() => setTheme("light")}
                      className={`${baseIcon} ${
                        isLight ? activeIcon : inactiveIcon
                      }`}
                    />

                    <Moon
                      size={20}
                      onClick={() => setTheme("dark")}
                      className={`${baseIcon} ${
                        isDark ? activeIcon : inactiveIcon
                      }`}
                    />

                    <Laptop
                      size={20}
                      onClick={() => setTheme("system")}
                      className={`${baseIcon} ${
                        isSystem ? activeIcon : inactiveIcon
                      }`}
                    />
                  </div>
                </div>

                {/* Extras */}
                <div>
                  <div className="font-bold text-foreground">
                    Skins
                  </div>
                  <div className="flex"> 
<div>

                    <svg data-v-fcf8e19b="" xmlns="http://www.w3.org/2000/svg" width="104" height="66" fill="none" className="custom-radio-image"><rect width="104" height="66" fill="currentColor" fill-opacity=".02" rx="4"></rect><rect width="64.755" height="8.8" x="19.421" y="4.672" fill="currentColor" fill-opacity=".08" rx="2"></rect><rect width="3.925" height="4.4" x="22.345" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="65.515" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="71.401" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="77.288" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="40.226" height="17.6" x="44.352" y="19.613" fill="currentColor" fill-opacity=".08" rx="2"></rect><rect width="19.046" height="17.6" x="19.421" y="19.613" fill="currentColor" fill-opacity=".08" rx="2"></rect><rect width="65.159" height="17.6" x="19.421" y="42.455" fill="currentColor" fill-opacity=".08" rx="2"></rect></svg>
  <label htmlFor="">Default</label>
</div>
  <div>
                  <svg data-v-fcf8e19b="" xmlns="http://www.w3.org/2000/svg" width="104" height="66" fill="none" className="custom-radio-image"><rect width="104" height="66" fill="currentColor" fill-opacity=".02" rx="4"></rect><rect width="17.66" height="2.789" x="4.906" y="23.884" fill="currentColor" fill-opacity=".3" rx="1.395"></rect><rect width="9.811" height="9.706" x="8.83" y="5.881" fill="currentColor" fill-opacity=".3" rx="2"></rect><rect width="17.66" height="2.789" x="4.906" y="34.438" fill="currentColor" fill-opacity=".3" rx="1.395"></rect><rect width="17.66" height="2.789" x="4.906" y="44.992" fill="currentColor" fill-opacity=".3" rx="1.395"></rect><rect width="17.66" height="2.789" x="4.906" y="55.546" fill="currentColor" fill-opacity=".3" rx="1.395"></rect><rect width="63.755" height="7.8" x="34.615" y="5.172" stroke="currentColor" strokeOpacity=".12" rx="1.5"></rect><rect width="3.925" height="4.4" x="37.039" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="80.21" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="86.096" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="91.002" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="39.226" height="16.6" x="58.984" y="20.113" stroke="currentColor" strokeOpacity=".12" rx="1.5"></rect><rect width="18.046" height="16.6" x="34.615" y="20.113" stroke="currentColor" strokeOpacity=".12" rx="1.5"></rect><rect width="63.755" height="16.6" x="34.615" y="42.955" stroke="currentColor" strokeOpacity=".12" rx="1.5"></rect></svg>
<label htmlFor="">Bordered </label>
  </div>
                   </div>
                </div>

                <div>
                  <div className="font-bold text-foreground">
                    Layouts
                  </div>
                  <div>3 images</div>
                </div>
              </div>
            </DrawerDescription>
          </DrawerHeader>

          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
