import { BadgeCheckIcon, ChatIcon, ClipboardCheckIcon, ClipboardIcon, UserAddIcon, UserIcon, ViewGridAddIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import CustomLink from "../Shared/CustomLink";

const DashboardSidebar = ({ children }) => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class='drawer drawer-mobile mt-16 bg-white'>
            <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
            <div class='drawer-content flex flex-col '>
                {/* <!-- Page content here --> */}

                <Outlet></Outlet>
            </div>
            <div class='drawer-side '>
                <label for='my-drawer-2' class='drawer-overlay'></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content shadow-inner">
                    {/* <!-- Sidebar content here --> */}
                    <li><CustomLink className="font-normal mt-2 flex text-[15px]  items-center" to="/dashboard"><UserIcon className="w-4 h-4 mr-1"></UserIcon> My Profile</CustomLink></li>
                    {!admin && <>
                        <li><CustomLink className="font-normal mt-2 flex text-[15px]  items-center" to="/dashboard/review"><ChatIcon className="w-4 h-4 mr-1"></ChatIcon> Add Review</CustomLink></li>
                        <li><CustomLink className="font-normal mt-2 flex text-[15px]  items-center" to="/dashboard/orders"><BadgeCheckIcon className="w-4 h-4 mr-1"></BadgeCheckIcon> My Orders</CustomLink></li>

                    </>}
                    {admin && <>
                        <li><CustomLink className="font-normal mt-2 flex text-[15px]  items-center" to="/dashboard/addProduct"><ViewGridAddIcon className="w-4 h-4 mr-1"></ViewGridAddIcon> Add a Tool</CustomLink></li>
                        <li><CustomLink className="font-normal mt-2 flex text-[15px]  items-center" to="/dashboard/manageProducts"><ClipboardIcon className="w-4 h-4 mr-1"></ClipboardIcon> Manage Tools</CustomLink></li>
                        <li><CustomLink className="font-normal mt-2 flex text-[15px]  items-center" to="/dashboard/manageOrders"><ClipboardCheckIcon className="w-4 h-4 mr-1"></ClipboardCheckIcon> Manage Orders</CustomLink></li>
                        <li><CustomLink className="font-normal mt-2 flex text-[15px]  items-center" to="/dashboard/makeAdmin"><UserAddIcon className="w-4 h-4 mr-1"></UserAddIcon> Make Admin</CustomLink></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;