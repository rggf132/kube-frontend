import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Layout } from "antd";
import { login } from "../actions/user";
import { connect } from "react-redux";

import "./Login.css";

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { dispatch } = this.props;

        dispatch(login(values));
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { Content } = Layout;
    const { getFieldDecorator } = this.props.form;
    const { user } = this.props;
    console.log(this.props.user);
    return (
      <Content style={{ padding: "10%", margin: "auto", width: "50%" }}>
        <p>{JSON.stringify(user.user)}</p>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "Please input your email!" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="E-mail"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Content>
    );
  }
}
const WrappedLogin = Form.create({ name: "login" })(Login);
const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(WrappedLogin);
