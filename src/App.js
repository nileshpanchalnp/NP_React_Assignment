import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import BidList from "./components/BidList";
import CreateBidForm from "./components/CreateBidForm";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <BidList />
            </Layout>
          }
        />
        <Route
          path="/bids"
          element={
            <Layout>
              <BidList />
            </Layout>
          }
        />
        <Route path="/create-bid" element={<CreateBidForm />} />
      </Routes>
    </Router>
  );
}
