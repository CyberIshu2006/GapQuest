import {
  Upload,
  FileText,
  Brain,
  Scale,
  Search,
  Rocket,
  Download,
  BookOpen,
  FileCode,
  Library,
  Wrench,
  Info,
} from "lucide-react";

function Sidebar({
  sidebarOpen,
  activePage,
  setActivePage,
}) {
 const analysis = [
  {
    id: "upload",
    label: "Upload Papers",
    icon: Upload,
  },
];

 const resources = [
  { id: "ieee", label: "IEEE Format", icon: BookOpen },
  { id: "apa", label: "APA Format", icon: FileCode },
  { id: "types", label: "Research Types", icon: Library },
  { id: "samples", label: "Sample Papers", icon: FileText },
  { id: "tools", label: "Research Tools", icon: Wrench },
];

  return (
    <aside
      className={`
      bg-[#0B0B0B]
      border-r
      border-[#1CB5B9]/20
      transition-all
      duration-300
      overflow-hidden
      ${
        sidebarOpen
          ? "w-72"
          : "w-0"
      }
      `}
    >

      <div className="p-6">

        <h2 className="text-[#1CB5B9] uppercase text-sm tracking-widest mb-6">
          Research Analysis
        </h2>

        {analysis.map((item) => {
  const Icon = item.icon;

  return (
    <button
      key={item.id}
      onClick={() => setActivePage(item.id)}
      className={`
        w-full
        flex
        items-center
        gap-4
        p-3
        rounded-xl
        transition
        mb-2
        ${
          activePage === item.id
            ? "bg-[#1CB5B9] text-black"
            : "hover:bg-[#1CB5B9]/10"
        }
      `}
    >
      <Icon size={20} />
      {item.label}
    </button>
  );
})}

        <h2 className="text-[#1CB5B9] uppercase text-sm tracking-widest mt-8 mb-6">
          Resources
        </h2>

       {resources.map((item) => {
  const Icon = item.icon;

  return (
    <button
      key={item.id}
      onClick={() => setActivePage(item.id)}
      className={`
        w-full
        flex
        items-center
        gap-4
        p-3
        rounded-xl
        transition
        mb-2
        ${
          activePage === item.id
            ? "bg-[#1CB5B9] text-black"
            : "hover:bg-[#1CB5B9]/10"
        }
      `}
    >
      <Icon size={20} />
      {item.label}
    </button>
  );
})}
       <button
  onClick={() => setActivePage("about")}
  className={`
  w-full
  flex
  items-center
  gap-4
  p-3
  rounded-xl
  transition
  ${
    activePage==="about"
      ? "bg-[#1CB5B9] text-black"
      : "hover:bg-[#1CB5B9]/10"
  }
  `}
>
  <Info size={20}/>
  About GapQuest
</button>

      </div>

    </aside>
  );
}

export default Sidebar;