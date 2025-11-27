const CardShowAnalytics = ({ label, value, description, change }) => {
    return (

        <div className="min-w-[200px]  bg-white rounded-xl p-4 border border-neutral-200 space-y-1 shadow-md">
            <div className="flex items-center gap-2">
                <span className="text-purple-400 bg-[#dbeafe] px-2 py-1 rounded-full">{label}</span>
                <h1 className="font-bold text-2xl">{value}</h1>
            </div>
            <p className="text-neutral-500 font-semibold">{description}</p>
            <p className="text-green-600 font-semibold">{change}</p>
        </div>

    )
}
export default CardShowAnalytics