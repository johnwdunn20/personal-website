import Image from "next/image";
import Product from "@components/Product";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="product">
        <Product
          title='React Query Rewind'
          description='Description for RQRewind'
          technicalDescription="NPM Package and Chrome Extension"
          github="url"
        />
      </div>
    </main>
  );
}
