export default function HomeItemCard(props) {
  return (
    <div className="flex items-start justify-between my-8">
      <div className="flex items-start">
        <img className="w-14 sm:w-14 md:w-20" src={props.item.image} alt="Image of Item" />
        {/* Text Content */}
        <div className="ml-4 md:ml-8 justify-start text-left max-w-fit">
          <div className="flex justify-start items-center flex-wrap">
            <h1 className="mr-2 inline-block text-base md:text-lg font-bold">{props.item.title}</h1>
            <span className="px-1 py-0.5 bg-zinc-300 rounded-md text-sm md:text-base">{props.item.category}</span>
          </div>
          <p className="w-9/12 line-clamp-2 text-sm md:text-base">{props.item.description}</p>
        </div>
      </div>

      <p>${props.item.price}</p>
    </div>
  );
}
