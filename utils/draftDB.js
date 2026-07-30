// import {openDB} from "idb";


// const dbPromise =
// openDB(
// "projectDraft",
// 1,
// {
// upgrade(db){

// if(!db.objectStoreNames.contains("files")){

// db.createObjectStore(
// "files"
// );

// }

// }

// });


// export async function saveDraftFile(
// key,
// file
// ){

// const db =
// await dbPromise;


// await db.put(
// "files",
// file,
// key
// );

// }



// export async function getDraftFile(key){

// const db =
// await dbPromise;


// return db.get(
// "files",
// key
// );

// }



// export async function getAllDraftFiles(){

// const db =
// await dbPromise;


// return db.getAll(
// "files"
// );

// }



// export async function clearFiles(){

// const db =
// await dbPromise;


// await db.clear(
// "files"
// );

// }
































































import {openDB} from "idb";


const dbPromise =
openDB(
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

});



export async function saveDraftFiles(
key,
files
){

const db =
await dbPromise;


await db.put(
"files",
files,
key
);


}




export async function getDraftFiles(
key
){

const db =
await dbPromise;


return await db.get(
"files",
key
);


}





export async function removeDraftFile(
key
){

const db =
await dbPromise;


await db.delete(
"files",
key
);


}





export async function clearFiles(){

const db =
await dbPromise;


await db.clear(
"files"
);

}