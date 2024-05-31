import { useMutation, UseMutationResult } from "@tanstack/react-query";
import api from "@/lib/axios";
import type { HistoryFileType } from "./useFilesHistory";
import useFilesHistory from "./useFilesHistory";

interface GeneratePDFResponse {
  fileUrl: string;
  blobURL: string;
  fileName: string;
}

interface ApiResponse {
  FileUrl: string;
}

const useGeneratePDF = (): UseMutationResult<
  GeneratePDFResponse,
  Error,
  string
> => {
  const { AddToHistory } = useFilesHistory();

  return useMutation<GeneratePDFResponse, Error, string>({
    mutationFn: async (text: string) => {
      const response = await api.post<ApiResponse>("pdf/html", {
        html: text,
        name: text,
      });
      const fileUrl = response.data.FileUrl;

      const fileResponse = await fetch(fileUrl);
      const blob = await fileResponse.blob();
      const blobURL = URL.createObjectURL(blob);
      const fileName = `${text}.pdf`;
      AddToHistory({ fileName, fileUrl });
      return { fileUrl, blobURL, fileName };
    },
  });
};

function onSuccessFunction(
  data: GeneratePDFResponse,
  setUrlToCurrentPDF: (data: HistoryFileType) => void
) {
  const { fileUrl, blobURL, fileName } = data;
  setUrlToCurrentPDF({ fileName, fileUrl });
  const a = document.createElement("a");
  a.href = blobURL;
  a.style.display = "none";
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
}

export { useGeneratePDF, onSuccessFunction };
