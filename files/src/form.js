import React, { useState , useEffect} from 'react';
import axios from "axios";

import ClassicEditor from 'ckeditor5-custom-build/build/ckeditor';

const Form = ({addOrUpdate}) => {
    const { CKEditor } = require('@ckeditor/ckeditor5-react');
    const [data, setData] = useState({
        title: "",
        body: "",
        keyWords: "",
    });

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setData({ ...data, [name]: value });
    }

    useEffect(() => {
        console.log(data);
    }, [data]);

    return <>
        <section className='container my-5 py-5'>
            <div className="row">
                <div className="col-12 my-3">
                    <input
                        type="text"
                        value={data.title}
                        name="title"
                        onChange={(e) => handleChange(e)}
                        className="form-control"
                        placeholder='Title'
                    />
                </div>
                <div className="col-12">
                <CKEditor
                    editor={ ClassicEditor }
                    type="text"
                        config={ {
                            language: 'ar',
                        } }
                    data={data.body}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!');
                    } }
                    onChange={ ( event, editor ) => {
                        const d = editor.getData();
                        setData({ ...data, body: d });
                        }}
                />
                </div>     
            </div>
        </section>
    </>
}

export { Form };