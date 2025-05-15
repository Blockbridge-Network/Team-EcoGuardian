'use client'
import React, { useState, useEffect } from 'react';
import initWeb3 from '../utils/web3Config';

const styles = {
  button: `
    fixed
    top-4
    right-4
    px-6
    py-2
    rounded-full
    bg-green-600
    text-white
    hover:bg-green-700
    transition-colors
    duration-300
    font-semibold
    flex
    items-center
    justify-center
    min-w-[160px]
  `,
  address: `
    truncate
    max-w-[150px]
    inline-block
  `
};

const WalletConnector = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Check for existing connection on mount
  useEffect(() => {
    const savedAddress = localStorage.getItem('walletAddress');
    if (savedAddress) {
      setWalletAddress(savedAddress);
    }
    
    if (typeof window !== 'undefined' && !window.ethereum) {
      setError('Please install MetaMask to use this feature');
    }

    // Listen for account changes
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, []);

  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length > 0) {
      setWalletAddress(accounts[0]);
      localStorage.setItem('walletAddress', accounts[0]);
    } else {
      setWalletAddress(null);
      localStorage.removeItem('walletAddress');
    }
  };

  const connectWallet = async () => {
    try {
      const web3 = await initWeb3();
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        localStorage.setItem('walletAddress', accounts[0]);
        setError(null);
      }
    } catch (err) {
      setError('Failed to connect wallet. Please try again.');
      console.error('Wallet connection error:', err);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    localStorage.removeItem('walletAddress');
  };

  if (error) {
    return (
      <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md">
        {error}
      </div>
    );
  }

  return (
    <button 
      onClick={walletAddress ? disconnectWallet : connectWallet}
      className={styles.button}
    >
      {walletAddress ? (
        <span className={styles.address}>
          {`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}
        </span>
      ) : (
        'Connect Wallet'
      )}
    </button>
  );
};

export default WalletConnector;