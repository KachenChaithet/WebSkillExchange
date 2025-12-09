import { useState } from "react"
import { X } from 'lucide-react'

const InputFormTextArea = ({ subject, title, placeholder, titleTextArea, placeholderTextArea, rule }) => {
    const [stacks, setStacks] = useState([])
    const [inputStack, setInputStack] = useState('')


    const handleAddStack = (e) => {
        if (e.key === 'Enter' && inputStack.trim()) {
            e.preventDefault()
            if (!stacks.includes(inputStack.trim()) && stacks.length < 5) {
                setStacks([...stacks, inputStack.trim()])
            } else {
                return alert('you have this tag  or stak over')
            }
            setInputStack('')
        }

    }

    const handleRemoveStack = (index) => {
        setStacks(stacks.filter((_, i) => i !== index))

    }

    return (
        <div className="">
            {subject && <h1 className="text-md font-semibold border-b border-neutral-200 pb-2 mb-2">{subject}</h1>}

            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="" className="text-md font-sans">{titleTextArea}</label>
                {placeholderTextArea && <textarea type="text" placeholder={placeholderTextArea} className="text-sm border border-neutral-200 rounded-md px-3 py-1 outline-none" />
                }
            </div>
            <div className="flex flex-col gap-2 mb-2 ">
                <label htmlFor="" className="text-md font-sans">{title}</label>
                {placeholder && (

                    <div className="flex items-center border-neutral-200 border p-2 rounded-md overflow-y-auto">
                        <div className="flex flex-wrap gap-2 ">
                            {stacks.map((stack, index) => (
                                <span className="border-none bg-blue-50 text-blue-400 font-semibold  rounded-full px-2" >
                                    {stack}

                                    <button onClick={() => handleRemoveStack(index)} className="text-center"><X className="w-3 h-3" /> </button>
                                </span>
                            ))}
                        </div>
                        <input type="text" value={inputStack} onChange={(e) => setInputStack(e.target.value)} onKeyDown={handleAddStack} placeholder={placeholder} className="border-none rounded-md px-3 py-1 outline-none flex-1" />

                    </div>
                )}

            </div>
            <p className="text-neutral-500 text-sm">{rule}</p>

        </div>
    )
}
export default InputFormTextArea