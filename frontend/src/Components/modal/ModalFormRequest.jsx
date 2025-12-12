import { useEffect, useState } from "react";
import InputForm from "../Input/InputForm"
import InputFormTextArea from "../Input/InputFormTextArea"
import InputTerms from "../Input/InputTerms"
import axios from "axios";

const ModalFormRequest = ({ isClose }) => {
    useEffect(() => {
        // ปิด scroll เมื่อเปิด modal
        document.body.style.overflow = "hidden";

        return () => {
            // เปิด scroll กลับเมื่อปิด modal
            document.body.style.overflow = "auto";
        };
    }, []);

    const [form, setForm] = useState({
        skillname: '',
        detail: '',
        tags: [],
        CompletionTime: '',
        CompensationType: '',
        budget: 0
    })

    const setField = (key, value) => {
        setForm(prev => ({
            ...prev,
            [key]: value
        }));
    };


    const handleAddTag = (tag) => {
        if (form.tags.length >= 5) return alert('You can only add up to 5 tags');
        if (form.tags.includes(tag)) return alert('This tag already exists');

        setForm(prev => ({ ...prev, tags: [...prev.tags, tag] }));
    };

    const handleRemoveTag = (index) => {
        setForm((prev) => ({
            ...prev,
            tags: prev.tags.filter((_, i) => i != index)
        }))
    }

    const handlePost = async () => {
        try {

        } catch (error) {

        }
    }

    return (
        <div className="fixed inset-0 bg-neutral-100 z-9999 mx-auto flex  flex-col items-center justify-center overflow-y-auto ">
            <div className="space-y-4 max-w-[800px] overflow-x-auto w-[800px]">
                <div className="">
                    <h1 className="text-4xl font-semibold">Request a skill</h1>
                    <p className="text-md text-neutral-500">fill out the details below to find the perfeact expent for your project.</p>
                </div>
                <div className="bg-white p-4 rounded-xl space-y-4  shadow-md">

                    <InputForm
                        value={form.skillname}
                        onChange={(e) => setField('skillname', e.target.value)}
                        subject={'What skill do you need?'} title={'Skill Needed'}
                        placeholder={'e.g..Figma UI/UX Design'}
                        rule={'Be specific to attract the right talent.'}
                    />

                    <InputFormTextArea
                        onAddTag={handleAddTag}
                        onRemoveTag={handleRemoveTag}
                        tagsValue={form.tags}
                        detailValue={form.detail}
                        onDetailChange={(e) => setField('detail', e.target.value)}
                        placeholderTextArea={'Describe your project. goals, and what you expect from the expert...'}
                        titleTextArea={'Detailed Description'}
                        subject={'Describe your request in detail'}
                        title={'Tags/Keywords(click Enter to add tag)'}
                        placeholder={'e.g..Beginner-friendly, Urgent, Web Development '}
                        rule={'Add up to 5 tags to help others discover your request'}
                    />

                    <InputTerms
                        CompensationTypeValue={form.CompensationType}
                        onChangeTypeValue={(value) => setField('CompensationType', value)}

                        completionTimeValue={form.CompletionTime}
                        onChangeTimeValue={(e) => setField('CompletionTime', e.target.value)}

                        budgetValue={form.budget}
                        onChangebudgetValue={(e) => setField('budget', parseFloat(e.target.value))}
                    />
                </div>
                <div className="text-end space-x-2">
                    <button onClick={isClose} className="px-3 py-2  rounded-lg  bg-neutral-200 font-semibold hover:bg-neutral-300">cancel</button>
                    <button className="px-3 py-2  rounded-lg  text-white bg-blue-500 font-semibold hover:bg-blue-600">Post Request</button>
                </div>
            </div>

        </div>
    )
}
export default ModalFormRequest