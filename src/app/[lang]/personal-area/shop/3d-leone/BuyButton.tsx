import LoadingButton from "@/components/LoadingButton";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react"

interface BuyButtonProps {
    ExitCode: number,
    ReturnedObject_AddOrder: string;
    ReturnedObject_GetPayLink: string
    ReturnedError: string[];
}

function BuyButton({ idUser, idItem }: {idUser: string, idItem: number }) {
    const [, setData] = useState<BuyButtonProps>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const handleBuy = async () => {
        setIsLoading(true);

        const url = new URL(`https://php.leone.it/api/ws_leone/AddOrder-GetPayLink.php`);
        const params = new URLSearchParams();
        params.append("IDUser", idUser);
        params.append("IDItem", idItem.toString());
        params.append("Quantita", "1");
        url.search = params.toString();

        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc"
                }
            });
            const result = await response.json();
            setData(result);

            if (result.ExitCode === 0 && result.ReturnedObject_GetPayLink) {
                window.location.href = result.ReturnedObject_GetPayLink;
            } else {
                const errorMessage = result.ReturnedError?.join(", ")
                toast.error(errorMessage);
            }

        } catch (error) {
            toast.error('Errore durante l\'acquisto');
            console.error(error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 5000);
        }
    };

    return (
        <div className="relative">
            {isLoading ? (
                <LoadingButton />
            ) : (
                <button 
                    onClick={handleBuy}
                    className="text-white cursor-pointer bg-blue bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Acquista
                </button>
            )}
            <ToastContainer />
        </div>
    )
}

export default BuyButton;