import { useState } from "react";
import type { HistoryFileType } from "hooks/useFilesHistory";
import TextForm from "./components/modules/TextForm";
import FilePreview from "./components/modules/FilePreview";
import FileBrowsing from "./components/modules/FileBrowsing";

function App() {
  const [currentPDF, setCurrentPDF] = useState<null | HistoryFileType>(null);

  const setUrlToCurrentPDF = (data: HistoryFileType) => setCurrentPDF(data);

  return (
    <div className="flex justify-center gap-6">
      <div className="flex flex-col gap-8">
        <TextForm {...{ setUrlToCurrentPDF }} />
        <FileBrowsing {...{ setUrlToCurrentPDF }} />
      </div>
      <FilePreview {...{ currentPDF: currentPDF?.fileUrl }} />
    </div>
  );
}

export default App;
