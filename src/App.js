import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import BidList from "./components/BidList";
import CreateBidForm from "./components/CreateBidForm";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

// Private Route Wrapper
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true"; // Convert to boolean

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route
          path="/bids"
          element={
            <PrivateRoute>
              <Layout>
                <BidList />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/create-bid"
          element={
            <PrivateRoute>
              <CreateBidForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
