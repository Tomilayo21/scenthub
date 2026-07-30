"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";


export default function TiptapEditor({
  description,
  setDescription,
}) {


  const editor = useEditor({

    extensions: [

      StarterKit,

      Image,

      Link.configure({
        openOnClick:false,
      }),

      Placeholder.configure({
        placeholder:
          "Write project description...",
      }),

    ],


    content: description,


    onUpdate({editor}){

      setDescription(
        editor.getHTML()
      );

    },


    editorProps:{

      attributes:{

        class:
        "min-h-[200px] outline-none p-4 prose max-w-none",

      },

    },


  });



  if(!editor){

    return null;

  }



  return (

    <div className="border rounded-xl overflow-hidden">


      {/* Toolbar */}

      <div className="flex flex-wrap gap-2 border-b bg-gray-50 p-3">


        <button
        type="button"
        onClick={()=>
          editor.chain().focus().toggleBold().run()
        }
        className="px-3 py-1 border rounded"
        >

          Bold

        </button>



        <button
        type="button"
        onClick={()=>
          editor.chain().focus().toggleItalic().run()
        }
        className="px-3 py-1 border rounded"
        >

          Italic

        </button>



        <button
        type="button"
        onClick={()=>
          editor.chain().focus().toggleBulletList().run()
        }
        className="px-3 py-1 border rounded"
        >

          List

        </button>



        <button
        type="button"
        onClick={()=>
          editor.chain().focus().toggleHeading({
            level:2
          }).run()
        }
        className="px-3 py-1 border rounded"
        >

          H2

        </button>


      </div>



      <EditorContent editor={editor}/>


    </div>

  );

}