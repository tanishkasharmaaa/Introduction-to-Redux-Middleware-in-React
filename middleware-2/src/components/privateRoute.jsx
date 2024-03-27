// privateRoute.js
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function Private({ children }) {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    if (isAuthenticated) {
        return <Navigate to="/quiz" replace />;
    }

    return children;
}
