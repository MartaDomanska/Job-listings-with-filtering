interface Props {
  keywords: string[];
  addKeywords: (keyword: string) => void;
  removeKeywords: (keyword: string) => void;
  clearAll: () => void;
}

export const Filter = ({ keywords, removeKeywords, clearAll }: Props) => {
  return (
    <div className="filter-container container">
      <ul>
        {keywords.map((key, id) => {
          return (
            <li key={id}>
              {key}
              <button className="close" onClick={() => removeKeywords(key)}>
                <img src={"./images/icon-remove.svg"} alt="" />
              </button>
            </li>
          );
        })}
        
      </ul>
      <a href="/#" onClick={() => clearAll()} className="clear">
          Clear
        </a>
    </div>
  );
};