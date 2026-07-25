import { Menu } from "lucide-react";

function Topbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <header
      className="
      h-16
      border-b
      border-[#1CB5B9]/20
      bg-black
      flex
      items-center
      px-6
      justify-between
      sticky
      top-0
      z-40
      "
    >

      <div className="flex items-center gap-4">

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu
            className="text-[#1CB5B9]"
            size={28}
          />
        </button>

        <h1 className="text-2xl font-bold">
          <span className="text-[#1CB5B9]">Gap</span>
          <span className="text-white">Quest</span>
        </h1>

      </div>

    </header>
  );
}

export default Topbar;