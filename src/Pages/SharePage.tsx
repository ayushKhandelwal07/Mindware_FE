import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../Config"
import { useParams } from "react-router-dom"
import { Card } from "../components/Card" // Import the Card component

export function SharePage(){
        const {shareId} = useParams();
        interface SharedContent {
            _id: string;
            link: string;
            type: string;
            title: string;
            tags: string[];
            userId: string[];
            __v: number;
        }
        
        interface SharedData {
            username: string;
            content: SharedContent[]; // Changed from contents to content to match API response
        }
        
        const [sharedData, setSharedData] = useState<SharedData | null>(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState<string | null>(null);

        console.log(shareId);
        
        useEffect(() => {
                const fetchSharedData = async () => {
                    try {
                        const response = await axios.get(`${BACKEND_URL}/api/v1/brain/${shareId}`);
                        const data = response.data;
                        setSharedData(data);
                        console.log(data);
                        setLoading(false);
                    } catch (err) {
                        console.error("Error fetching shared data:", err);
                        setError("Failed to load shared content");
                        setLoading(false);
                    }
                }
        
                fetchSharedData();
        }, [shareId])
        
        if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
        if (error) return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
        if (!sharedData) return <div className="flex justify-center items-center h-screen">No data found</div>;
                
        return (
            <div className="share-container max-w-3xl mx-auto p-4">
                <h2 className="text-xl font-semibold mb-4">Shared by: {sharedData.username}</h2>
                
                {/* Map through all contents and render a Card for each */}
                <div className="flex gap-4 flex-wrap">
                    {sharedData.content.map((content) => (
                        <Card 
                            key={content._id}
                            title={content.title}
                            link={content.link}
                            type={content.type as "youtube" | "twitter"}
                        />
                    ))}
                </div>
            </div>
        );
}