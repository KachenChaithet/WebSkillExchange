import { useState } from "react";

const InputTerms = ({ completionTimeValue, onChangeTimeValue, CompensationTypeValue, onChangeTypeValue, budgetValue, onChangebudgetValue }) => {

    return (
        <div className="">
            <h1 className="text-md font-semibold border-b border-neutral-200 pb-2 mb-2">Set your terms</h1>

            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="" className="text-md font-sans">Desired Completion Time</label>
                <input type="date" value={completionTimeValue} onChange={onChangeTimeValue} className="border border-neutral-300 rounded-md p-1 text-neutral-500 outline-none" />
            </div>
            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="" className="text-md font-sans">Compensation Type</label>
                <div className="flex gap-4">
                    <label className={`flex-1 items-center gap-3 p-3 border  rounded-lg cursor-pointer flex   ${CompensationTypeValue === 'budget' ? 'border-blue-400 bg-blue-50' : 'border-neutral-200 '}`}>
                        <input
                            required
                            checked={CompensationTypeValue === 'budget'}
                            value={'budget'}
                            onChange={(e) => onChangeTypeValue(e.target.value)}
                            type="radio"
                            name="compensation"
                            className="peer h-4 w-4 appearance-none rounded-full border border-neutral-400 checked:border-blue-500 checked:border-4 checked:bg-white"
                        />
                        <span className="text-sm">Set a Budget</span>
                    </label>


                    <label className={`flex-1 flex items-center gap-3 p-3 border rounded-lg cursor-pointer  ${CompensationTypeValue === 'skillexchange' ? 'border-blue-400 bg-blue-50' : 'border-neutral-200 '}`}>

                        <input
                            required
                            checked={CompensationTypeValue === 'skillexchange'}
                            value={'skillexchange'}
                            onChange={(e) => onChangeTypeValue(e.target.value)}
                            type="radio"
                            name="compensation"
                            className="peer h-4 w-4 appearance-none rounded-full border border-neutral-400
                          checked:border-blue-500 checked:border-4 checked:bg-white"
                        />

                        <span className="text-sm">Skill Exchange</span>
                    </label>
                </div>
                {CompensationTypeValue === 'budget' && (
                    <div className="space-y-2">
                        <h2>Budget Amount</h2>
                        <div className="border-2 border-neutral-200 w-full rounded-md text-neutral-400 flex items-center justify-between py-1 px-2">
                            <div className="flex items-center gap-2">
                                <span>฿</span>
                                <input min={1} type="number" value={budgetValue} onChange={onChangebudgetValue} className=" no-spinner outline-none w-full font-semibold " placeholder="0" />
                            </div>
                            <span>THB</span>
                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}
export default InputTerms