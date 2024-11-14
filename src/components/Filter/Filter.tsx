import iconRemove from "../../assets/images/icon-remove.svg";

interface Props {
  keywords: string[];
  removeKeywords: (keyword: string) => void;
  clearAll: () => void;
}

export const Filter = ({ keywords, removeKeywords, clearAll }: Props) => {
  return (
    <div className="">
      {keywords.length > 0 && (
        <div className="filter-container">
          <ul>
            {keywords.map((key, id) => {
              return (
                <li key={id}>
                  {key}
                  <button className="close" onClick={() => removeKeywords(key)}>
                    <img src={iconRemove} alt="Icon remove" />
                  </button>
                </li>
              );
            })}
          </ul>
          <button onClick={clearAll} className="clear">
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
