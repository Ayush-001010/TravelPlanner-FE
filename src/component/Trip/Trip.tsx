import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import type ITrip from './ITrip';
import useTripActionHook from '../../customHooks/useTripActionHook';
import type { Socket } from 'socket.io-client';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import TripDetails from './TripDetails/TripDetails';
import { QueryClient, QueryClientProvider, onlineManager } from '@tanstack/react-query';
import TripForm from './TripForm/TripForm';

export interface ITripContext {
    openForm: boolean;
    openFormHandler: (type: "Places") => void;
    formType: "Places"
}

const context = createContext<ITripContext | undefined>(undefined);

export const useTripContext = () => {
    const ctx = useContext(context);
    if (!ctx) {
        throw new Error('useTripContext must be used within a TripProvider');
    }
    return ctx;
}

const queryClient = new QueryClient();
try {
    onlineManager.setOnline(true);
} catch (e) {
}


const Trip: React.FC<ITrip> = () => {
    const { makeSocketConnection } = useTripActionHook();
    const [_, setSocketConnected] = useState<Socket | undefined>();
    const [openForm, setOpenForm] = useState(false);
    const [formType, setFormType] = useState<"Places">("Places");
    const [nodes, setNodes] = useState([
        { id: 'n1', type: 'tripDetails', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
    ]);
    const [edges, setEdges] = useState<Array<any>>([]);

    const onNodesChange = useCallback(
        (changes: any) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes: any) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );
    const onConnect = useCallback(
        (params: any) => setEdges((edgesSnapshot: any) => addEdge(params, edgesSnapshot)),
        [],);
    const nodeTypes = {
        tripDetails: TripDetails,
    };
    const openFormHandler = (type: "Places") => {
        setFormType(type);
        setOpenForm((prev) => !prev);
    };
    useEffect(() => {
        const socketService = makeSocketConnection();
        const socket = socketService.connect();
        const handleConnect = () => {
            console.log('Socket connected', socket.id);
        };
        socket.on('connect', handleConnect);
        socket.emit("join-room", 123);
        setSocketConnected(socket);
        return () => {
            socket.off('connect', handleConnect);
            socketService.disconnect();
        };
    }, []);

    return (
        <context.Provider value={{ openForm, openFormHandler, formType }} >
            <QueryClientProvider client={queryClient}>
                <div style={{ width: '100vw', height: '100vh' }}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        nodeTypes={nodeTypes}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        fitView
                    />
                </div>
                <TripForm />
            </QueryClientProvider>
        </context.Provider >
    )
};

export default Trip;