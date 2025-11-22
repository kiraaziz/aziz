import { Button } from '@/components/ui/button';
import RippleGrid from '@/components/ui/RippleGrid';
import { metaData } from '@/utils/content/metaData';
import { cn, useHalfText } from '@/utils/global';
import { ArrowRight } from 'lucide-react';

export default async function BlogPage() {

  const articleReq = await fetch(`https://dev.to/api/articles?username=kiraaziz`);
  const articles = await articleReq.json();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 w-full lg:py-10 gap-2 mx-auto max-w-3xl">
      <div className="mb-5 to-start-animation relative col-span-full rounded-3xl border p-4 border-primary/20! overflow-hidden bg-primary/5">
        <div className="hidden lg:flex absolute opacity-40 h-full w-full top-0 left-0 -z-10 overflow-hidden">
          <RippleGrid enableRainbow={false} gridColor="#ffffff" rippleIntensity={0.3} gridSize={10} gridThickness={5} opacity={0.5} />
        </div>
        <span className="to-start-animation text-xs font-semibold rounded-full bg-primary/10 text-primary border !border-primary/20! px-3">{metaData.blogPage.badge}</span>
        <h2 className="to-start-animation text-lg font-bold">{metaData.blogPage.title}</h2>
        <p className="text-sm text-foreground/60 mt-1 font-light">{metaData.blogPage.description}</p>
        <a href={metaData.blogPage.button.href} target="_blank" rel="noopener">
          <Button className="to-start-animation mt-2 rounded-full bg-muted/20 flex items-center justify-center gap-1 hover:gap-3 ease-in-out duration-300 transition-all" variant="outline">
            {metaData.blogPage.button.label}
            <ArrowRight size={20} />
          </Button>
        </a>
      </div>
      {articles.map((val: any) => (
        <div
          key={val.id}
          className="overflow-hidden to-start-animation rounded-3xl border bg-muted/10 flex flex-col lg:flex-row">
          <img
            src={val.social_image.replace("width=1000,height=500", "width=500,height=300")}
            className="to-start-animation border-r h-36 lg:h-full lg:w-64 min-w-64 bg-primary/20  object-cover object-top-left"
            alt={val.title}
          />
          <div className="flex-1 lg:p-5 p-3 ">
            <h1 className="font-bold to-start-animation">{useHalfText(val.title, 40)}</h1>
            <div className="lg:mb-2 flex flex-wrap gap-1 mt-1 mb-2">
              {val.tags.split(', ').map((tag: string) => (
                <button
                  key={tag}
                  className="to-start-animation text-xs text-foreground/60 border bg-muted/20 px-3 py-1 rounded-full"
                >
                  {tag}
                </button>
              ))}
            </div>
            <p className="to-start-animation text-xs font-light text-foreground/50">{val.description}</p>
          </div>
          <div className="px-3 pb-3 to-start-animation w-full lg:w-max flex items-end justify-end">
            <a
              className={cn(
                "text-sm font-light text-foreground/60 gap-2 transition-all ease-in-out duration-200 hover:opacity-60 flex items-center justify-center",
                "lg:bg-muted/20 px-4  py-3 bg-muted/20 border rounded-xl w-full lg:w-max"
              )}
              href={val.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
