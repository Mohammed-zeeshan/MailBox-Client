// import { EditorState } from "draft-js";
// import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg"; 
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const TextEditor = (props) => {
    return (
        <div>
            <Editor
            // editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName ps-3"
            // onEditorStateChange={this.onEditorStateChange}
            placeholder="Compose email"
            />
        </div>
    )
}

export default TextEditor;