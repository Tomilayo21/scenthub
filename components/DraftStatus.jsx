import { useEffect, useRef, useState } from "react";
import { CheckCircle, Loader, XCircle } from "lucide-react";


export default function DraftStatus({
    draftStatus,
    fileDraftStatus
}) {

    const [visible, setVisible] = useState(false);

    const previousStatus = useRef("");



    useEffect(()=>{


        // Ignore initial page load value
        if(previousStatus.current === ""){

            previousStatus.current = draftStatus;

            return;

        }



        // Only react when status changes
        if(previousStatus.current !== draftStatus){


            previousStatus.current = draftStatus;



            if(
                draftStatus === "Saving..." ||
                draftStatus === "Saved" ||
                draftStatus === "Save failed"
            ){

                setVisible(true);

            }



            if(draftStatus === "Saved"){

                const timer = setTimeout(()=>{

                    setVisible(false);

                },3000);


                return ()=>clearTimeout(timer);

            }



            if(draftStatus === "Save failed"){

                const timer = setTimeout(()=>{

                    setVisible(false);

                },5000);


                return ()=>clearTimeout(timer);

            }


        }


    },[draftStatus]);




    if(!visible) return null;



    return (

        <div
        className="
        fixed
        top-20
        left-1/2
        -translate-x-1/2
        z-[9999]
        "
        >

            <div
            className="
            bg-white
            shadow-lg
            border
            rounded-full
            px-5
            py-3
            flex
            items-center
            gap-4
            text-sm
            "
            >


                {
                draftStatus === "Saving..." &&

                <>
                    <Loader
                    size={16}
                    className="text-orange-500 animate-spin"
                    />

                    <span>
                        Saving draft...
                    </span>
                </>

                }



                {
                draftStatus === "Saved" &&

                <>
                    <CheckCircle
                    size={16}
                    className="text-green-600"
                    />

                    <span>
                        Draft saved
                    </span>
                </>

                }



                {
                draftStatus === "Save failed" &&

                <>
                    <XCircle
                    size={16}
                    className="text-red-600"
                    />

                    <span>
                        Save failed
                    </span>
                </>

                }


            </div>

        </div>

    );

}