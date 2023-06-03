import { ReactNode } from 'react';
import DialogDemo from './radix/Dialog';
import NavItem from './NavItem';
import PopoverDemo from './radix/PopoverDemo';

import { BsMastodon } from "react-icons/bs";
import { FaBookmark, FaCompass, FaUser, FaUsers } from 'react-icons/fa'; 
import { BiLogIn, BiLogOut, BiWorld, BiBookmark } from 'react-icons/bi';

import {
	HiOutlineHome,
	HiHashtag,
	HiOutlineBell,
	HiOutlineEnvelope,
	HiOutlineBookmark,
	HiOutlineUser,
} from 'react-icons/hi2';
import AccountNavItem from './AccountNavItem';

interface NavLinkItem {
	href: string;
	text: string;
	icon?: ReactNode;
}

const server = null;
const defaultServer = "mstdn.social";

const items: NavLinkItem[] = [
	{
		href: '/',
		text: 'Home',
		icon: <HiOutlineHome className="w-6 h-6" />,
	},
	{
		href: '/explore',
		text: 'Explore',
		icon: <HiHashtag className="w-6 h-6" />,
	},
	{
		href: '/notifications',
		text: 'Notifications',
		icon: <HiOutlineBell className="w-6 h-6" />,
	},
	{
		href: `/${server ? server : defaultServer}/public/local`,
		text: 'Local',
		icon: <FaUsers className="w-6 h-6" />,
	},
	{
		href: `/${server ? server : defaultServer}/public`,
		text: 'Federated',
		icon: <BiWorld className="w-6 h-6" />,
	},
	{
		href: '/messages',
		text: 'Messages',
		icon: <HiOutlineEnvelope className="w-6 h-6" />,
	},
	{
		href: '/bookmarks',
		text: 'Bookmarks',
		icon: <HiOutlineBookmark className="w-6 h-6" />,
	},
	{
		href: '/profile',
		text: 'Profile',
		icon: <HiOutlineUser className="w-6 h-6" />,
	},
];

const Nav = () => (
	<>
	<header className="hidden sm:flex w-24 xl:col-span-2">
		<div className="flex flex-1 xl:w-60 flex-col fixed h-full">
			<div className="flex flex-col flex-1">
				<NavItem href="/home" width="inline" size="default">
					<BsMastodon className="w-6 h-6" />
				</NavItem>
				{items.map(({ href, text, icon }, i) => (
					<div
						key={`header-${i}`}
						// value={`item-${i + 1}`}
						className="rounded-lg focus:outline-none overflow-hidden"
					>
						<NavItem href={href} width="inline" size="default">
							{icon}
							<div className="hidden xl:inline-flex flex-none text-lg font-medium">
								{text}
							</div>
						</NavItem>
					</div>
				))}
				{/* <PopoverDemo /> */}
				{/* <DialogDemo /> */}
			</div>
			<div>
				<AccountNavItem />
			</div>
		</div>
	</header>

	{/* mobile */}
	<header className="sm:hidden flex fixed bottom-0 left-0 right-0 bg-white">
		<div className="container mx-auto flex items-center justify-between px-4 py-3">
			{/* nav items */}
			{/* <NavItem href="#" width="full" size="small">
				<span>icon</span> 
				<span>text</span>
			</NavItem> */}
			<NavItem href={`/${server ? server : defaultServer}/public/local`} width="inline" size="default">
				<FaUsers className="w-6 h-6" />
			</NavItem>
			<NavItem href={`/${server ? server : defaultServer}/public`} width="inline" size="default">
				<BiWorld className="w-6 h-6" />
			</NavItem>
			<div className="flex items-center justify-center">
				<PopoverDemo />
			</div>
		</div>  
	</header>
	</>
);

export default Nav;