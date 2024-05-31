export type HistoryFileType = {
  fileName: string;
  fileUrl: string;
};

const useFilesHistory = () => {
  const history = (() => {
    const historyJSON = localStorage.getItem("history");
    return historyJSON ? (JSON.parse(historyJSON) as HistoryFileType[]) : [];
  })();

  function AddToHistory(data: HistoryFileType) {
    history.unshift(data);
    localStorage.setItem("history", JSON.stringify(history));
  }

  return { history, AddToHistory };
};

export default useFilesHistory;
