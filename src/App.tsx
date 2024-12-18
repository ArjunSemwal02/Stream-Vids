import { CategoryPills } from "./components/CategoryPills";
import { PageHeader } from "./layouts/PageHeader";

export default function App() {
return <div className="max-h-screen flex flex-col">
  <PageHeader/>
  <div className="grid grid-cols-[auto, 1fr] flex-grow-1 overflow-auto">
    <div className="">Sidebar</div>
    <div className="sticky top-0 z-10 bg-white pb-2">
        <CategoryPills/>
    </div>
  </div>
  
</div>
}
