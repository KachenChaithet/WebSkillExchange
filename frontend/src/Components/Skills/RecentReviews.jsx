import CardPersonalized from "../Cards/CardPersonalized"
import CardReviews from "../Cards/CardReviews"

const RecentReviews = () => {
    const data = [
        { name: 'kachen chiyathet', img: 'https://media1.thrillophilia.com/filestore/v7h4ylcvnjh7dkpxg85jgw5gfqx4_IMG%20World%20Dubai%20Fun%20(1).jpg', text: 'by karsocool' },
        { name: 'joinner', img: 'https://media1.thrillophilia.com/filestore/v7h4ylcvnjh7dkpxg85jgw5gfqx4_IMG%20World%20Dubai%20Fun%20(1).jpg', text: 'by karsocool' },
        { name: 'joinner', img: 'https://media1.thrillophilia.com/filestore/v7h4ylcvnjh7dkpxg85jgw5gfqx4_IMG%20World%20Dubai%20Fun%20(1).jpg', text: 'by karsocool' },
    ]
    return (
        <>
            <div className="min-w-auto  space-y-2">
                <h1 className="text-3xl font-bold">Recent Reviews</h1>

                <div className="space-y-4">
                    <CardReviews />
                    <CardReviews />
                </div>
            </div>
        </>
    )
}
export default RecentReviews