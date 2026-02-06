import { useEffect } from 'react';

interface ProtectedContentProps {
  children: React.ReactNode;
}

export default function ProtectedContent({ children }: ProtectedContentProps) {
  useEffect(() => {
    const disableContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const disableKeyboardShortcuts = (e: KeyboardEvent) => {
      if (
        e.keyCode === 123 ||
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
        (e.ctrlKey && e.shiftKey && e.keyCode === 67) ||
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) ||
        (e.ctrlKey && e.keyCode === 85) ||
        (e.ctrlKey && e.keyCode === 83) ||
        (e.ctrlKey && e.keyCode === 67)
      ) {
        e.preventDefault();
        return false;
      }
    };

    const disableSelection = () => {
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';
    };

    const preventDrag = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('contextmenu', disableContextMenu);
    document.addEventListener('keydown', disableKeyboardShortcuts);
    document.addEventListener('dragstart', preventDrag);
    disableSelection();

    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('keydown', disableKeyboardShortcuts);
      document.removeEventListener('dragstart', preventDrag);
    };
  }, []);

  return <div className="select-none">{children}</div>;
}
