import { useState, useEffect } from "react";
import Card from './Card';
import Skeleton from './Skeleton';


function SkeletonHome() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? <Skeleton /> : <Card />}
    </div>
  );
}

export default SkeletonHome;
