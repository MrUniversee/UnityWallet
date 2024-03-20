import { nanoid } from 'nanoid'
import {
  metamask,
  trust,
  ledger,
  coinbase,
  exodus,
  safepal,
  uniswap,
  pancake,
  polkadot,
  solana,
  xrp,
} from './assets/logos/logos'
import PortfolioImg from './assets/Images/portfolio-mgt.png'
import AnalyseImg from './assets/Images/analyse-transaction.png'
import SwapImg from './assets/Images/swap-img.png'
import DashImg from './assets/Images/wallet-dashboard.png'

export const Wallets = [{ id: nanoid(), name: 'Trust wallet', img: '' }]
export const FeaturesData = [
  {
    id: nanoid(),
    image: SwapImg,
    title: 'Best exchange rate',
    text: 'Swap any tokens seamlessly across networks with Notum',
    more: ['Cross-chain', 'Routing', 'Coming soon'],
  },
  {
    id: nanoid(),
    image: AnalyseImg,
    title: 'Analyse transactions',
    text: 'Access to detailed records of past transactions of any wallet.',
    more: [],
  },
  {
    id: nanoid(),
    image: DashImg,
    title: 'Multi-wallet dashboard',
    text: 'Keep track of all your wallets in one window and stay in control of your assets with Notum.',
    more: [],
  },
  {
    id: nanoid(),
    image: PortfolioImg,
    title: 'Best exchange rate',
    text: `Stay informed with real-time performance analytics and maximize your portfolio's potential.`,
  },
]
export const MgtData = [
  {
    id: nanoid(),
    image: SwapImg,
    title: 'Best exchange rate',
    text: 'Swap any tokens seamlessly across networks with Notum',
    more: ['Cross-chain', 'Routing', 'Coming soon'],
  },
  {
    id: nanoid(),
    image: AnalyseImg,
    title: 'Analyse transactions',
    text: 'Access to detailed records of past transactions of any wallet.',
  },
  {
    id: nanoid(),
    image: DashImg,
    title: 'Multi-wallet dashboard',
    text: 'Keep track of all your wallets in one window and stay in control of your assets with Notum.',
  },
  {
    id: nanoid(),
    image: PortfolioImg,
    title: 'Best exchange rate',
    text: `Stay informed with real-time performance analytics and maximize your portfolio's potential.`,
  },
]

export const wallets = [
  { id: nanoid, name: 'Trust wallet', logo: trust },
  { id: nanoid(), name: 'metamask wallet', logo: metamask },
  { id: nanoid(), name: 'coinbase wallet', logo: coinbase },
  { id: nanoid, name: 'Ledger wallet', logo: ledger },
  { id: nanoid(), name: 'exodus wallet', logo: exodus },
  { id: nanoid(), name: 'safepal wallet', logo: safepal },
  { id: nanoid(), name: 'uniswap wallet', logo: uniswap },
  { id: nanoid(), name: 'pancake wallet', logo: pancake },
  { id: nanoid(), name: 'polkadot', logo: polkadot },
  { id: nanoid(), name: 'solana', logo: solana },
  { id: nanoid(), name: 'xrp', logo: xrp },
]
