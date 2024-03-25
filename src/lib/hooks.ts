import { useState, useEffect } from "react";
import { JobItemExpanded, JobItems } from "./types";
import { BASE_URL } from "./constant";

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

export function useJobItem(id: number) {
  const [jobItem, setJobItem] = useState<JobItemExpanded | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/${id}`);
      const data = await response.json();
      setIsLoading(false);
      setJobItem(data.jobItem);
    };
    fetchData();
  }, [id]);

  return {
    isLoading,
    jobItem,
  };
}

export function useJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState<JobItems[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
  };
}
