import InputForm from "../Input/InputForm"
import InputFormTextArea from "../Input/InputFormTextArea"
import InputTerms from "../Input/InputTerms"

const ModalForm = () => {
    return (
        <div className="fixed inset-0 bg-neutral-100 z-9999 mx-auto flex  flex-col items-center justify-center ">
            <div className="space-y-4">
                <div className="">
                    <h1 className="text-4xl font-semibold">Request a skill</h1>
                    <p className="text-md text-neutral-500">fill out the details below to find the perfeact expent for your project.</p>
                </div>
                <div className="bg-white p-4 rounded-xl space-y-4  ">

                    <InputForm subject={'What skill do you need?'} title={'Skill Needed'} placeholder={'e.g..Figma UI/UX Design'} rule={'Be specific to attract the right talent.'} />
                    <InputFormTextArea placeholderTextArea={'Describe your project. goals, and what you expect from the expert...'} titleTextArea={'Detailed Description'} subject={'Describe your request in detail'} title={'Tags/Keywords'} placeholder={'e.g..Beginner-friendly, Urgent, Web Development'} rule={'Add up to 5 tags to help others discover your request'} />
                    <InputTerms/>
                </div>
            </div>

        </div>
    )
}
export default ModalForm