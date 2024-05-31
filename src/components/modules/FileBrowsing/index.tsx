import { FC } from "react";
import type { HistoryFileType } from "@/hooks/useFilesHistory";
import useFilesHistory from "@/hooks/useFilesHistory";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface FileBrowsingInterface {
  setUrlToCurrentPDF: (data: HistoryFileType) => void;
}

const FileBrowsing: FC<FileBrowsingInterface> = ({ setUrlToCurrentPDF }) => {
  const { history } = useFilesHistory();

  return (
    <Table>
      <TableCaption>History of yours PDF files .</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>File name</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {history.map((file) => (
          <TableRow key={`key__file-${file.fileUrl}`}>
            <TableCell>{file.fileName}</TableCell>
            <TableCell>
              <Button
                variant={"secondary"}
                onClick={() => setUrlToCurrentPDF(file)}
              >
                Show
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FileBrowsing;
