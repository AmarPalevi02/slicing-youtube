import Card from '../components/orgabisems/Card/Card'
import SideBar from '../components/orgabisems/sidebar/SideBar'

const Beranda = ({isTogle, closeSideBar}) => {
   return (
      <div className='grid md:grid-cols-3 sm:grid-cols-3 gap-2 xs:gap-3 xs:px-2' onClick={closeSideBar}>
         <Card style={`${isTogle ? ' opacity-10' : 'bg-black'}`}/>
         <SideBar isOpen={isTogle} />
      </div>
   )
}

export default Beranda