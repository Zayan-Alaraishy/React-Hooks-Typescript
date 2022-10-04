type SidebarProps = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const Sidebar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: SidebarProps) => {
  console.log("categories: ", selectedCategory);
  return (
    <section className="filters">
      <h1>Shopping</h1>
      <fieldset>
        <legend className="field-name">Categories</legend>
        {categories.map((row: string, ind: number) => (
          <label key={ind}>
            {row}
            <input
              type="radio"
              key={selectedCategory}
              name={selectedCategory}
              value={row}
              checked={selectedCategory === row}
              onChange={(e) => setSelectedCategory(e.target.value)}
            />
          </label>
        ))}
      </fieldset>
    </section>
  );
};

export default Sidebar;
