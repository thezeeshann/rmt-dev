import Background from "./Background";
import BookmarksButton from "./BookmarksButton";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import JobItemContent from "./JobItemContent";
import Sidebar from "./Sidebar";
import JobList from "./JobList";
import Pagination from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import Sorting from "./SortingControls";
import { useJobItems } from "../lib/hooks";

function App() {
  const [searchText, setSearchText] = useState();
  const { isLoading, jobItemsSliced } = useJobItems(searchText);

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
          <JobList jobItems={jobItemsSliced} isLoading={isLoading} />
          <Pagination />
        </Sidebar>
        <JobItemContent  />
      </Container>
      <Footer />
    </>
  );
}

export default App;
