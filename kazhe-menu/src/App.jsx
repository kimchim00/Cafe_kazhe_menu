import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import CategoryNav from "./components/CategoryNav";
import MenuSection from "./components/MenuSection";

import { menu } from "./data/menu";

function App() {
  const [activeCategory, setActiveCategory] = useState(
    menu[0]?.id || ""
  );

  const activeSection = menu.find(
    (section) => section.id === activeCategory
  );

  return (
    <main className="app" dir="rtl">
      <Header />

      <CategoryNav
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="menu">
        {activeSection && (
          <MenuSection section={activeSection} />
        )}
      </div>
    </main>
  );
}

export default App;