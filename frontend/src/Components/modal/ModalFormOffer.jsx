import { useRef, useState } from "react";
import InputForm from "../Input/InputForm"
import InputFormTextArea from "../Input/InputFormTextArea"
import InputTerms from "../Input/InputTerms"
import axios from 'axios'


const ModalFormOffer = ({ isClose }) => {
    const [offering, setOffering] = useState("");
    const [level, setLevel] = useState('')
    const levels = ["Beginner", "Intermediate", "Expert"]
    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(0)
    const fileRef = useRef(null)
    const cancelRef = useRef(null)


    const cancelUpload = () => {
        if (cancelRef.current) {
            cancelRef.current.abort()


        }
    }

    const handleUploadFile = async () => {
        setProgress(0)
        console.log(file);

        // if (file.size > 2 * 1024 * 1024) {
        //     alert("File must be smaller than 5MB");
        //     return;
        // }
        // if (!['image/jpeg', 'image/png', 'application/pdf'].includes(file.type)) {
        //     alert("Only JPEG or PNG allowed");
        //     return
        // }

        const formData = new FormData()
        formData.append('test', file)
        const controller = new AbortController();
        cancelRef.current = controller

        try {
            const res = await axios.post('http://localhost:5000/upload', formData, {
                signal: controller.signal,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: function (progressValue) {


                    setProgress(progressValue.progress * 100)
                },
            })
            setFile(null)
            if (fileRef.current) {
                fileRef.current.value = ''
            }
            console.log(res.data);


        } catch (error) {
            if (error.code === "ERR_CANCELED") {
                console.log("Upload canceled");
                return;
            }

            console.log(error);
            alert('something wrong when upload!');
            setProgress(0);
        }
    }

    return (
        <div className="fixed inset-0 bg-neutral-100 z-9999 mx-auto flex  flex-col items-center justify-center overflow-y-auto ">
            <div className="space-y-4 max-w-[800px] overflow-x-auto w-[800px]">
                <div className="">
                    <h1 className="text-4xl font-semibold">Offer a skill</h1>
                    <p className="text-md text-neutral-500">Add your skill to the exchage and connect with learners.</p>
                </div>


                <div className="bg-white p-4 rounded-xl space-y-4  shadow-md">

                    <InputForm subject={'Skill Details'} title={'Skill Name'} placeholder={'e.g..Advanced Python Programming'} />
                    <InputFormTextArea titleTextArea={'Detailed Description'} placeholderTextArea={'Describe what you offer, your experience, and what someone will learn or gain...'} />
                    <InputFormTextArea title={'Categories'} placeholder={'Add another category...'} />

                </div>

                <div className="bg-white p-4 rounded-xl space-y-4  shadow-md">
                    <h1 className="text-md font-semibold border-b border-neutral-200 pb-2 mb-2">Proficiency & Logistics</h1>

                    <div className="">

                        {/* Proficiency & Logistics */}
                        <div className="flex">

                            {/* skill leavel */}
                            <div className="flex-1 flex flex-col gap-2">
                                <label htmlFor="" className="font-semibold">Your SKill Level</label>
                                <div className="flex gap-2">
                                    {levels.map((item) => (
                                        <button key={item} value={item} onClick={() => setLevel(item)} className={`${level === item ? 'border-blue-400 bg-blue-50 font-semibold' : 'border-neutral-300'} border   rounded-md px-4 py-2`}>
                                            {item}
                                        </button>
                                    ))}

                                </div>
                            </div>

                            {/* date */}
                            <div className="flex-1 flex flex-col gap-2">
                                <label htmlFor="" className="font-semibold">Availability</label>
                                <input type="date" className="text-neutral-500 border outline-none border-neutral-400 rounded-md p-2" />

                            </div>

                        </div>

                        {/* Offering Type */}
                        <div className=" space-y-2 ">

                            <h1 className="text-md font-semibold ">Offering Type</h1>

                            <div className="flex gap-4">
                                <label className={`flex flex-1 items-start gap-2 border  ${offering === 'skillexchange' ? ' border-blue-500 bg-blue-50' : 'border-neutral-400'}   p-2 rounded-md cursor-pointer `}>
                                    <input type="radio" name="offering" checked={offering === 'skillexchange'} value={'skillexchange'} onChange={(e) => setOffering(e.target.value)} className=" border border-neutral-400 appearance-none w-4 h-4 rounded-full checked:border-4 checked:border-blue-500 checked:bg-white mt-1" />
                                    <div className="">
                                        <span className="font-semibold">Skill Exchange</span>
                                        <p className="text-sm text-neutral-600">Offer your skill in return for another.</p>
                                    </div>
                                </label>


                                <label className={`flex flex-1 items-start gap-2  border  ${offering === 'paidservice' ? ' border-blue-500 bg-blue-50' : 'border-neutral-400'} p-2 rounded-md cursor-pointer `}>
                                    <input type="radio" name="offering" checked={offering === 'paidservice'} value={'paidservice'} onChange={(e) => setOffering(e.target.value)} className="border border-neutral-400 appearance-none w-4 h-4 rounded-full checked:border-4 checked:border-blue-500 checked:bg-white mt-1" />
                                    <div className="">
                                        <span className="font-semibold">Paid Service</span>
                                        <p className="text-sm text-neutral-600">Charge a fee for your skill session.</p>
                                    </div>
                                </label>
                            </div>
                            <div className="">
                                <div className="space-x-4">
                                    <input type="file" ref={fileRef} className="border" onChange={(e) => setFile(e.target.files[0])} />
                                    <button className="border  rounded-2xl" onClick={handleUploadFile}>upload</button>
                                    <button className="border  rounded-2xl" onClick={cancelUpload}>cancel</button>
                                </div>
                                <progress max={100} value={progress} className="rounded-xl w-full" />
                            </div>


                        </div>

                    </div>

                </div>



                <div className="text-end space-x-2">
                    <button onClick={isClose} className="px-3 py-2  rounded-lg  bg-neutral-200 font-semibold hover:bg-neutral-300">cancel</button>
                    <button className="px-3 py-2  rounded-lg  text-white bg-blue-500 font-semibold hover:bg-blue-600">Pulish Skill</button>
                </div>



            </div>

        </div>
    )

}
export default ModalFormOffer   