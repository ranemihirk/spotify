type CardProps = {
    isLargeScreen: boolean;
    key: number;
};
export default function Card({isLargeScreen, key}:CardProps): JSX.Element {
  return (
    <div className={`card group/maincard ${isLargeScreen ? "w-1/6 max-w-1/6 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-stone-700" : "w-1/2 max-w-1/2"} mx-2 bg-base-100 shadow-xl bg-stone-900`} key={key}>
      <figure className="p-4 relative">
        <img
          src="https://placehold.co/400"
          alt="Shoes"
          className="aspect-square object-contain object-center rounded-md"
        />
        <img
          src="https://placehold.co/400"
          alt=""
          className="absolute bottom-6 right-6 w-16 rounded-full border-2 border-slate-600 transition ease-in-out duration-300 hover:scale-110 hidden group-hover/maincard:block"
        />
      </figure>
      <div className="card-body p-4 pt-0">
        <h2 className="card-title text-base">Shoes!</h2>
        <p className="text-sm">
          If a dog chews shoes whose shoes does he choose?
        </p>
      </div>
    </div>
  );
}
