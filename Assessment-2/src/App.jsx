import cartlogo from "/cart.png";
import { Outlet, Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import useNotificationStore from "../store/useNotificationStore";
import NotificationPill from "./components/NotificationPill";

function App() {
  const totalItemsInCart = useCartStore((state) => state.totalItemsInCart);
  const notificationQueue = useNotificationStore((state) => state.queue);
  const removeFromQueue = useNotificationStore((state) => state.removeFromQueue);

  return (
    <>
      {notificationQueue.map((ele) => {
        return (
          <NotificationPill
            key={ele}
            animationClasses={["animate-[tdown_0.6s_ease-in-out]", "animate-[tup_0.6s_ease-in-out]"]}
            transitionTime={3000}
            onAnimationFinished={() => removeFromQueue(ele)}
            message={"Item Added!"}
          />
        );
      })}

      <div className="fixed top-0 py-4 w-screen bg-amber-50">
        <div className="flex justify-between items-center mx-10 md:mx-16">
          <Link to={`/`}>
            <h1 className="text-xl font-bold underline">Assessment 2</h1>
          </Link>
          <Link to={`cart`} className="flex justify-center items-center relative" aria-label="cart-logo">
            <img className="w-6" src={cartlogo} />
            {totalItemsInCart > 0 && (
              <span className="absolute top-0 left-3 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">
                {totalItemsInCart}
              </span>
            )}
          </Link>
        </div>
      </div>

      <div id="detail" className="m-4 mt-24 md:m-14 md:mt-24">
        <Outlet />
      </div>
    </>
  );
}

export default App;
