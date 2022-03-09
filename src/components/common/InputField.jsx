import React from "react";
import { Form, Input } from "antd";

function InputField(props) {
    const {
        question,
        onChange
    } = props;
    const {
        name,
        placeholder,
        label,
        value,
        validations
    } = question;
    return (
        <Form.Item
            hasFeedback
            name={name}
            label={label}
            rules={validations}
            style={{
                padding: "10px 0px"
            }}
            >
            <Input
                width={400}
                onChange={(value) => onChange(name, value)}
                style={{
                    height: 30,
                    padding: "5px",
                    margin: "10px 0px 5px 0px"
                }}
                placeholder={placeholder} />
        </Form.Item>
    )
}
export default InputField;