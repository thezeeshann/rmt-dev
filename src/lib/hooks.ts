import { useState, useEffect } from "react";
import { JobItemExpanded, JobItems } from "./types";
import { BASE_URL } from "./constant";
import { useQuery } from "@tanstack/react-query";

type JobItemApiResponse = {
  publice: boolean;
  jobItem: JobItemExpanded;
};

const fetchJobItems = async (id: number): Promise<JobItemApiResponse> => {
  const response = await fetch(`${BASE_URL}/${id}`);
  const data = await response.json();
  return data;
};

export function useJobItem(id: number | null) {
  const { data, isLoading } = useQuery(
    ["job-item", id],
    () => (id ? fetchJobItems(id) : null),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
    }
  );

  console.log(data);
  return {
    isLoading,
    jobItem: data?.jobItem,
  };
}

export function useActiveId() {
  const [activeId, setActiveId] = useState();

  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.slice(1);
      setActiveId(id);
    };
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return activeId;
}

export function useJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState<JobItems[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const totalNumberOfJobItems = jobItems.length;
  const jobItemsSliced = jobItems.slice(0, 7);

  useEffect(() => {
    if (!searchText) return;
    const getData = async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}?search=${searchText}`);
      const data = await response.json();
      setIsLoading(false);
      setJobItems(data.jobItems);
    };
    getData();
  }, [searchText]);

  return {
    jobItemsSliced,
    isLoading,
    totalNumberOfJobItems,
  };
}

export function useDebounce(value: string): string {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [value]);

  return debouncedValue;
}
