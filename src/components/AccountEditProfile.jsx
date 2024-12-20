import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../context/UserContext"; // Adjust the path as needed
import { ToastContainer, toast } from 'react-toastify';

const AccountEditProfile = () => {
    const { currentUser, setCurrentUser, allUsers, setAllUsers } = useContext(UserContext);
    let username = currentUser?.username.split(" ");
    const [formData, setFormData] = useState({
        firstName: username[0] || "",
        lastName: username[1] || "",
        emailOrPhone: currentUser?.emailOrPhone || "",  // Updated to emailOrPhone
        address: currentUser?.address || "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSaveChanges = (e) => {
        e.preventDefault();
        
        // Validate current password
        if (currentUser.password !== formData.currentPassword && formData.currentPassword !== "") {
            toast.error("Current password is incorrect.");
            return;  
        }

        // Validate new password length
        if (formData.newPassword.length <= 6 && formData.newPassword !== "") {
            toast.error("Password must be at least 6 characters");
            return;  
        }

        // Validate password match
        if (formData.newPassword !== formData.confirmPassword) {
            toast.error("Passwords don't match");
            return; 
        }

        const updatedUser = {
            ...currentUser,
            username: `${formData.firstName} ${formData.lastName}`.trim(),
            emailOrPhone: formData.emailOrPhone,  // Updated to emailOrPhone
            address: formData.address,
            password: formData.newPassword || currentUser.password, 
        };
    
        setCurrentUser(updatedUser);
        const updatedUsers = allUsers.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
        );
        setAllUsers(updatedUsers);
    
        setTimeout(() => {
            toast.success("Profile updated successfully!");
        }, 300);
    };

    const handleCancel = () => {
        setFormData({
            firstName: username[0] || "",
            lastName: username[1] || "",
            emailOrPhone: currentUser?.emailOrPhone || "",  // Updated to emailOrPhone
            address: currentUser?.address || "",
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        });
    };

    return (
        <div className="container" style={{ marginBottom: "100px", marginTop: "100px" }}>
            <ToastContainer />

            <div className="row my-4">
                <div className="d-flex justify-content-end">
                    <p>Welcome! <span className="text-danger">{currentUser?.username}</span></p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 mb-4">
                    <h6 className="mb-4">Manage My Account</h6>
                    <ul className="" style={{ listStyle: "none" }}>
                        <li className="mb-2">
                            <a href="#" className="text-danger">
                                My Profile
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-body-tertiary ">
                                Address Book
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-body-tertiary">
                                My Payment Options
                            </a>
                        </li>
                    </ul>

                    <h6 className="mb-4">My Orders</h6>
                    <ul className="" style={{ listStyle: "none" }}>
                        <li className="mb-2">
                            <a href="#" className="text-body-tertiary">
                                My Returns
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-body-tertiary">
                                My Cancellations
                            </a>
                        </li>
                    </ul>

                    <h6 className="mb-4">My Wishlist</h6>
                </div>

                {/* Main Content */}
                <div className="col-lg-9">
                    <h5 className="text-danger mb-4">Edit Your Profile</h5>
                    <Form onSubmit={handleSaveChanges}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <Form.Group controlId="formFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-6 mb-3">
                                <Form.Group controlId="formLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                    />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <Form.Group controlId="formEmailOrPhone">
                                    <Form.Label>Email or Phone Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="emailOrPhone"
                                        value={formData.emailOrPhone}
                                        onChange={handleChange}
                                        placeholder="Email or Phone Number"
                                        disabled
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-6 mb-3">
                                <Form.Group controlId="formAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Address"
                                    />
                                </Form.Group>
                            </div>
                        </div>

                        <h6 className="text-muted mt-4">Password Changes</h6>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <Form.Group controlId="formCurrentPassword">
                                    <Form.Label>Current Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="currentPassword"
                                        value={formData.currentPassword}
                                        onChange={handleChange}
                                        placeholder="Current Password"
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-12 mb-3">
                                <Form.Group controlId="formNewPassword">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="newPassword"
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                        placeholder="New Password"
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-12 mb-3">
                                <Form.Group controlId="formConfirmPassword">
                                    <Form.Label>Confirm New Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm New Password"
                                    />
                                </Form.Group>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end gap-3">
                            <Button variant="outline-secondary" type="button" className="px-4 py-3" onClick={handleCancel}>
                                Cancel
                            </Button>
                            <Button variant="danger" type="submit" className="px-5 py-3">
                                Save Changes
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AccountEditProfile;
