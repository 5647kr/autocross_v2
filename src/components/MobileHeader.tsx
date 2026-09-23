import { Link } from "react-router";
import { Calendar, ScanLine, Settings } from "lucide-react";

export default function MobileHeader() {
  return (
    <header className="flex justify-end fixed bg-(--bg) w-full lg:hidden">
      <button type="button" className="p-2.5 flex items-center justify-center">
        <ScanLine />
      </button>
      <Link to="/calendar" className="p-2.5 flex items-center justify-center">
        <Calendar />
      </Link>
      <Link to="/settings" className="p-2.5 flex items-center justify-center">
        <Settings />
      </Link>
    </header>
  );
}
