import React from 'react';

/**
 * Description input component
 * @param {*} props
 */
const DescriptionInputComponent = (props) => {
    return (
        <div>
            <p>
                <label htmlFor="content">{props.attribute.label}</label>
            </p>
            <textarea value="text here" className='descriptionInput' name="content" data-min-rows="1" rows="1" required="required" ></textarea>
        </div>
    );
}

export default DescriptionInputComponent;
