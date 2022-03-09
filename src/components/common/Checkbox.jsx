import React from "react";
import { Row, Col, Checkbox, Form } from "antd";

function CheckBoxComponent(props) {
    const {
        question,
        onChange
    } = props;
    const {
        name,
        label,
        value,
        options,
        validations
    } = question;
    return (
        <Form.Item
            name={name}
            label={label}
            rules={validations}
            style={{
                padding: "10px 0px"
            }}
            >
            <Checkbox.Group style={{ width: '100%' }} onChange={(value) => onChange(name, value)}>
                <Row>
                    {options.map((option, index) => {
                        return (
                            <Col span={8} key={`${index} - ${name}`}>
                                <Checkbox
                                    value={option.value}>
                                        {option.label}
                                </Checkbox>
                            </Col>
                        )
                    })}
                </Row>
            </Checkbox.Group>
        </Form.Item>
    )
}
export default CheckBoxComponent;