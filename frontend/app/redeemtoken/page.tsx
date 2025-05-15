'use client'
import React, { useState } from 'react'
import styles from '../getstarted/getstarted.module.css'
import WalletConnector from '../../components/WalletConnector'
import Image from 'next/image'
import initWeb3 from '../../utils/web3Config'

// NFT Contract address
const NFT_CONTRACT_ADDRESS = '0x797692AF4dC350234ec17D64eB6c0C7D17cAb3d7'

const RedeemToken = () => {
  const [mintStatus, setMintStatus] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [showVoucher, setShowVoucher] = useState(false)
  const [voucherCode, setVoucherCode] = useState('')
  const [showNGOVoucher, setShowNGOVoucher] = useState(false)
  const [ngoVoucherCode, setNGOVoucherCode] = useState('')
  const [isCashLoading, setIsCashLoading] = useState(false)
  const [isNGOLoading, setIsNGOLoading] = useState(false)

  const handleCashRedeem = () => {
    setIsCashLoading(true)
    // Simulate API call with setTimeout
    setTimeout(() => {
      const randomCode = 'EC-' + Math.random().toString(36).substring(2, 10).toUpperCase()
      setVoucherCode(randomCode)
      setShowVoucher(true)
      setIsCashLoading(false)
    }, 1500)
  }

  const handleNGODonate = () => {
    setIsNGOLoading(true)
    // Simulate API call with setTimeout
    setTimeout(() => {
      const randomCode = 'ENGO-' + Math.random().toString(36).substring(2, 10).toUpperCase()
      setNGOVoucherCode(randomCode)
      setShowNGOVoucher(true)
      setIsNGOLoading(false)
    }, 1500)
  }

  const handleMintNFT = async () => {
    setIsLoading(true)
    setMintStatus('')

    try {
      // Initialize Web3
      const web3 = await initWeb3()
      
      // Get user's wallet address
      const accounts = await web3.eth.getAccounts()
      const userAddress = accounts[0]

      if (!userAddress) {
        throw new Error('Please connect your wallet first')
      }

      // Get the contract ABI and create contract instance
      const contractABI = await fetch('/abis/EcoWarriorNFT.json').then(res => res.json())
      const contract = new web3.eth.Contract(contractABI, NFT_CONTRACT_ADDRESS)

      // Call the mintNFT function
      await contract.methods.mintNFT().send({
        from: userAddress
      })

      setMintStatus('Success! Your EcoWarrior NFT has been minted!')
    } catch (error) {
      console.error('NFT Minting failed:', error)
      setMintStatus(error instanceof Error ? error.message : 'Failed to mint NFT. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.container} style={{
      backgroundImage: 'url("/earth.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Changed from 0.8 to 0.3 for more transparency
        zIndex: 0
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <WalletConnector />
        <h1 className={styles.title} style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          color: '#1a4731', // Dark green color
          textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)',
          marginBottom: '2rem',
          letterSpacing: '0.05em',
          padding: '1rem 2rem',
          background: 'rgba(255, 255, 255, 0.4)',
          border: '3px solid #2d6a4f', // Deeper green border
          borderRadius: '1rem',
          boxShadow: '0 4px 6px rgba(45, 106, 79, 0.1), 0 1px 3px rgba(45, 106, 79, 0.08)',
          display: 'inline-block',
          backdropFilter: 'blur(5px)',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>Redeem Your Tokens</h1>
        
        <div className={styles.boxContainer}>
          <div className={`${styles.box}`}>
            <Image 
              src="/cash.jpeg"
              alt="Cash Redeem"
              width={200}
              height={200}
              className={styles.boxImage}
            />
            <h2 className={styles.boxTitle}>Cash Redeem</h2>
            <button 
              onClick={handleCashRedeem}
              disabled={isCashLoading}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold 
              hover:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg
              disabled:bg-blue-300 disabled:cursor-not-allowed"
            >
              {isCashLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </div>
              ) : 'Redeem Cash'}
            </button>
            {showVoucher && (
              <div className="mt-4 p-6 bg-white rounded-xl shadow-lg border-2 border-blue-200">
                <div className="text-center mb-4 p-4 bg-blue-50 rounded-lg border border-blue-300">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Your Voucher Code</h3>
                  <p className="text-3xl font-mono font-bold tracking-wider text-blue-600">{voucherCode}</p>
                </div>
                <p className="text-center font-semibold text-gray-700 leading-relaxed">
                  You can send this to your nearest Community ECCO center to <span className="text-blue-600">CLAIM</span> your reward
                </p>
              </div>
            )}
          </div>
          
          <div className={`${styles.box} ${styles.darkBox}`}>
            <Image 
              src="/nft.jpeg"
              alt="Redeem NFT"
              width={200}
              height={200}
              className={styles.boxImage}
            />
            <h2 className={styles.boxTitle}>Redeem NFT</h2>
            <button 
              onClick={handleMintNFT}
              disabled={isLoading}
              className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg font-semibold 
              hover:bg-purple-600 transition-colors duration-200 shadow-md hover:shadow-lg
              disabled:bg-purple-300 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Minting...' : 'Mint NFT'}
            </button>
            {mintStatus && (
              <div className={`mt-2 p-2 rounded text-sm ${
                mintStatus.includes('Success')
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {mintStatus}
              </div>
            )}
          </div>
  
          <div className={`${styles.box} ${styles.greenBox}`}>
            <Image 
              src="/support.jpeg"
              alt="Support NGOs"
              width={200}
              height={200}
              className={styles.boxImage}
            />
            <h2 className={styles.boxTitle}>Support NGOs</h2>
            <button 
              onClick={handleNGODonate}
              disabled={isNGOLoading}
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg font-semibold 
              hover:bg-green-600 transition-colors duration-200 shadow-md hover:shadow-lg
              disabled:bg-green-300 disabled:cursor-not-allowed"
            >
              {isNGOLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </div>
              ) : 'Donate To NGO'}
            </button>
            {showNGOVoucher && (
              <div className="mt-4 p-6 bg-white rounded-xl shadow-lg border-2 border-green-200">
                <div className="text-center mb-4 p-4 bg-green-50 rounded-lg border border-green-300">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Your NGO Donation Voucher</h3>
                  <p className="text-3xl font-mono font-bold tracking-wider text-green-600">{ngoVoucherCode}</p>
                </div>
                <p className="text-center font-semibold text-gray-700 leading-relaxed">
                  You can send this voucher to any <span className="text-green-600">RECOGNIZED ENGO</span> (Non-Governmental Organization in the field of Environmentalism) for them to <span className="text-green-600">CLAIM</span> rewards from our partners
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RedeemToken