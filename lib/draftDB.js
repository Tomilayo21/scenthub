import { openDB } from "idb";


let dbPromise;


function getDB(){

    if(typeof window === "undefined"){
        return null;
    }


    if(!dbPromise){

        dbPromise = openDB(
            "projectDraft",
            1,
            {
                upgrade(db){

                    if(!db.objectStoreNames.contains("files")){

                        db.createObjectStore(
                            "files"
                        );

                    }

                }
            }
        );

    }


    return dbPromise;

}



export async function saveDraftFiles(
    key,
    files
) {

    const db = await getDB();

    if(!db) return;

    await db.put(
        "files",
        files,
        key
    );

}



export async function getDraftFiles(
    key
) {

    const db = await getDB();

    if(!db) return;

    return await db.get(
        "files",
        key
    );

}



// ADD THIS
export async function saveDraftFile(
    key,
    file
) {

    const db = await getDB();

    if(!db) return;

    await db.put(
        "files",
        file,
        key
    );

}



// ADD THIS
export async function getDraftFile(
    key
) {

    const db = await getDB();

    if(!db) return;

    return await db.get(
        "files",
        key
    );

}



export async function removeDraftFile(
    key
) {

    const db = await getDB();

    if(!db) return;

    await db.delete(
        "files",
        key
    );

}



export async function clearFiles(){

    const db = await getDB();

    if(!db) return;

    await db.clear(
        "files"
    );

}


export async function saveUploadState(
state
){

const db = await getDB();

if(!db) return;


await db.put(
"files",
state,
"uploadState"
);


}



export async function getUploadState(){

const db = await getDB();

if(!db) return;


return await db.get(
"files",
"uploadState"
);

}



export async function removeUploadState(){

    const db = await getDB();

    if(!db) return;


    await db.delete(
        "files",
        "uploadState"
    );

}