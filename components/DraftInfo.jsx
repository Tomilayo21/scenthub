export default function DraftInfo({
    draftInfo,
    daysOld
}) {

    return (
        <>

        <p
        className="
        text-sm
        text-gray-500
        mt-2
        "
        >

        Last saved:

        {
            draftInfo?.lastSavedAt
            ?
            new Date(
                draftInfo.lastSavedAt
            ).toLocaleString()
            :
            "No draft saved yet"
        }

        </p>


        {
            daysOld > 14 &&

            <p
            className="
            text-orange-600
            mt-2
            "
            >

            This draft has not been edited for {daysOld} days.

            </p>
        }


        </>
    )
}