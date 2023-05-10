import { useOutletContext } from "react-router";
import TopNav from "./Core/TopNav";
import SearchCard from "./SearchCard";

type HomeProps = {
  isLargeScreen: boolean;
};

export default function Search(): JSX.Element {
  const { isLargeScreen } = useOutletContext<HomeProps>();
  return (
    <div>
      {/* Top Nav */}
      <TopNav isSearch={true} />
      <div className="px-6 py-4 mt-8">
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-extrabold">Browse all</h4>
        </div>
        <div className="flex flex-wrap">
          {new Array(64).fill(0).map((cell, idx) => (
            <SearchCard isLargeScreen={isLargeScreen} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
