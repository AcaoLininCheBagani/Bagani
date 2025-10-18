
import Toggle from "./Toggle";
export default function Header() {
    return (
      <header className="bg-background sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-foreground">Bagani</h1>
          <Toggle />
        </div>  
      </header>
    );
  }