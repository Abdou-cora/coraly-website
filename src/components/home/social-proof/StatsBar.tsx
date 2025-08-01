
type Stats = {
    number: string;
    label: string;
}

type statsProps = {
    stats?: Stats[];
};

export function StatsBarData({ stats = [] }: statsProps) {


    return (
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-6 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="text-4xl lg:text-5xl font-bold mb-2">
                            {stat.number}
                        </div>
                        <div className="text-lg font-medium opacity-90">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}