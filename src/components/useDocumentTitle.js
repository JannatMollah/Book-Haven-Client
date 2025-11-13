import { useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Book Haven`;
  }, [title]);
};

export default useDocumentTitle;