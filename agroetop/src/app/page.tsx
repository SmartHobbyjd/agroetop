import Image from "next/image";
import YoutubeEmbed from '@/components/YoutubeEmbed';

export default function Home() {
  return (
    <div className="min-h-screen flex py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex items-center">
        <div className="flex-1">
          <YoutubeEmbed videoId="NfH6H_3eq58?si=QO4_YeV-oyhwIV5m" />  
        </div>
        <div className="flex-1">
          <div className="card shadow-md rounded-lg px-5 py-4">
            <div className="card-header">
              <h1 className="bg-ice-100 text-ice-800">Agro World</h1>
              <p className="bg-ice-100 text-ice-800">Let's make great deals</p> 
            </div>
      <section className="bg-ice-100 text-ice-800"> 
  <div className="container mx-auto py-16 flex flex-col items-center">
    <h1 className="text-4xl font-bold mb-4">Agro é Top</h1> 
    <p className="text-lg mb-8">Your Modern Agricultural Solution</p>
    <div className="flex space-x-4">
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Login</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
    </div>
  </div>
</section>
</div>
        </div>
      </div>
    </div>
  );
}
