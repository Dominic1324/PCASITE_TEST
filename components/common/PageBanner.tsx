type PageBannerProps = {
  title: string;
  watermark?: string;
};

export default function PageBanner({ title, watermark }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-slate-800 py-12 text-white md:py-14">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <p className="absolute right-2 top-2 text-[96px] font-black leading-none tracking-tight text-white md:top-0 md:text-[180px]">
          {watermark || title}
        </p>
      </div>
    </section>
  );
}
