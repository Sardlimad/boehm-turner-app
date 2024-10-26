import React, { useEffect, useState } from "react";

export const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "dark-theme";
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <input
        type="checkbox"
        class="checkbox"
        id="checkbox"
        onClick={handleTheme}
      />
      <label for="checkbox" class="checkbox-label">
        <i class="fas fa-sun"></i>
        <i class="fas fa-moon"></i>
        <span class="ball"></span>
      </label>
    </div>
  );
};
