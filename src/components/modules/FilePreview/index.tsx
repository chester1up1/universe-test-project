import { FC } from "react";
//@ts-ignore
import * as PDFViewer from "pdf-viewer-reactjs";

interface FilePreviewInterface {
  currentPDF?: string;
}

const FilePreview: FC<FilePreviewInterface> = ({ currentPDF }) => {
  return (
    <div key={currentPDF}>
      {currentPDF ? (
        <div id="PDFViewer-component">
          <PDFViewer
            document={{
              url: currentPDF,
            }}
            loader={<Loader />}
          />
        </div>
      ) : (
        <Placeholder />
      )}
    </div>
  );
};

const Placeholder = () => {
  return (
    <div className="w-[595px] h-[841px] border border-dashed border-white-3/4 rounded-md flex flex-row justify-center items-center">
      <p className="font-extrabold text-[24px] italic">
        Here will be preview of your pdf 📄
      </p>
    </div>
  );
};
const Loader = () => {
  return (
    <div className="w-[595px] h-[841px] border border-dashed border-white-3/4 rounded-md flex flex-row justify-center items-center">
      <p className="font-extrabold text-[24px] italic">Prepear...</p>
    </div>
  );
};

export default FilePreview;
