import useGetIssue from "../hooks/use-get-issues";

import { DataTable } from "../components/data-table";
import Filter from "../components/filter";
import ErrorPage from "./error-page";
import LoadingPage from "./loading-page";

const MainPage = () => {
  const { data, isLoading, error } = useGetIssue();

  if (error) return <ErrorPage />;
  if (isLoading) return <LoadingPage />;

  return (
    <div className="w-[90%] m-auto">
      <Filter />
      <DataTable data={data || []} />
    </div>
  );
};

export default MainPage;
