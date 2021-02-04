import React from "react";
import logo from "./logo.svg";

import { useMutation, gql } from "@apollo/client";

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
            url
        }
    }
`;

const UploadForm = () => {
    const [uploadFile] = useMutation(UPLOAD_FILE, {
        onCompleted: (data) => console.log(data),
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        uploadFile({ variables: { file } });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Upload File</h1>
                <input type="file" onChange={handleFileChange} />
            </header>
        </div>
    );
};

export default UploadForm;
