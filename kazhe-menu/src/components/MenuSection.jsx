import MenuItem from "./MenuItem";

function MenuSection({ section }) {
  if (section.items.length === 0) {
    return null;
  }

  return (
    <section
      className="menu-section"
      id={section.id}
    >
      <h2>{section.title}</h2>

      <div className="menu-items">
        {section.items.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}

export default MenuSection;