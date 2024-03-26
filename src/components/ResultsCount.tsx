type TotalNumberOfResults = {
  totalNumberOfResults: number;
};

export default function ResultsCount({
  totalNumberOfResults,
}: TotalNumberOfResults) {
  return <p className="count"><span className="u-bold">{totalNumberOfResults} results</span></p>;
}
