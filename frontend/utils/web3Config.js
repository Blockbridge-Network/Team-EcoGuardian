// Import Web3 library for blockchain interactions
import Web3 from 'web3';

// Function to initialize and configure Web3
const initWeb3 = async() => {
    try {
        // Check if MetaMask (or other Web3 provider) is available in the browser
        if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
            // Request account access from MetaMask
            // This will trigger the MetaMask popup for user authorization
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Create and return a new Web3 instance using the MetaMask provider
            const web3 = new Web3(window.ethereum);

            return web3;
        } else {
            // If no Web3 provider is found, throw an error
            throw new Error('Please install MetaMask or another Web3 wallet to use this application');
        }
    } catch (error) {
        // Handle any errors that occur during initialization
        console.error('Error initializing Web3:', error);
        throw error;
    }
};

export default initWeb3;