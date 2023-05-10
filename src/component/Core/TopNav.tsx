import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type TopNavProps = {
  isSearch: boolean;
};

export default function TopNav({ isSearch }: TopNavProps): JSX.Element {
  return (
    <div className="sticky top-0 left-0 z-50 right-0 flex justify-between items-center bg-stone-900 px-4 py-2">
      <div className="flex items-center ml-6">
        <FontAwesomeIcon icon={faChevronLeft} size="lg" className="" />
        <FontAwesomeIcon icon={faChevronRight} size="lg" className="ml-8" />
        <input type="text" placeholder="What do you want to listen to?" className={`${!isSearch && "hidden"} input w-full max-w-xs rounded-full ml-6`} />
      </div>
      <div>
        <button className="btn normal-case mr-4 bg-stone-900 border-none">
          Sign up
        </button>
        <button className="btn normal-case font-bold rounded-full bg-new-white text-new-black hover:scale-110">
          Log in
        </button>
      </div>
    </div>
  );
}
