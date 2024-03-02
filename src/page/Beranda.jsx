import Card from '../components/orgabisems/Card/Card'
import SideBar from '../components/orgabisems/sidebar/SideBar'

const Beranda = ({isTogle, closeSideBar}) => {
   return (
      <div className='sm:flex flex-wrap gap-2' onClick={closeSideBar}>
         <Card style={`${isTogle ? 'bg-black opacity-20' : 'bg-black'}`}/>
         <SideBar isOpen={isTogle} />
      </div>
   )
}

export default Beranda