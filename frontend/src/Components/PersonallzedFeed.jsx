import { useState } from "react"
import CardPersonalized from "./Cards/CardPersonalized"

const STATUS_OPTIONS = ['Latest', 'รอซ่อม', 'กำลังซ่อม', 'ซ่อมเสร็จแล้ว']
const PersonallzedFeed = () => {
    const [selections, setSelections] = useState('')
    const data = [
        { name: 'kachen chiyathet', img: 'https://cdn-icons-png.flaticon.com/512/219/219983.png', explain: 'by karsocool', tags: ['react', 'java'], title: 'learn to react', text: 'I love street food thailand and i like your' },
        { name: 'kachen chiyathet', img: 'https://cdn-icons-png.flaticon.com/512/219/219983.png', explain: 'by karsocool', tags: ['react', 'java'], title: 'learn to react', text: 'I love street food thailand and i like your' },
    ]
    return (
        <>
            <div className=" w-full max-w-[900px] space-y-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">Personallzed Feed</h1>
                    <select className="p-2  bg-white rounded-xl py-2  text-neutral-600 border text-xl font-semibold border-neutral-300">
                        {STATUS_OPTIONS.map((s) => (
                            <option className="text-sm" key={s} value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="space-y-4">
                    {
                        data.map((item, index) => (
                            <CardPersonalized explain={item.explain} key={index} name={item.name} text={item.text} title={item.title} img={item.img} tags={item.tags} />

                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default PersonallzedFeed