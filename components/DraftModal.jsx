export default function DraftModal({
    showDraftModal,
    continueDraft,
    startNewProject
}) {

    if (!showDraftModal) return null;


    return (
        <div
        className="
        fixed
        top-0
        left-0
        w-screen
        h-screen
        bg-black/40
        flex
        items-center
        justify-center
        z-[9999]
        "
        >

            <div
            className="
            bg-white
            rounded-2xl
            p-8
            w-full
            max-w-md
            shadow-xl
            "
            >

                <h2 className="text-xl font-semibold">
                    Unfinished Project Found
                </h2>


                <p className="mt-3 text-gray-600">
                    You have an unfinished project draft.
                    Would you like to continue editing it?
                </p>


                <div className="flex gap-3 mt-6">


                    <button
                    type="button"
                    onClick={continueDraft}
                    className="
                    flex-1
                    bg-orange-500
                    text-white
                    py-3
                    rounded-xl
                    "
                    >
                        Continue Draft
                    </button>


                    <button
                    type="button"
                    onClick={startNewProject}
                    className="
                    flex-1
                    border
                    py-3
                    rounded-xl
                    "
                    >
                        Start New
                    </button>


                </div>


            </div>

        </div>
    );
}