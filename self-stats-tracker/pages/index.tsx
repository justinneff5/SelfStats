import axios from 'axios';

export default function Home() {
    function handleSend(e : any) {
        e.preventDefault();
        axios.post('/api/send').then(res => console.log(res));
    }
    return (
      <div className="w-screen h-screen bg-gray-200">
      <div className="w-full h-16 bg-white">
          <div className="w-full text-black font-bold text-xl text-left ml-12">
            <div className="mt-6">Self Stats Tracker</div>
          </div>
          <div className="w-full h-16 bg-blue-300">
          <button className="mt-4 ml-12 bg-white rounded-md w-24 h-8 transform scale-102" onClick={handleSend}>Send Test</button>
          </div>
          </div>
      </div>
    );
}
