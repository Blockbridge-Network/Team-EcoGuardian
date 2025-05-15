'use client'
import React, { useState } from 'react'
import styles from '../getstarted/getstarted.module.css'
import WalletConnector from '../../components/WalletConnector'
import initWeb3 from '../../utils/web3Config'

// Define the reward amounts for each category


const SubmitImage = () => {
  // State management for form inputs and transaction status
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [category, setCategory] = useState<'ocean' | 'street' | 'recycling' | ''>('')
  const [status, setStatus] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedFile || !category) {
      setStatus('Please select both an image and a category')
      return
    }

    setIsLoading(true)
    setStatus('Processing your submission...')

    try {
      // Initialize Web3
      const web3 = await initWeb3()

      // Get the contract ABI and create contract instance
      const contractABI = await fetch('/abis/RewardDistributor.json').then(res => res.json())
      const contractAddress = '0x66b1fF424820E1E9f71b39de8e837E3216045110'
      const contract = new web3.eth.Contract(contractABI, contractAddress)

      // Get user's wallet address
      const accounts = await web3.eth.getAccounts()
      const userAddress = accounts[0]

      // Call the autoReward function with the correct parameters
      await contract.methods.autoReward(userAddress, category).send({
        from: userAddress
      })

      setStatus(`Success! You've earned ECCO coins for your ${category} submission.`)
    } catch (error) {
      console.error('Transaction failed:', error)
      setStatus('Transaction failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <WalletConnector />
      <h1 className={styles.title}>Submit Your Impact Images</h1>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-6 bg-white p-6 rounded-lg shadow-lg">
        {/* File Input */}
        <div className="space-y-2">
          <label className="block text-green-700 font-semibold mb-2">
            Upload Image
          </label>
          <div className="relative border-2 border-dashed border-green-300 rounded-lg p-4 text-center hover:border-green-500 transition-colors">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="space-y-2">
              <div className="text-gray-600">
                {selectedFile ? (
                  <span className="text-green-600">{selectedFile.name}</span>
                ) : (
                  <>
                    <span className="block text-sm">Drag and drop your image here</span>
                    <span className="block text-xs">or click to browse</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Category Selection */}
        <div className="space-y-2">
          <label className="block text-green-700 font-semibold mb-2">
            Select Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as typeof category)}
            className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white shadow-sm"
          >
            <option value="">Select a category</option>
            <option value="ocean" className="py-2">Ocean Cleanup (20 ECCO)</option>
            <option value="street" className="py-2">Street Cleanup (10 ECCO)</option>
            <option value="recycling" className="py-2">Recycling (5 ECCO)</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !selectedFile || !category}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-colors duration-200
            ${isLoading || !selectedFile || !category 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg'}`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              Processing...
              <svg className="animate-spin ml-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
          ) : 'Submit Image'}
        </button>

        {/* Status Message */}
        {status && (
          <div className={`p-4 rounded-lg shadow-sm ${
            status.includes('Success') 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {status}
          </div>
        )}
      </form>
    </div>
  )
}

export default SubmitImage