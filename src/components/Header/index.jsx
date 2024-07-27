import "./Header.css";
import { useEffect, useState } from "react";
import { Maps } from "../Map";
import { Card } from "../Card";
import { FetchAddress, FetchCurrentIp } from "../../services/FetchMap";
import { useQuery } from "react-query";

export const Home = () => {
    const [inputIp, setInputIp] = useState('');
    const [IpData, setIpData] = useState(null);

    useEffect(() => {
        const fetchInitialIp = async () => {
            const currentIp = await FetchCurrentIp();
            const initialData = await FetchAddress(currentIp);
            setIpData(initialData);
        };

        fetchInitialIp();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        refetch();
    };

    const FetchIp = async () => {
        if (inputIp.trim()) {
            const newIpData = await FetchAddress(inputIp);
            setIpData(newIpData);
        } else {
            window.alert('IP address input is empty.');
        }
    };

    const { isLoading, refetch, isError, error } = useQuery(['fetchAddress', inputIp], FetchIp, {
        enabled: false,
    });

    if (isError) {
        window.alert('Failed to fetch location data:', error);
    }

    console.log(IpData);
    return (
        <>
            {IpData && <div className="home">
                <header className="header">
                    <h2>IP Address Tracker</h2>
                    <form className="input-container" onSubmit={handleSubmit}>
                        <input
                            className="text"
                            name="ip"
                            type="text"
                            placeholder="Search for any IP address or domain"
                            onChange={(e) => setInputIp(e.target.value)}
                            value={inputIp}
                        />
                        {isLoading ? (
                            <button className="loading-button" />
                        ) : (
                            <button className="submit-button" name="ip" type="submit" />
                        )}
                    </form>
                </header>
                <Card address={IpData} />
                <Maps location={IpData} />
            </div>  }
        </>
    );
};