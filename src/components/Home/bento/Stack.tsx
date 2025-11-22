import { metaData } from "@/utils/content/metaData";

export default function Stack() {
  return (
    <div className="w-full m-auto">
      <div className="mb-3 -space-y-2 to-start-animation">
        <h1 className="text-lg lg:text-xl font-medium">{metaData.stack.title}</h1>
      </div>
      <div className="w-full grid grid-cols-4 gap-2 h-full">
        {
          metaData.stack.list.map((p) => (
            <div
              className="to-start-animation flex items-center justify-center rounded-full ease-in-out duration-200 relative"
              title={p.name}
              key={p.name}>
              <div className="h-18 w-18 border flex items-center justify-center rounded-2xl bg-muted/20 backdrop-blur">
                <img src={`/svg/stack/${p.icon}`} className={'h-9 absolute blur-md opacity-50'} alt={p.name} />
                <img src={`/svg/stack/${p.icon}`} className={'h-9 absolute'} alt={p.name} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
