import { FileNameTabBar } from "./FileNameTabBar";
import { FileContent } from "./FileContent";

interface FileViewerProps {
  files: File[];
  selectFileIndex: number;
}

export const FileViewer = ({
  files,
  selectFileIndex,
}: FileViewerProps): JSX.Element => {
  return (
    <div>
      <FileNameTabBar files={files} selectFileIndex={selectFileIndex} />
      <FileContent filecontent={files[selectFileIndex].filecontent} />
    </div>
  );
};
