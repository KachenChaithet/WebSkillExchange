import CardShowAnalytics from "../Cards/CardShowAnalytics"

const SkillPerformance = () => {
    const analyticsData = [
        {
            label: "visibility",
            value: "1.2k",
            description: "Total Views",
            change: "+15% this month",
        },
        {
            label: "shopping_cart",
            value: "850",
            description: "Total Orders",
            change: "+8% this month",
        },
        {
            label: "attach_money",
            value: "$12.4k",
            description: "Revenue",
            change: "+20% this month",
        },

    ];
    return (
        <div className="space-y-2 ">
            <h1 className="text-xl md:text-3xl font-bold">Skill Performance Analytics</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ">

                {analyticsData.map((item,index) => (
                    <CardShowAnalytics key={index} change={item.change} description={item.description} label={item.label} value={item.value} />
                ))}
            </div>
        </div>
    )
}
export default SkillPerformance