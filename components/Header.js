import { 
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon
} from "@heroicons/react/outline"
import Image from 'next/image'
import HeaderItem from './HeaderItem'


function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title='Home' Icon={HomeIcon} />
        <HeaderItem title='Trending' Icon={LightningBoltIcon} />
        <HeaderItem title='Verified' Icon={BadgeCheckIcon} />

        <HeaderItem title='Collection' Icon={CollectionIcon} />
        <HeaderItem title='Search' Icon={SearchIcon} />
        <HeaderItem title='Account' Icon={UserIcon} />

      </div>
      <Image  className='object-contain'
      src="https://links.papareact.com/ua6" alt="" title="" width={200} height={100} />

    </header>
 )
}
export default Header