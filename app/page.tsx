import Nav from './components/layout/Nav'
import Header from './components/Header'
import Tabs from './components/radix/Tabs'
import Panel from './components/Panel'
import PanelItemTrends from './components/PanelItemTrends'
import PanelItem from './components/PanelItem'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
		<title>Home | Mastio</title>
		
		<Header title="Home" />
		<Tabs />
    </>
  )
}
