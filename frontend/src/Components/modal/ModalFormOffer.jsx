import { useRef, useState } from "react";
import InputForm from "../Input/InputForm"
import InputFormTextArea from "../Input/InputFormTextArea"
import InputTerms from "../Input/InputTerms"
import axios from 'axios'
import { CloudUpload, Trash2 } from "lucide-react";
import { useEffect } from "react";


const ModalFormOffer = ({ isClose }) => {
    const [offering, setOffering] = useState("");
    const [level, setLevel] = useState('')
    const levels = ["Beginner", "Intermediate", "Expert"]
    const [file, setFile] = useState([])
    const [previews, setPreviews] = useState([]);
    const filePickerRef = useRef(null);
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    const MAX_TOTAL_SIZE = 5 * 1024 * 1024; // 20 MB
    const maxSize = 2 * 1024 * 1024; // 2 MB
    const [dropActive, setDropActive] = useState(false);



    const checkTotalSize = (newFiles) => {
        const totalSize = [...file, ...newFiles]
            .reduce((sum, f) => sum + f.size, 0);

        console.log(totalSize);


        return totalSize <= MAX_TOTAL_SIZE;
    };

    const handleRemoveFile = (index) => {
        setFile((prev) => prev.filter((_, i) => i !== index))
        setPreviews((prev) => prev.filter((_, i) => i !== index));
    }


    const openPicker = () => {
        filePickerRef.current.click();
    };


 
    const handleUploadFile = async () => {
        if (!file || file.length === 0) {
            alert("Please select at least one file");
            return;
        }


        if (file.length > 5) {
            alert('limit 5 photo')
            return
        }
        setProgress(0);

        const formData = new FormData()
        file.forEach((f) => {
            formData.append('test', f)
        })

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

            setFile([])
            setPreviews([])

            console.log(res.data);
            alert('upload file success')
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

    const handleSelectFiles = (e) => {
        const selected = Array.from(e.target.files);


        const invalidSize = selected.some(f => f.size > maxSize);
        const invalidType = selected.some(f => !allowedTypes.includes(f.type));


        if (!checkTotalSize(file)) {
            alert("Total files exceed 20 MB limit");
            return;
        }

        if (invalidSize) {
            alert("Some files are larger than 2MB");
            return;
        }

        if (invalidType) {
            alert("Only JPG, PNG or PDF allowed");
            return;
        }

        const newPreviews = selected.map(f => URL.createObjectURL(f));
        setFile((prev) => [...prev, ...selected]);
        setPreviews((prev) => [...prev, ...newPreviews]);
    }

    const handleSelectDropFiles = (e) => {
        e.preventDefault();
        setDropActive(false);
        const currentFile = Array.from(e.dataTransfer.files)
        const newPreviews = currentFile.map(f => URL.createObjectURL(f));


        if (!checkTotalSize(file)) {
            alert("Total files exceed 20 MB limit");
            return;
        }

        const invalidSize = currentFile.some(f => f.size > maxSize);
        const invalidType = currentFile.some(f => !allowedTypes.includes(f.type));



        if (invalidSize) {
            alert("Some files are larger than 2MB");
            return;
        }

        if (invalidType) {
            alert("Only JPG, PNG or PDF allowed");
            return;
        }

        setFile((prev) => [...prev, ...currentFile])
        setPreviews((prev) => [...prev, ...newPreviews])

    }


    useEffect(() => {
        // ปิด scroll เมื่อเปิด modal
        document.body.style.overflow = "hidden";

        return () => {
            // เปิด scroll กลับเมื่อปิด modal
            document.body.style.overflow = "auto";
        };
    }, []);
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



                        </div>

                    </div>

                </div>


                <div className="bg-white p-4 rounded-xl space-y-4  shadow-md">
                    <div className="">
                        <h1 className="text-md font-semibold ">Add Photos</h1>
                        <p className="font-medium text-sm text-neutral-500">Showcase yoru skill with images of past work or a short introuductory video</p>
                    </div>

                    <div
                        onDragEnter={() => setDropActive(true)}
                        onDragLeave={() => setDropActive(false)}

                        onDragOver={(e) => {
                            e.preventDefault();
                        }}

                        onDrop={handleSelectDropFiles}

                        className={`h-[200px] rounded-xl border-2 border-dashed flex flex-col items-center justify-center z-9999
                                ${dropActive ? "bg-purple-50 border-purple-400" : "bg-neutral-50 border-neutral-300"}
                        `}
                    >
                        <div className="px-2 py-3 bg-purple-100 rounded-full">
                            <CloudUpload className="text-purple-500" />
                        </div>
                        <div className="text-center">
                            <h1 className="font-semibold" >Drag & drop files here</h1>
                            <p className="text-neutral-700">or</p>
                            <input type="file" accept="image/*" ref={filePickerRef} multiple className="hidden" onChange={handleSelectFiles} />
                            <button className="px-2 py-1 bg-white border rounded-md border-neutral-300" onClick={openPicker}>Browse Files</button>
                            <p className="text-neutral-500 text-xs">Supports:JPG,PNG,Max size:2mb</p>
                        </div>
                    </div>

                    <div className="">
                        <div className="space-y-2">
                            {file.map((file, index) => (
                                <div key={index} className="relative w-full  rounded-md border border-neutral-200 flex items-center justify-between p-2">
                                    <div className="flex gap-2 items-center">
                                        <img
                                            src={previews[index]}
                                            className="w-14 h-14 object-cover rounded-lg "
                                            alt="preview"
                                        />
                                        <div className="">
                                            <h1>{file.name}</h1>
                                            <p className="text-neutral-500">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>

                                        </div>
                                    </div>
                                    <div className="" onClick={() => handleRemoveFile(index)}>
                                        <Trash2 className="text-neutral-400" />

                                    </div>


                                </div>
                            ))}
                        </div>
                    </div>

                </div>



                <div className="text-end space-x-2">
                    <button onClick={isClose} className="px-3 py-2  rounded-lg  bg-neutral-200 font-semibold hover:bg-neutral-300">cancel</button>
                    <button onClick={handleUploadFile} className="px-3 py-2  rounded-lg  text-white bg-blue-500 font-semibold hover:bg-blue-600">Pulish Skill</button>
                </div>



            </div>

        </div >
    )

}
export default ModalFormOffer   