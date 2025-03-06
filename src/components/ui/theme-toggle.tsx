import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "system"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun
          className={`h-[1.2rem] w-[1.2rem] transition-all rotate-90 scale-0"`}
        />
      ) : (
        <Moon
          className={`absolute h-[1.2rem] w-[1.2rem] transition-all "rotate-90 scale-0"`}
        />
      )}
    </Button>
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline" size="icon" className="rounded-full">
    //       <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"}`} />
    //       <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`} />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
}
