import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";


const UserRegistration = ({users, postUser}) => {

    const navigate = useNavigate();

    const [form] = Form.useForm();

    // Need a way to store passwords

    // Make sure the pop-ups are adding users - check the onClick in the Pop-up

    // Have a button that linked to the Login pop-up => "Already a member? Login here"

    // Clear form once info has been submitted

    const [stateUser, setStateUser] = useState(
        {
            name: "",
            emailAddress: "",
            events: null
        }
    )

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedUser = {...stateUser}
        copiedUser[propertyName] = event.target.value;
        setStateUser(copiedUser);
    }
    const handleSubmitForm = (event) => {
        // event.preventDefault();
        alert("User has been registered")
        postUser(stateUser);
        form.resetFields();
        navigate("/register")
        
        // Registration pop-up should have an URL
        // Where should the Pop-up code go?
    }

    const onFinish = values =>{
        console.log("Received values of form", values);
    }

    return ( 
    <>
    <Form onFinish={handleSubmitForm}
    form={form}
    name="register"
    className="registration-form"
    initialValues={{
        remember: true,
    }}
    >
        <Form.Item
        name="name"
        rules={[
            {
                required: true,
                message: "Please enter your name!",
            }
        ]}>
            <Input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={stateUser.name}/>
        </Form.Item>

        <Form.Item
        name="emailAddress"
        rules={[
            {
                required: true,
                message: "Please enter your email address!"
            }
        ]}>
            <Input 
                type="text"
                placeholder="Email Address"
                name="emailAddress"
                onChange={handleChange}
                value={stateUser.emailAddress}/>
        </Form.Item>

        <Form.Item
        name="password"
        rules={[
            {
                required: true,
                message: "Please enter your password!",
            }
        ]}>
            <Input
                type="password"
                placeholder="Password"
                name="password"/>
        </Form.Item>

        <Form.Item
        name="confirm-password"
        rules={[
            {
                required: true,
                message: "Password and Confirm Password must be the same!"
            }
        ]}>
            <Input
                type="password"
                placeholder="Confirm Password"
                name="confirm-password"/>
        </Form.Item>

        <Form.Item
        name="keep-me-signed-in" valuePropName="checked" noStyle>
            <Checkbox>Keep me signed in</Checkbox>
        </Form.Item>

            {/* Need to add conditional statement to make sure password works */}
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Register
            </Button>
            <a href="/login">Already a member? Login here!</a>
        </Form.Item>
    </Form>
    </> 
    );
}
 
export default UserRegistration;