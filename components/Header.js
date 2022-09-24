import { 
  BadgeCheckIcon, 
CollectionIcon,
HomeIcon,
Ligt} from "@heroicons/react/outline";
import Image from 'next/image'
import HeaderItem from './HeaderItem'


function Header() {
  return (
    <header className=''>
      <div>
        <HeaderItem title='Home' icon='' />
      </div>
      <Image  className='object-contain'
      src="https://links.papareact.com/ua6" alt="" title="" width="200" height="100" />

    </header>
 )
}
export default Header