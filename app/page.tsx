"use client";

import { useRef, useState } from "react";
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

type ColorType = "red" | "blue" | "green" | "yellow" | "custom";

export default function Home() {
  const [color, setColor] = useState<ColorType>("blue");
  const [customColor, setCustomColor] = useState("#6366f1");

  const colorInputRef = useRef<HTMLInputElement>(null);

  const [direction, setDirection] = useState<
    "top" | "right" | "bottom" | "left"
  >("right");

  const { setTheme, theme, resolvedTheme } = useTheme();

  const isLight = resolvedTheme === "light";
  const isDark = resolvedTheme === "dark";
  const isSystem = theme === "system";

  const baseIcon =
    "cursor-pointer flex items-center justify-center rounded-md p-2 w-full h-10 transition-all active:scale-95";

  const activeIcon =
    "bg-blue-500/15 border border-blue-500 text-blue-600 dark:text-blue-400  w-full";

  const inactiveIcon = "border border-transparent hover:bg-muted w-full";

  const handleReset = () => {
    setTheme("system");
    setColor("blue");
  };

  const colorMap = {
    red: {
      text: "text-red-500",
      bg: "bg-red-200",
      border: "border-red-400",
      swatch: "bg-red-500",
    },
    blue: {
      text: "text-blue-500",
      bg: "bg-blue-200",
      border: "border-blue-400",
      swatch: "bg-blue-500",
    },
    green: {
      text: "text-green-500",
      bg: "bg-green-200",
      border: "border-green-400",
      swatch: "bg-green-500",
    },
    yellow: {
      text: "text-yellow-500",
      bg: "bg-yellow-200",
      border: "border-yellow-400",
      swatch: "bg-yellow-500",
    },
  };

  return (
    <div className="relative w-full h-screen p-6">
      {/* Direction selector */}
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
          <DrawerHeader className="relative">
            <DrawerTitle className="flex items-center justify-between border-b w-full p-4 fixed top-0 bg-background z-10">
              <span>
                <div className="text-md text-muted-foreground">
                  Theme Customizations
                </div>
                <div className="text-sm font-light">
                  Customize and preview in real time
                </div>
              </span>

              <span className="flex gap-2">
                <RefreshCcw
                  size={22}
                  onClick={handleReset}
                  className="cursor-pointer opacity-70 hover:opacity-100 transition"
                />
                <DrawerClose asChild>
                  <X size={22} className="cursor-pointer opacity-70" />
                </DrawerClose>
              </span>
            </DrawerTitle>

            <DrawerDescription asChild>
              <div className="space-y-6 p-4 pt-24">
                {/* Preview */}
                <div
                  className={`border-2 inline-block rounded-md p-1 text-sm ${
                    color !== "custom"
                      ? `${colorMap[color].text} ${colorMap[color].bg} ${colorMap[color].border}`
                      : ""
                  }`}
                  style={
                    color === "custom"
                      ? {
                          color: customColor,
                          backgroundColor: `${customColor}33`,
                          borderColor: customColor,
                        }
                      : {}
                  }
                >
                  Theming Preview
                </div>

                {/* Colors */}
                <div>
                  <div className="font-bold mb-2">Primary Color</div>
                  <div className="flex gap-3 items-center">
                    {(["red", "blue", "green", "yellow"] as const).map((c) => (
                      <div
                        key={c}
                        onClick={() => setColor(c)}
                        className="border w-[15%] rounded-md p-1 cursor-pointer hover:ring-2 ring-blue-500/30"
                      >
                        <div
                          className={`w-full h-8 rounded ${colorMap[c].swatch}`}
                        />
                      </div>
                    ))}

                    {/* ✏️ Custom color */}
                    <div
                      onClick={() => colorInputRef.current?.click()}
                      className={`border rounded-md p-2 cursor-pointer ${
                        color === "custom"
                          ? "ring-2 ring-blue-500"
                          : "hover:bg-muted"
                      }`}
                    >
                      <Pencil  size={22} color={colorInputRef.current?.value}  />
                    </div>

                    {/* REAL color input */}
                    <input
                      ref={colorInputRef}
                      type="color"
                      value={customColor}
                      onChange={(e) => {
                        setCustomColor(e.target.value);
                        setColor("custom");
                      }}
                      className="absolute opacity-0 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Theme */}
                <div>
                  <div className="font-bold mb-2">Theme</div>
                  <div className="flex gap-3">
                    <div className="w-full">

                    <Sun
                      onClick={() => setTheme("light")}
                      className={` border ${baseIcon} ${
                        isLight ? activeIcon : inactiveIcon
                      }`}
                    />
                    <div>Light</div>
                    </div>
                  <div className="w-full">


                    <Moon
                      onClick={() => setTheme("dark")}
                      className={`border-2 ${baseIcon} ${
                        isDark ? activeIcon : inactiveIcon
                      }`}
                    />
                       <div>Dark</div>
                    </div>
                 <div className="w-full">

                    <Laptop
                      onClick={() => setTheme("system")}
                      className={`border-2 ${baseIcon} ${
                        isSystem ? activeIcon : inactiveIcon
                      }`}
                    />
                       <div>System</div>
                    </div>
                  </div>
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
