"use client";

import { useEffect, useRef } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { Button } from "@/components/ui/button";

type NoticeRichEditorProps = {
  value: string;
  onChange: (html: string) => void;
  onError: (message: string) => void;
  disabled?: boolean;
};

export default function NoticeRichEditor({ value, onChange, onError, disabled }: NoticeRichEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Image.configure({
        inline: false,
      }),
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: value || "",
    editable: !disabled,
    editorProps: {
      attributes: {
        class:
          "min-h-[260px] rounded-b-md border border-t-0 border-slate-200 bg-white p-4 focus:outline-none",
      },
    },
    onUpdate({ editor: current }) {
      onChange(current.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;
    if (editor.getHTML() !== value) {
      editor.commands.setContent(value || "", { emitUpdate: false });
    }
  }, [editor, value]);

  useEffect(() => {
    if (!editor) return;
    editor.setEditable(!disabled);
  }, [disabled, editor]);

  const insertLink = () => {
    if (!editor) return;
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("링크 URL을 입력하세요", previousUrl || "https://");

    if (url === null) return;
    if (url === "") {
      editor.chain().focus().unsetLink().run();
      return;
    }

    editor.chain().focus().setLink({ href: url }).run();
  };

  const uploadAndInsertImage = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/admin/notice-image", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        throw new Error(data.message || "이미지 업로드에 실패했습니다.");
      }

      const data = (await response.json()) as { url: string };
      editor?.chain().focus().setImage({ src: data.url, alt: file.name }).run();
    } catch (error) {
      onError(error instanceof Error ? error.message : "이미지 업로드 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 rounded-t-md border border-slate-200 bg-slate-50 p-2">
        <Button type="button" variant="outline" size="sm" onClick={() => editor?.chain().focus().toggleBold().run()} disabled={disabled}>
          Bold
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => editor?.chain().focus().toggleItalic().run()} disabled={disabled}>
          Italic
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} disabled={disabled}>
          H2
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => editor?.chain().focus().toggleBulletList().run()} disabled={disabled}>
          목록
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={insertLink} disabled={disabled}>
          링크
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => fileInputRef.current?.click()} disabled={disabled}>
          이미지 삽입
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              void uploadAndInsertImage(file);
            }
            e.currentTarget.value = "";
          }}
        />
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}
