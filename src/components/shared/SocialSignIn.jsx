import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { FcGoogle } from "react-icons/fc";
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialSignIn = () => {

    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn = () => {

        try {
            googleSignIn().then((res) => {
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName,
                    role:'normal'
                }
                axiosPublic.post('/users', userInfo).then((res) => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'Logged in successfully with Google!',
                        }).then(() => {
                            navigate(from);
                        });
                    }
                })
            })


        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: err.message || 'Error logging in with Google. Please try again.',
            });
        }
    };
    return (
        <div className="flex gap-4">
            <button
                onClick={handleGoogleSignIn}
                type="button"
                className="p-4 border rounded-full"
            >
                <FcGoogle/>
            </button>
        </div>
    )
}

export default SocialSignIn
