import Background from "./Background";
import BookmarksButton from "./BookmarksButton";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import JobItemContent from "./JobItemContent";
import Sidebar from "./Sidebar";
import JobList from "./JobList";
import Pagination from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import Sorting from "./SortingControls";

function App() {
  const [searchText, setSearchText] = useState();
  const [jobItems, setJobItems] = useState();
  const [isLoading,setIsLoading] = useState(false)

  useEffect(() => {
    if (!searchText) return;
    const getData = async () => {
      setIsLoading(true)
      const response = await fetch(
        `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
      );
      const data = await response.json();
        setIsLoading(false)
      setJobItems(data.jobItems);
    };
    getData();
  }, [searchText]);

  return (
    <>
      <Background />
      <Header>
        <div className="header__top">
          <Logo />
          <BookmarksButton />
        </div>
        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </Header>
      <Container>
        <Sidebar>
          <div className="sidebar__top">
            <ResultsCount />
            <Sorting />
          </div>
          <JobList jobItems={jobItems} isLoading={isLoading} />
          <Pagination />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
    </>
  );
}

export default App;
