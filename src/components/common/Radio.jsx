import React from "react";
import { Form, Radio, Space } from "antd";

function RadioButton(props) {
    const {
        question,
        onChange
    } = props;
    const {
        name,
        options,
        value,
        validations,
        label
    } = question;
    return(
        <Form.Item
            name={name}
            label={label}
            rules={validations}
            style={{
                padding: "10px 0px"
            }}
            >
            <Radio.Group onChange={(event) => onChange(name, event.target.value)} value={value}>
                <Space direction="vertical">
                    {options.map((option, index) => {
                        return (
                            <Radio key={`${index} - ${name}`} value={option.value}>{option.label}</Radio>
                        )
                    })}
                </Space>
            </Radio.Group>
        </Form.Item>
    )
}
export default RadioButton