import React, { Component } from 'react';
import { Modal, Form, Input, Radio, } from 'antd';

const AddTaskForm = Form.create({ name: 'Add Task' })(
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form, type } = this.props;
            const { getFieldDecorator } = form;

            let title,okText

            if(type === 'new') {
                title = "New task"
                okText = "Add"
            } else if(type === 'edit') {
                title = "Edit task"
                okText = "Update"
            } else {
                throw new Error(`Type ${type} invalid`)
            }

            return (
                <Modal
                    visible={visible}
                    title={title}
                    okText={okText}
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="Title">
                            {getFieldDecorator('title', {
                                rules: [{ required: true, message: 'Please input the title of the task!' }],
                            })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item label="Description">
                            {getFieldDecorator('description')(<Input type="textarea" />)}
                        </Form.Item>
                        <Form.Item className="collection-create-form_last-form-item">
                            {getFieldDecorator('status', {
                                initialValue: '',
                            })(
                                <Radio.Group>
                                    <Radio value={""}>Not Started</Radio>
                                    <Radio value={"inProgress"}>In Progress</Radio>
                                    <Radio value={"completed"}>Completed</Radio>
                                </Radio.Group>
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    }
);

export default AddTaskForm;