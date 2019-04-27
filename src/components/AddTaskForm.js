import React, { Component } from 'react';
import { Modal, Form, Input, Radio, } from 'antd';

const AddTaskForm = Form.create({ name: 'Add Task' })(
    class extends React.Component {
        state = {
            value: 1,
        }

        render() {
            const {
                visible, onCancel, onCreate, form,
            } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="Add new Task"
                    okText="Add"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="Title">
                            {getFieldDecorator('title', {
                                rules: [{ required: true, message: 'Please input the title of collection!' }],
                            })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item label="Description">
                            {getFieldDecorator('description')(<Input type="textarea" />)}
                        </Form.Item>
                        <Form.Item className="collection-create-form_last-form-item">
                            {getFieldDecorator('modifier', {
                                initialValue: 'public',
                            })(
                                <Radio.Group value={this.state.value}>
                                    <Radio defaultChecked={"true"} value={""}>Not Started</Radio>
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