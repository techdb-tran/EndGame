import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actUpdateUser } from "../../redux/features/users/usersSlice";
import "./ProfilePage.scss";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const initialValueForm = {
    userName: user.userName,
    image: user.image,
    address: user.address,
    phoneNumber: user.phoneNumber,
    isAdmin: false,
    id: user.id,
    email: user.email,
    password: user.password,
  };

  const [formState, setFormState] = useState(initialValueForm);

  useEffect(() => {
    setFormState(initialValueForm);
  }, [user]);

  const handleOnChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(actUpdateUser(user.id, formState));
  };

  return (
    <div className="profile">
      <form>
        <div className="profile__top">
          <div className="profile__top--img">
            <img src={user.image} alt="" />
          </div>
          <div className="profile__top--action">
            <input
              type="text"
              name="image"
              placeholder="Image"
              value={formState.image}
              onChange={handleOnChangeFormData}
            />
          </div>
        </div>
        <div className="profile__bottom">
          <div className="form-input">
            <label>Name</label>
            <input
              type="text"
              name="userName"
              value={formState.userName}
              onChange={handleOnChangeFormData}
            />
          </div>
          <div className="form-input">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formState.phoneNumber}
              onChange={handleOnChangeFormData}
            />
          </div>
          <div className="form-input">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={formState.address}
              onChange={handleOnChangeFormData}
            />
          </div>
          <div className="form-input">
            <label>Your Password</label>
            <input
              required
              type="password"
              name="password"
              placeholder="Enter your password"
              value={null}
              onChange={handleOnChangeFormData}
            />
          </div>
          <button onClick={(e) => handleUpdate(e)}>Save Profile</button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
