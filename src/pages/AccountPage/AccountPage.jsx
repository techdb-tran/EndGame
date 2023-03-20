import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  actFetchAllUsers,
  actFetchUserByID,
  actLogout,
} from "../../redux/features/users/usersSlice";
import "./AccountPage.scss";
const AccountPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  const { user } = useSelector((state) => state.users);
  const handleToggle = () => {
    setIsShow(!isShow);
  };

  const handleChangeProfilePage = () => {
    navigate(`/account/profile`);
  };

  const handleLogout = () => {
    dispatch(actLogout());
    navigate("/login");
  };

  const handleAdminPage = () => {
    navigate("/admin");
  };
  useEffect(() => {
    dispatch(actFetchUserByID(user.id));
  }, []);

  return (
    <div className="account">
      <div className="account__img">
        <img src={user.image} alt="" />
      </div>
      <div className="account__detail">
        <h3>{user.username}</h3>
        <div className="account__detail--action">
          <div className="account-act">
            <button className="act-account" onClick={() => handleToggle()}>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            {isShow && (
              <ul className="ul-action">
                <li className="logout-btn" onClick={handleChangeProfilePage}>
                  Edit Profile
                </li>
                <li className="logout-btn" onClick={handleLogout}>
                  Log Out
                </li>
                {user.isAdmin && (
                  <li className="logout-btn" onClick={handleAdminPage}>
                    Admin
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
