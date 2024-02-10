import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import moment from 'moment';

function Profile() {
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    React.useEffect(()=>{
        if (!currentUser) {
                alert("Please Login First.");
                navigate('/login'); // Redirect to login page if not logged in
        }
    },[dispatch])
    
    return currentUser ? (
        <div className="flex w-full justify-center mt-10 ">
            <div className="border-2 rounded-3xl p-8 text-center">
                <h1 className="text-3xl font-bold mb-4 flex justify-center">Hi, <p className='text-orange-700'>{currentUser.name}</p></h1>
                <p className="text-lg">Your Email Id: {currentUser.email}</p>
                <p className="text-lg">Account Verified: {currentUser.emailVerification ? "Yes" : "No"}</p>
                <p className="text-lg">Password Updated <u>{moment(currentUser.passwordUpdate).fromNow()}</u></p>
                <p className="text-lg">Account Status: <span className={`font-bold ${currentUser.status ? 'text-green-500' : 'text-red-500'}`}>{currentUser.status ? 'Active' : 'Inactive'}</span></p>
            </div>
        </div>
    ) : null
}

export default Profile;
