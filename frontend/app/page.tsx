export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="bg-green-500/80 p-6 flex justify-between items-center fixed w-full z-50 rounded-b-2xl shadow-lg backdrop-blur-sm">
        <div className="text-4xl font-extrabold tracking-tight hover:scale-105 transition-transform cursor-pointer">
          <span className="text-green-900">ECO</span>
          <span className="text-yellow-100">GUARDIAN</span>
        </div>
        <a href="/getstarted" className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 font-bold text-lg shadow-md hover:shadow-xl hover:scale-105">
          Get Started
        </a>
      </nav>

      <main className="container mx-auto px-4 pt-24 pb-12 space-y-8">
        {/* About Section */}
        <div className="bg-white/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-3xl font-extrabold text-green-700 mb-6 tracking-tight">About EcoGuardian</h3>
          <p className="text-gray-700 leading-relaxed text-lg font-medium">
            At <span className="font-bold text-green-700">EcoGuardian</span>, we are reimagining environmental activism for the digital age. Born from a shared belief that technology can bridge the gap between individual action and global impact, we&apos;ve created a decentralized platform where every cleanup, every recycled item, and every effort to heal our planet is transformed into a tangible, rewarding experience. <span className="font-bold">EcoGuardian isn&apos;t just an app—it&apos;s a revolution in how humanity collaborates to protect Earth.</span>
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <h4 className="text-2xl font-extrabold text-green-700 mb-6 tracking-tight">Our Mission</h4>
          <p className="text-gray-700 leading-relaxed text-lg font-medium mb-6">
            The climate crisis demands <span className="font-bold text-green-600">urgency, creativity, and collective effort</span>. Yet today, many environmental initiatives struggle with transparency, scalability, and public engagement. Traditional systems often leave individuals feeling powerless, NGOs underfunded, and corporations accused of greenwashing.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg font-medium mb-6">
            <span className="font-bold text-green-700">EcoGuardian exists to change this.</span> Our mission is to democratize environmental action by harnessing the power of Web3. We&apos;re building a global ecosystem where:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-4 ml-4 text-lg font-medium">
            <li className="font-semibold">Individuals are <span className="text-green-600">empowered</span> to take action, knowing their efforts are recognized and rewarded.</li>
            <li className="font-semibold">Communities unite through gamified challenges, fostering <span className="text-green-600">camaraderie and accountability</span>.</li>
            <li className="font-semibold">NGOs gain direct access to <span className="text-green-600">transparent, frictionless funding</span>.</li>
            <li className="font-semibold">Corporations prove their sustainability commitments with <span className="text-green-600">immutable, auditable records</span>.</li>
          </ul>
        </div>

        {/* How It Works Section - Enhanced */}
        <div className="bg-white/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <h4 className="text-3xl font-extrabold text-green-700 mb-8 tracking-tight">How It Works</h4>
          <div className="space-y-10">
            <div className="transform hover:scale-105 transition-transform">
              <h5 className="text-2xl font-bold text-green-600 mb-4">1. Act for the Planet</h5>
              <ul className="list-disc list-inside text-gray-700 space-y-4 ml-4 text-lg font-medium">
                <li className="font-semibold"><span className="text-green-600">Join Cleanups:</span> Participate in organized beach, park, or street cleanups, or start your own.</li>
                <li className="font-semibold"><span className="text-green-600">Recycle Responsibly:</span> Submit proof of recycling e-waste, plastics, or other materials.</li>
                <li className="font-semibold"><span className="text-green-600">Document Your Impact:</span> Use our app to upload geotagged photos, timestamps, and descriptions of your efforts.</li>
              </ul>
            </div>

            <div className="transform hover:scale-105 transition-transform">
              <h5 className="text-2xl font-bold text-green-600 mb-4">2. Earn Digital Rewards</h5>
              <ul className="list-disc list-inside text-gray-700 space-y-4 ml-4 text-lg font-medium">
                <li className="font-semibold"><span className="text-green-600">$ECO Tokens:</span> Earn our native cryptocurrency for every verified action.
                  <p className="ml-6 mt-2 text-green-600 italic font-medium">Example: Collect 10kg of ocean plastic → Receive 50 $ECO</p>
                </li>
                <li className="font-semibold"><span className="text-green-600">Impact NFTs:</span> Unlock unique digital collectibles that certify your contributions.
                  <p className="ml-6 mt-2 text-green-600 italic font-medium">Examples: &quot;Coral Defender&quot; NFT for 10 beach cleanups, &quot;Urban Hero&quot; NFT for recycling 100+ items</p>
                </li>
                <li className="font-semibold"><span className="text-green-600">Tiered Achievements:</span> Progress from &quot;Seedling&quot; to &quot;Planetary Guardian&quot; with exclusive perks.</li>
              </ul>
            </div>

            <div className="transform hover:scale-105 transition-transform">
              <h5 className="text-2xl font-bold text-green-600 mb-4">3. Drive Real-World Change</h5>
              <ul className="list-disc list-inside text-gray-700 space-y-4 ml-4 text-lg font-medium">
                <li className="font-semibold"><span className="text-green-600">Redeem Rewards:</span>
                  <ul className="list-none ml-6 mt-2 space-y-2">
                    <li className="font-medium">• Shop at eco-friendly brands using $ECO discounts</li>
                    <li className="font-medium">• Plant trees or adopt wildlife through partnered NGOs</li>
                  </ul>
                </li>
                <li className="font-semibold"><span className="text-green-600">Donate with Purpose:</span> Convert $ECO tokens into stablecoins for NGOs, with 100% transparency via blockchain tracking.</li>
                <li className="font-semibold"><span className="text-green-600">Compete & Collaborate:</span> Rise on our global leaderboard, join teams, and unlock community grants for large-scale projects.</li>
              </ul>
            </div>

            <div className="transform hover:scale-105 transition-transform">
              <h5 className="text-2xl font-bold text-green-600 mb-4">4. Prove & Scale Impact</h5>
              <ul className="list-disc list-inside text-gray-700 space-y-4 ml-4 text-lg font-medium">
                <li className="font-semibold"><span className="text-green-600">Public Impact Dashboard:</span> Track your personal stats and see global metrics like &quot;Total Coastlines Restored.&quot;</li>
                <li className="font-semibold"><span className="text-green-600">Shareable NFTs:</span> Showcase your achievements on social media or digital resumes.</li>
                <li className="font-semibold"><span className="text-green-600">Corporate Partnerships:</span> Companies sponsor cleanups and match user contributions, turning CSR goals into verifiable on-chain actions.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Blockchain Section - Enhanced */}
        <div className="bg-white/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <h4 className="text-3xl font-extrabold text-green-700 mb-6 tracking-tight">Why Blockchain?</h4>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg font-medium">
            <span className="font-bold text-green-700">Blockchain isn&apos;t just a buzzword here</span>&mdash;it&apos;s the backbone of trust, transparency, and scalability:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-4 ml-4 text-lg font-medium">
            <li className="font-semibold"><span className="text-green-600">Trustless Verification:</span> Every cleanup is validated by decentralized oracles or community voting, eliminating fraud.</li>
            <li className="font-semibold"><span className="text-green-600">Immutable Records:</span> NGOs and donors see exactly where funds go, from a recycled bottle to a reforested acre.</li>
            <li className="font-semibold"><span className="text-green-600">Global Accessibility:</span> A farmer in Kenya and a student in Tokyo earn the same rewards for their efforts, breaking down financial and geographic barriers.</li>
            <li className="font-semibold"><span className="text-green-600">Ownership & Control:</span> Users truly own their $ECO tokens and NFTs, free from corporate or governmental interference.</li>
          </ul>
        </div>

        {/* Our Technology Section - Enhanced */}
        <div className="bg-white/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <h4 className="text-3xl font-extrabold text-green-700 mb-6 tracking-tight">Our Technology</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-4 ml-4 text-lg font-medium">
            <li className="font-semibold"><span className="text-green-600">Sonic Blaze Blockchain:</span> A high-speed, low-carbon network for instant transactions and minimal environmental footprint.</li>
            <li className="font-semibold"><span className="text-green-600">ERC-20 Tokens ($ECO):</span> Fuel rewards, donations, and a circular green economy.</li>
            <li className="font-semibold"><span className="text-green-600">Dynamic NFTs:</span> Evolving digital certificates that update with your impact.</li>
            <li className="font-semibold"><span className="text-green-600">Zero-Knowledge Proofs:</span> Verify actions without compromising user privacy.</li>
            <li className="font-semibold"><span className="text-green-600">DeFi Bridges:</span> NGOs convert $ECO to stablecoins in seconds via decentralized exchanges.</li>
            <li className="font-semibold"><span className="text-green-600">DAO Governance:</span> Token holders vote on platform upgrades, fund allocations, and partnership approvals.</li>
          </ul>
        </div>

        {/* Join the Guardians Section - Enhanced */}
        <div className="bg-white/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <h4 className="text-3xl font-extrabold text-green-700 mb-6 tracking-tight">Join the Guardians</h4>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg font-medium">
            <span className="font-bold text-green-700">EcoGuardian is more than a platform</span>&mdash;it&apos;s a movement. Whether you&apos;re:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-4 ml-4 text-lg font-medium">
            <li className="font-semibold">A student rallying peers for a <span className="text-green-600">campus cleanup</span>,</li>
            <li className="font-semibold">A parent teaching kids about <span className="text-green-600">sustainability</span> through gamified actions,</li>
            <li className="font-semibold">An NGO streamlining donations with <span className="text-green-600">blockchain transparency</span>,</li>
            <li className="font-semibold">Or a corporation turning ESG goals into <span className="text-green-600">measurable, community-driven impact</span>,</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-6 text-lg font-medium">
            EcoGuardian gives you the tools to <span className="font-bold text-green-600">act</span>, the proof to <span className="font-bold text-green-600">inspire</span>, and the rewards to <span className="font-bold text-green-600">sustain</span> your journey.
          </p>
        </div>

        {/* Footer */}
        <footer className="bg-green-800 text-white mt-16 rounded-t-2xl shadow-lg">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
                <p className="text-green-200">info@ecoguardian.com</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-white hover:text-green-300 transition-colors">
                  <span className="font-semibold">@ecoguardian_twitter</span>
                </a>
                <a href="#" className="text-white hover:text-green-300 transition-colors">
                  <span className="font-semibold">@ecoguardian_instagram</span>
                </a>
                <a href="#" className="text-white hover:text-green-300 transition-colors">
                  <span className="font-semibold">@ecoguardian_linkedin</span>
                </a>
              </div>
            </div>
            <div className="text-center mt-8 text-green-200">
              <p>&copy; 2024 EcoGuardian. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
