import InputForm from "../Input/InputForm"
import InputFormTextArea from "../Input/InputFormTextArea"
import InputTerms from "../Input/InputTerms"

const ModalFormRequest = ({ isClose }) => {

    return (
        <div className="fixed inset-0 bg-neutral-100 z-9999 mx-auto flex  flex-col items-center justify-center overflow-y-auto ">
            <div className="space-y-4 max-w-[800px] overflow-x-auto w-[800px]">
                <div className="">
                    <h1 className="text-4xl font-semibold">Request a skill</h1>
                    <p className="text-md text-neutral-500">fill out the details below to find the perfeact expent for your project.</p>
                </div>
                <div className="bg-white p-4 rounded-xl space-y-4  shadow-md">

                    <InputForm subject={'What skill do you need?'} title={'Skill Needed'} placeholder={'e.g..Figma UI/UX Design'} rule={'Be specific to attract the right talent.'} />
                    <InputFormTextArea placeholderTextArea={'Describe your project. goals, and what you expect from the expert...'} titleTextArea={'Detailed Description'} subject={'Describe your request in detail'} title={'Tags/Keywords(click Enter to add tag)'} placeholder={'e.g..Beginner-friendly, Urgent, Web Development '} rule={'Add up to 5 tags to help others discover your request'} />
                    <InputTerms />
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