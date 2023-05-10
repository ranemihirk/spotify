import { Outlet } from "react-router";

type MainBodyProps = {
  isLargeScreen: boolean;
};

export default function MainBody({
  isLargeScreen,
}: MainBodyProps): JSX.Element {
  return (
    <main className="relative grow bg-gradient-to-t from-stone-950 from-40% to-stone-800 text-new-white overflow-hidden overflow-y-scroll">
      <Outlet context={{ isLargeScreen }} />
    </main>
  );
}
