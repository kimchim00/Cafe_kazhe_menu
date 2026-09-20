function MenuItem({ item }) {
  return (
    <article className="menu-item">
      {item.image && (
        <div className="menu-item-image">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
          />
        </div>
      )}

      <div className="menu-item-content">
        <div className="menu-item-info">
          <h3>{item.name}</h3>

          {item.description && (
            <p>{item.description}</p>
          )}
        </div>

        {item.options && (
          <div className="menu-options">
            {item.options.map((option) => (
              <div
                className="menu-option"
                key={option.label}
              >
                <span>{option.label}</span>

                <strong>
                  {option.price.toLocaleString("fa-IR")}
                  <small> تومان</small>
                </strong>
              </div>
            ))}
          </div>
        )}

        {!item.options &&
          item.price !== null &&
          item.price !== undefined && (
            <div className="menu-item-price">
              {item.price.toLocaleString("fa-IR")}
              <span> تومان</span>
            </div>
          )}
      </div>
    </article>
  );
}

export default MenuItem;