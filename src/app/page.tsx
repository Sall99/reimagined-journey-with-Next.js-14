import MaxWidthWrapper from "@/components/max-w-wrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="flex max-w-3xl flex-col items-center px-20 text-center">
        <h1 className="text-4xl  font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your market for high-quality{" "}
          <span className="text-blue-600">for digital assets</span>
        </h1>
      </div>
    </MaxWidthWrapper>
  );
}
