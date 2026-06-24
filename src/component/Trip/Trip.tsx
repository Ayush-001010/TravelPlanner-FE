import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import type ITrip from './ITrip';
import useTripActionHook from '../../customHooks/useTripActionHook';
import type { Socket } from 'socket.io-client';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import TripDetails from './TripDetails/TripDetails';
import { QueryClient, QueryClientProvider, onlineManager } from '@tanstack/react-query';
import TripForm from './TripForm/TripForm';
import NewItenary from './NewItenary/NewItenary';
import type { IItenaryInterface } from '../../services/Interfaces/TripInterface';
import HotelPannel from './HotelPannel/HotelPannel';

export interface ITripContext {
    openForm: boolean;
    openFormHandler: (type: "Places") => void;
    formType: "Places";
    addNewItenary: (values: Record<string, any>) => void;
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
    const [socketConnection, setSocketConnected] = useState<Socket | undefined>();
    const [openForm, setOpenForm] = useState(false);
    const [formType, setFormType] = useState<"Places">("Places");
    const [nodes, setNodes] = useState([
        { id: 'n1', type: 'newItenary', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
    ]);
    const [edges, setEdges] = useState<Array<any>>([]);

    const addNewItenary = (values: Record<string, any>) => {
        if (socketConnection) {
            socketConnection.emit("create-itenary", { ...values, tripID: "123" });
        }
        setOpenForm(false);
    }
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
        newItenary: NewItenary
    };
    const openFormHandler = (type: "Places") => {
        setFormType(type);
        setOpenForm((prev) => !prev);
    };

    const getItenaryData = useCallback((data: any) => {
        const nodesArray : any = [];
        const edgesArray : any = [];
        data.forEach((itenary: any, index: number) => {
            nodesArray.push({
                id: `n${index + 1}`,
                type: 'tripDetails',
                position: { x: 0, y: index * 100 },
                data: {
                    endDate: itenary.EndDate,
                    startDate: itenary.StartDate,
                    notes: itenary.Notes,
                    placeName: itenary.PlaceName,
                    ID : itenary.ID
                }
            });
            if (index > 0) {
                edgesArray.push({
                    id: `e${index}`,
                    source: `n${index}`,
                    target: `n${index + 1}`,
                    type: 'smoothstep',
                });
            }
        });
        const lastIndex = nodesArray.length; // number of nodes built from data
        const newNodeId = `n${lastIndex + 1}`;
        nodesArray.push({ id: newNodeId, type: 'newItenary', position: { x: 0, y: nodesArray.length * 100 }, data: { label: 'Node 1' } });
        // Only add an edge from the previous node to the new node if a previous node exists
        if (lastIndex > 0) {
            edgesArray.push({
                id: `e${lastIndex}`,
                source: `n${lastIndex}`,
                target: newNodeId,
                type: 'smoothstep',
            });
        }
        setEdges(edgesArray);
        setNodes(nodesArray);

    }, []);
    useEffect(() => {
        if (!socketConnection) return;

        const handleItenaryUpdated = (data: any) => {
            setNodes((n: any) => {
                const obj: IItenaryInterface = {
                    endDate: data.endDate,
                    startDate: data.startDate,
                    notes: data.notes,
                    placeName: data.placeName
                }
                n[n.length - 1].data = obj;
                n[n.length - 1].type = "tripDetails";
                n.push({ id: `n${n.length + 1}`, type: 'newItenary', position: { x: 0, y: n.length * 100 }, data: { label: 'Node 1' } });
                return [...n];
            })
        };

        socketConnection.on("itenary-data", getItenaryData);

        socketConnection.on("itenary-updated", handleItenaryUpdated);

        return () => {
            socketConnection.off("itenary-updated", handleItenaryUpdated);
        };
    }, [socketConnection]);
    useEffect(() => {
        const socketService = makeSocketConnection();
        const socket = socketService.connect();
        const handleConnect = () => {
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
        <context.Provider value={{ openForm, openFormHandler, formType, addNewItenary }} >
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
                <HotelPannel placeName="Jibhi"/>
            </QueryClientProvider>
        </context.Provider >
    )
};

export default Trip;