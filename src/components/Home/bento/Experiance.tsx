export default function Experiance() {
  return (
    <div className="lg:order-2 order-4 mt-8 lg:mt-0 col-span-full lg:col-span-1 hidden lg:flex relative overflow-hidden">
      <div className="w-full h-full flex flex-col pt-5 ">
        <div className="flex items-center justify-between w-full px-5">
          <h1 className="text-lg lg:text-xl to-start-animation font-medium ">
            Work Experience
          </h1>
        </div>
        <div className="w-full h-full p-5 space-y-3 bg-linear-to-t from-muted/10 via-transparent">
          <div className="w-full flex justify-between items-end to-start-animation">
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-12 bg-muted/20 border flex items-center justify-center rounded-full p-1.5">
                <img
                  className="filter grayscale contrast-200 invert w-full opacity-55"
                  src="/experience/delib.svg"
                />
              </div>
              <div>
                <p className="text-md text-foreground/90">
                  Délib
                  <span className="text-sm text-foreground/60"> Software Engineer </span>
                </p>
                <p className="text-xs text-foreground/50">Oct 2025 - Present </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-end to-start-animation">
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-12 bg-muted/20 border flex items-center justify-center rounded-full p-1.5">
                <img
                  className="filter grayscale contrast-200 invert w-full opacity-55"
                  src="/experience/capyxis.png"
                />
              </div>
              <div>
                <p className="text-md text-foreground/90">
                  Capyxis
                  <span className="text-sm text-foreground/60"> Software Engineer </span>
                </p>
                <p className="text-xs text-foreground/50">July 2024 - Present </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
