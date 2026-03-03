import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-tight text-primary">
            SCHLORK
          </span>
        </div>
        <button
          onClick={onMenuToggle}
          className="p-2 rounded-md hover:bg-secondary transition-colors"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-6 w-6 text-foreground" />
        </button>
      </div>
    </header>
  );
};

export default Header;
