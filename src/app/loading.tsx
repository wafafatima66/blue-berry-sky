import BerryLoader from "@/components/BerryLoader";

export default function Loading() {
  return (
    <div className="min-h-[60vh] w-full flex items-center justify-center">
      <BerryLoader />
    </div>
  );
}