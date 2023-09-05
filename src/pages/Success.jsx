import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div
        style={{ alignItems: "center" }}
        className="text-center flex flex-col item-center justify-center h-screen"
      >
        {loading ? (
          <PropagateLoader color="#36d7b7" />
        ) : (
          <div>
            <h2 style={{ color: "green" }} className="mb-4">Order Successfull!</h2>
            <h3>Your order has been successfully placed</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Success;
