import React, { useEffect, useState } from 'react';
import { getInwards } from '../services/api';
const Home = () => {
  const [inwards, setInwards] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getInwards();
      setInwards(res.data.inwardMasters);
    };
    fetchData();
  }, []);
  const DocumentList = ({ documents }) => {
    return (
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Sender Name
              </th>
              {/* Add more header columns here based on your data structure */}
              {/* ... */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {documents.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.iw_status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.iw_sender_name}
                </td>
                {/* Add more table cells here based on your data structure */}

                {/* ... */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Inward List</h1>
      <DocumentList documents={inwards} />
    </div>
  );
};

export default Home;
