import { useEffect, useRef } from "react";
import { menu } from "../data/menu";

function CategoryNav({
  activeCategory,
  setActiveCategory,
}) {
  const buttonRefs = useRef({});

  useEffect(() => {
    const activeButton =
      buttonRefs.current[activeCategory];

    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeCategory]);

  return (
    <nav className="categories">
      {menu.map((category) => (
        <button
          key={category.id}
          ref={(element) => {
            buttonRefs.current[category.id] = element;
          }}
          className={
            activeCategory === category.id
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveCategory(category.id)
          }
        >
          {category.title}
        </button>
      ))}
    </nav>
  );
}

export default CategoryNav;