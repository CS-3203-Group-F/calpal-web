interface ToolboxCardProps {
  name: string;
  description: string;
  imgURL: string;
}

export async function ToolboxCard(props: ToolboxCardProps) {
  return (
    <div className="flex flex-row justify-between items-center self-stretch p-4 bg-stone-100 rounded-lg h-24 hover:bg-stone-200 cursor-pointer">
      <div className="flex flex-col">
        <h3>{props.name}</h3>
        <p className="text-base text-stone-500 font-light">
          {props.description}
        </p>
      </div>
      <div>
        <img width={100} height={80} src={`${props.imgURL}`} alt="Toys"></img>
      </div>
    </div>
  );
}
