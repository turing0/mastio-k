import Image from 'next/image';
import { ReactNode } from 'react';
import { Suspense } from 'react';
import Post from './Post';
import usePosts from '../hooks/usePosts';

interface PostItem {
	name: string;
	username: string;
	content: string;
	description: string;
	date: string;
	src: string;
	following: string;
	followers: string;
	initials: string;
	image?: ReactNode;
}

const items: PostItem[] = [
	{
		name: 'Jane Doe',
		username: 'janedoe',
		following: '249',
		followers: '663',
		content: 'Design and build templates',
		description:
			'Improve your design skills by making projects. 1 every week, practice with me on Youtube. I use Figma, Tailwind CSS and Webflow.',
		date: '1h',
		src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
		initials: 'JD',
		image: (
			<div className="w-full relative -z-10 h-80 mb-4">
				<Image
					fill={true}
					style={{ objectFit: 'cover' }}
					className="rounded-3xl"
					src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
					alt="Gradient"
				/>
			</div>
		),
	},
	{
		name: 'John Doe',
		username: 'johndoe',
		following: '138',
		followers: '2,218',
		content: 'I love Figma',
		description: 'I design and hug auto layout everyday',
		date: '2h',
		src: 'https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
		initials: 'JD',
	},
	{
		name: 'Jessica Doe',
		username: 'jessicadoe',
		following: '866',
		followers: '1001',
		content: 'Tailwind CSS is insane',
		description:
			'Should designers code. Should you rename your Figma layers is the 1 billion…',
		date: '3h',
		src: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
		initials: 'JD',
	},
	{
		name: 'Joe Doe',
		username: 'joedoe',
		following: '668',
		followers: '1985',
		content: 'Next JS documentation is so good',
		description: 'Next JS enthusiast',
		date: '4h',
		src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
		initials: 'JD',
	},
];

interface PostFeedProps {
	server?: string;
	userId?: string;
	type?: string;
  }

const Feed: React.FC<PostFeedProps> = ({ server, userId, type }) => {

	const { data: posts = [] } = usePosts(server, userId, type);

	return (
		<Suspense fallback={<Loading />}>
			<ul className="[&_p:last-child]:text-slate-500 [&_p:first-child]:text-lg divide-y divide-slate-200">
				{posts.map((post: Record<string, any>,) => (
						<li key={post.id} className="p-4 hover:bg-gray-100 transition">
							<Post
								data={post}
								server={server}
							>
								{/* {image} */}
							</Post>
						</li>
					),
				)}
			</ul>
		</Suspense>
	)
}

export default Feed;

function Loading() {
	return <h2>Loading...</h2>;
}
