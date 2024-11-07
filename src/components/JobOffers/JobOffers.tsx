interface JobOffersData {
  id: number;
  logo: string;
  company: string;
  new: string;
  featured: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
}

export const JobOffers = ({ data }: { data: JobOffersData[] }) => {
  return (
    <div className="section-job-offers container">
      {data.map((dataItem) => (
        <div className="job-offers-container" key={dataItem.id}>
          <div>
            <img src={dataItem.logo} alt={dataItem.company} />
          </div>
          <div>
            <div>
              <h2>{dataItem.company}</h2>
              {dataItem.new && <span>NEW!</span>}
              {dataItem.featured && <span>FEATURED</span>}
            </div>
            <div>
              <p>{dataItem.position}</p>
              <p>
                {dataItem.postedAt} • {dataItem.contract} • {dataItem.location}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
