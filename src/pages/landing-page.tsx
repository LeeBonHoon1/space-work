import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/main");
  }, [navigate]);
  return null;
};

export default LandingPage;
