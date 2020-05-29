import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FibList } from '../components/FibList';
import { Loader } from '../components/Loader';


export const HistoryPage = () => {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchList = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/api/history/get');
      const fetched = res.data;

      setLists(fetched);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>

      {!loading && <FibList lists={lists} /> }
    </div>
  );
};
