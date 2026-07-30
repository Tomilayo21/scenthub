"use client";

import { X, ImagePlus } from "lucide-react";

const FileGallery = ({
    title,
    files,
    setFiles,
    limit = 10,
}) => {


    const removeFile = (index) => {

        setFiles(prev =>
            prev.filter((_, i) => i !== index)
        );

    };


    const handleUpload = (e) => {

        const selectedFiles = Array.from(
            e.target.files
        );

        const remaining = limit - files.length;


        setFiles(prev => [
            ...prev,
            ...selectedFiles.slice(0, remaining)
        ]);


        e.target.value = "";

    };


    return (

        <div className="bg-white rounded-2xl border shadow-sm p-6">


            <div className="flex justify-between items-center mb-5">

                <h2 className="text-xl font-semibold">
                    {title}
                </h2>


                <span className="text-sm text-gray-500">
                    {files.length}/{limit}
                </span>

            </div>



            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">


                {files.map((file,index)=>(

                    <div
                        key={index}
                        className="relative w-32 h-32 rounded-xl overflow-hidden"
                    >

                        <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            className="w-full h-full object-cover"
                        />


                        <button
                            type="button"
                            onClick={() => removeFile(index)}
                            style={{
                                position: "absolute",
                                top: "8px",
                                right: "8px",
                                zIndex: 9999,
                                background: "red",
                                color: "white",
                                width: "32px",
                                height: "32px",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer"
                            }}
                        >
                            X
                        </button>


                    </div>

                ))}



                {files.length < limit && (

                    <label
                        className="
                            w-24
                            h-24
                            border-2
                            border-dashed
                            rounded-xl
                            flex
                            flex-col
                            justify-center
                            items-center
                            cursor-pointer
                            hover:border-orange-500
                            transition
                            text-gray-500
                        "
                    >

                        <ImagePlus size={28}/>


                        <span className="text-xs mt-2">
                            Upload
                        </span>


                        <input
                            hidden
                            multiple
                            type="file"
                            accept="image/*"
                            onChange={handleUpload}
                        />

                    </label>

                )}

            </div>


        </div>

    );

};


export default FileGallery;