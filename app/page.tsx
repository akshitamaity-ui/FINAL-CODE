'use client';

import dynamic from 'next/dynamic';
import nodesData from '../data/nodes.json';
import edgesData from '../data/edges.json';

const CausalLoopMap = dynamic(() => import('../components/CausalLoopMap'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7F6F2',
        color: '#64748B',
        fontSize: '14px',
        fontWeight: 600,
      }}
    >
      Loading causal loop system map...
    </div>
  ),
});

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <CausalLoopMap initialNodes={nodesData} initialEdges={edgesData} />
    </main>
  );
}
