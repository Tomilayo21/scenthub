export default function UploadRecoveryModal({
    uploadRecovery,
    setUploadRecovery
}) {

    if(!uploadRecovery) return null;


    return (

        <Modal>

            <h2 className="text-xl font-semibold">
                Interrupted Upload Found
            </h2>


            <p className="mt-3 text-gray-600">

                Your previous upload stopped at

                <strong>
                    {" "}
                    {uploadRecovery.progress}%
                </strong>

            </p>


            <button
            type="button"
            onClick={()=>setUploadRecovery(null)}
            className="
            mt-5
            w-full
            bg-orange-500
            text-white
            py-3
            rounded-xl
            "
            >

                Continue Upload

            </button>


        </Modal>

    )
}