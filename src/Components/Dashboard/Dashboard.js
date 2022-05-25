import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const DashboardSidebar = ({ children }) => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class='drawer drawer-mobile mt-16 bg-white'>
            <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
            <div class='drawer-content flex flex-col items-end justify-start'>
                {/* <!-- Page content here --> */}
                <label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden">Open Drawer</label>
                <Outlet></Outlet>
            </div>
            <div class='drawer-side '>
                <label for='my-drawer-2' class='drawer-overlay'></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    {!admin && <>
                        <li><Link to="/dashboard/review">Add Review</Link></li>
                        <li><Link to="/dashboard/orders">My Orders</Link></li>

                    </>}
                    {admin && <>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                        <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;