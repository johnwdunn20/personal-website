import Image from "next/image";
import Product from "@components/Product";
import Welcome from "@components/Welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Welcome/>
      <div id="product">
        <Product
          title="React Query Rewind"
          description="Description for RQRewind"
          technicalDescription="NPM Package and Chrome Extension"
          github="url"
        />
        <Product
          title="React Query Rewind"
          description="Description for RQRewind"
          technicalDescription="NPM Package and Chrome Extension"
          github="url"
        />
      </div>
    </main>
  );
}
