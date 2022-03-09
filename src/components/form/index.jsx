import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import template from "../../schemas/first.json";
import { QUESTION_TYPES } from "../../constants/questionTypes";
import InputField from "../common/InputField";
import CheckBoxComponent from "../common/Checkbox";
import RadioButton from "../common/Radio";
import { getItem, setItem } from "../../utils/localStorage";

export default function FormComponent() {
    const [templateData, setTemplate] = useState(template);
    const [formValues, setFormValues] = useState(getItem(templateData.name));
    
    const {
        name,
        questions
    } = templateData;

    const onSubmit = (formData) => {
        setFormValues(formData);
        setItem(templateData.name, formData)
        alert(JSON.stringify(formData))
    }
    const formFieldChange = (name, value) => {
        templateData.questions.forEach((question) => {
            if (question.name === name) {
                question.value = value
            }
        })
        setTemplate(templateData);
    }
    const returnFormField = (question) => {
        const {
            type
        } = question;
        switch(type) {
            case QUESTION_TYPES.TEXTBOX: {
                return <InputField question={question} onChange={formFieldChange} />
            }
            case QUESTION_TYPES.CHECKBOX: {
                return <CheckBoxComponent question={question} onChange={formFieldChange} />
            }
            case QUESTION_TYPES.RADIO: {
                return <RadioButton question={question} onChange={formFieldChange} />
            }
            default: {
                return <InputField question={question} />
            }
        }
    }
    const orderedQuestions = questions.sort((a, b) => a.questionNumber - b.questionNumber);
    return (
        <div
            style={{
                display: "flex",
                padding: "20px",
                width: '100%',
                flexDirection: 'column'
            }}>
            <h4
                style={{
                    borderBottom: '1px solid black'
                }}>
                    {name}
            </h4>
            <Form
                name={name}
                layout="vertical"
                onFinish={onSubmit}
                requiredMark={true}
                initialValues={formValues}
            >
                {orderedQuestions?.map(question => {
                    return <div style={{
                        marginBottom: 20
                    }}>{returnFormField(question)}</div>
                })}
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}