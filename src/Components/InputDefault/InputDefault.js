import { Input } from 'antd';
import React from 'react';

import './style.css';

const InputDefault = ({ placeholder, value, onChange, type, prefix }) => {
    return (
        <Input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}
            prefix={prefix}
            className="mt-input-default"
        />
    );
};

export default InputDefault;
