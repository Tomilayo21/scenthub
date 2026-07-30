"use client";

const ChipInput = ({
    title,
    items,
    setItems,
    input,
    setInput,
    placeholder,
}) => {

    const addItem = () => {

        const value = input.trim();

        if (!value) return;

        if (items.includes(value)) return;

        setItems(prev => [
            ...prev,
            value
        ]);

        setInput("");

    };


    return (
        <div className="bg-white rounded-2xl border shadow-sm p-6">

            <h2 className="text-xl font-semibold mb-5">
                {title}
            </h2>


            <div className="flex gap-3">

                <input
                    type="text"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    onKeyDown={(e)=>{
                        if(e.key === "Enter"){
                            e.preventDefault();
                            addItem();
                        }
                    }}
                    placeholder={placeholder}
                    className="flex-1 border rounded-lg px-4 py-3"
                />


                <button
                    type="button"
                    onClick={addItem}
                    className="px-6 bg-orange-600 text-black rounded-lg"
                >
                    Add
                </button>

            </div>


            <div className="flex flex-wrap gap-2 mt-5">

                {items.map((item,index)=>(

                    <div
                        key={item}
                        className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full flex items-center gap-2"
                    >

                        {item}

                        <button
                            type="button"
                            onClick={() =>
                                setItems(prev =>
                                    prev.filter((_,i)=>i!==index)
                                )
                            }
                        >
                            ×
                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
};


export default ChipInput;