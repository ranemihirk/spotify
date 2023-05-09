import Card from "./Card";

type PlaylistProps = {
	title: String;
    number: Number;
    isLargeScreen: boolean;
};

export default function Playlist({title, number, isLargeScreen}:PlaylistProps): JSX.Element {
  return (
    <div className="px-6 py-4">
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-extrabold">{title}</h4>
        <button className="btn normal-case text-sm bg-transparent border-none">
          Show all
        </button>
      </div>
      <div className="flex">
        {new Array(number).fill(0).map((cell, idx) => (
          <Card isLargeScreen={isLargeScreen} />
        ))}
      </div>
    </div>
  );
}
