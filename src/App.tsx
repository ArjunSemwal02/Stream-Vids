import { useState } from "react";
import { CategoryPills } from "./components/CategoryPills";
import { categories } from "./data/home";
import { PageHeader } from "./layouts/PageHeader";

export default function App() {
const [selectedCategory, setSelectedCategory] = useState(categories[0])

return <div className="max-h-screen flex flex-col">
  <PageHeader/>
  <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
    <div className="">Sidebar</div>
    <div className="overflow-x-hidden px-10 pb-5">
      <div className="sticky top-0 z-10 bg-white pb-2">
        <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory}/>
    </div>
    </div>
    
  </div>
  
</div>
}
