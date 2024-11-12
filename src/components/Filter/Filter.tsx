interface Props {
  keywords: [], 
  removeKeywords: () => void, 
  clearAll: () => void,
}

export const Filter = ({ keywords, removeKeywords, clearAll }: Props) => { 
 
  return ( 
    <div className="filter-container"> 
      <ul> 
      {keywords.map((key, id) => {
          return (
            <li key={id}>
              {key}
              <button className="close" onClick={() => removeKeywords()}>
                <img src={"./images/icon-remove.svg"} alt="" />
              </button>
            </li>
          );
        })}
        <a href="/#" onClick={() => clearAll()}>
          Clear
        </a>
      </ul> 
    </div> 
  ); 
};