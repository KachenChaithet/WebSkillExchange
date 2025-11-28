const CardReviews = ({ name, img, text, time, explain }) => {
    return (
        <div className="bg-white  p-4 border border-neutral-200 rounded-xl shadow-md">

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d9/fa/1b/lost-valley.jpg?w=1200&h=1200&s=1" alt="" className="w-10 h-10 rounded-full" />
                    <div className="leading-tight ">
                        <h1 className="font-semibold">kachen chiyathet</h1>
                        <p className="font-semibold text-[#ff7f50]">i'm profession react.ts</p>
                    </div>
                </div>
                <h1 className="font-semibold text-sm text-neutral-600">2 days ago</h1>
            </div>

            <div className="font-medium text-neutral-500">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop.
            </div>

        </div>
    )
}
export default CardReviews