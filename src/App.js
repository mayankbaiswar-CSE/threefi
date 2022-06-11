import React from 'react';
import Web3 from 'web3/dist/web3.min.js';

export default function App() {
    const [account, setAccount] = React.useState(null);
    React.useEffect(() => {
        let web3 = new Web3('ws://127.0.0.1:7545');
    }, []);

    const requestAccount = async () => {
        const { ethereum } = window;
        if (!ethereum) {
            alert('Please install MetaMask!');
        }
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log(accounts);
            setAccount([accounts[0]]);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                        <span className="sr-only">Web3</span>
                        <img
                            className="h-8 w-auto sm:h-10"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt=""
                        />
                    </a>
                </div>

                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    {`${account ? account : 'No account'}`}
                    <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        onClick={account ? undefined : requestAccount}
                    >
                        Connect wallet
                    </button>
                </div>
            </div>
        </div>
    )
}