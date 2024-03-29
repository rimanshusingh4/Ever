import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import Button from './Button';
import { client, account } from '../config/Auth';

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

    const deleteAcc = async()=>{
        try {
            const promise = await account.delete();
            console.log(promise)
        } catch (error) {
            console.log(error)
        }

    }

    return currentUser ? (
        <div className="flex w-full justify-center mt-10 ">
            <div className="border-2 rounded-3xl p-8 text-center">
                <h1 className="text-3xl font-bold mb-4 flex justify-center">Hi, <p className='text-orange-700'>{currentUser.name}</p></h1>
                <p className="text-lg">Email Id: {currentUser.email}</p>
                <p className="text-lg">Account Verified: <span className={`font-bold ${currentUser.emailVerification ? 'text-green-500' : 'text-red-500'}`}>{currentUser.emailVerification ? 'Verified' : 'Not Verified'}</span></p>
                <p className="text-lg">Password Updated <u>{moment(currentUser.passwordUpdate).fromNow()}</u></p>
                <p className="text-lg">Account Status: <span className={`font-bold ${currentUser.status ? 'text-green-500' : 'text-red-500'}`}>{currentUser.status ? 'Active' : 'Inactive'}</span></p>
                <Button onClick={deleteAcc} className='bg-orange-700 mt-4'>Delete Account</Button>
            </div>
        </div>
    ) : null
}
export default Profile;
