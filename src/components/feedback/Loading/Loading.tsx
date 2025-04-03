import CartSkeleton from "../skeletons/CartSkeleton/CartSkeleton";
import LottieHandler from "../LottieHandler/LottieHandler";
import TableSkeleton from "../skeletons/TableSkeleton/TableSkeleton";

import { TLoading } from "@types";

const skeletonsTypes = {
  cart: CartSkeleton,
  table: TableSkeleton,
};

type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
  type?: keyof typeof skeletonsTypes; // Ensure the 'type' prop is properly typed
};

const Loading = ({ status, error, children, type }: LoadingProps) => {
  const Component = type ? skeletonsTypes[type] : null; // Get the skeleton component based on 'type'

  if (status === "pending") {
    return Component ? <Component /> : <div>Loading...</div>; // Render skeleton or fallback if no type
  }
  if (status === "failed") {
    return (
      <div>
        <LottieHandler type="error" message={error as string} />
      </div>
    );
  }
  return <div>{children}</div>;
};

export default Loading;
