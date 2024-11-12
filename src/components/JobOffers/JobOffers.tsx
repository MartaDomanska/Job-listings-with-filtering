export interface Props {
  id: number;
  logo: string;
  company: string;
  new: boolean;
  featured: boolean;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  role: string;
  level: string;
  languages: string[];
  tools: string[];
}

export const JobOffers = ({
  data,
  onClick,
}: {
  data: Props[];
  onClick: (dataItem: Props) => void;
}) => {
  return (
    <div className="section-job-offers container">
      {data.map((dataItem) => (
        <div className="job-offers-container" key={dataItem.id}>
          <div className="job-offers-content">
            <div className="job-offers-logo">
              <img src={dataItem.logo} alt={dataItem.company} />
            </div>
            <div>
              <div className="job-offers-company">
                <h2>{dataItem.company}</h2>
                {dataItem.new && <span>NEW!</span>}
                {dataItem.featured && <span>FEATURED</span>}
              </div>
              <div className="job-offers-details">
                <h3>{dataItem.position}</h3>
                <p>
                  {dataItem.postedAt} • {dataItem.contract} •{" "}
                  {dataItem.location}
                </p>
              </div>
            </div>
          </div>
          <div className="job-offers-tools">
            {[dataItem.role, dataItem.level, ...dataItem.languages, ...dataItem.tools].map((key, id) => (
              <button onClick={() => onClick(dataItem)} key={id}>
                {key}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
