import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'attendee' | 'organizer';
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { isAuthenticated, userRole } = useAuth();
  const location = useLocation();

  // Show loading state
  if (isAuthenticated === false && userRole === null) {
    // Check if we should redirect to login
    return <Navigate to="/login" state={{ from: location.pathname, requiredRole }} replace />;
  }

  // If authenticated but wrong role, redirect to correct dashboard
  if (isAuthenticated && requiredRole && userRole !== requiredRole) {
    if (userRole === 'attendee') {
      return <Navigate to="/attendee-dashboard" replace />;
    }
    if (userRole === 'organizer') {
      return <Navigate to="/organizer-dashboard" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
