type Logo = {
    name?: string;
    src?: string;
    size?:string;
};

type LogosCarouselProps = {
    logos?: Logo[];
};

export function LogoCarousel({ logos = [] }: LogosCarouselProps) {
    return (
        <div className="overflow-hidden">
            <div className="flex animate-scroll">
                {logos.map((logo, index) => (
                    <div
                        key={`${logo.name ?? "logo"}_${index}`}
                        className="flex-shrink-0 flex items-center justify-center h-16 w-48 mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    >
                        {logo.src ? (
                            <img
                                src={logo.src}
                                alt={logo.name ?? "Company logo"}
                                className={`object-contain cursor-pointer ${logo.size === 'large'
                                        ? 'max-h-[2rem] max-w-[160px]' // Large size for Bitrix24
                                        : 'max-h-12 max-w-full' // Standard size for others
                                    }`}
                            />
                        ) : (
                            <div className="text-gray-500 font-semibold text-sm text-center">
                                {logo.name}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
