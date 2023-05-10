type SearchCardProps = {
    isLargeScreen: boolean;
    key: number;
};
export default function SearchCard({isLargeScreen, key}:SearchCardProps): JSX.Element {
  return (
    <div className={`card ${isLargeScreen ? "w-1/6 max-w-1/6 hover:cursor-pointer" : "w-1/2 max-w-1/2"} bg-base-100 shadow-xl bg-stone-900`} key={key}>
      <figure className="p-4 relative">
        <img
          src="https://placehold.co/400"
          alt="Shoes"
          className="aspect-square object-contain object-center rounded-md"
        />
        <h4 className="absolute top-8 left-6 text-2xl font-bold">Podcasts</h4>
      </figure>
    </div>
  );
}
