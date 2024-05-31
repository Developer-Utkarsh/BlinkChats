"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
	const router = useRouter();

	return (
		<div className=' w-full flex-grow items-center bg-[#000]   sm:justify-center h-screen flex justify-center '>
			<div className='z-50 max-sm:w-full flex justify-center items-center'>
				<SignUp.Root>
					<SignUp.Step
						name='start'
						className='space-y-6 rounded-2xl px-4 py-10 pb-2 sm:w-[25rem] max-sm:w-[90%] sm:px-8 border shadow-gray-900  shadow-md bg-gradient-to-t from-gray-900/5 to-gray-950 border-gray-700 hover:border-gray-600 transition duration-200 hover:shadow-gray-800 relative'
					>
						<header className='text-center w-full flex justify-center items-center flex-col'>
							<Image
								src='/blink.png'
								alt='logo'
								width={110}
								height={110}
								className=' '
							/>
							<h1 className='mt-2 text-lg font-bold tracking-tight text-neutral-100'>
								Create your{" "}
								<span className='font-bold text-[#0156BD] '>
									Account
								</span>
							</h1>
							<p className='text-[12px] font-medium tracking-tight mt-1 text-gray-400  '>
								Welcome! Please fill in the details to get
								started.
							</p>
						</header>

						<div className=''>
							<div className='space-x-2 flex w-full'>
								<Clerk.Connection
									name='google'
									className='flex w-full items-center justify-center gap-x-3 rounded-md bg-transparent transition duration-300  border border-[#0156bd]   p-1.5 text-lg font-medium text-white shadow outline-none ring-1 ring-black/5 hover:bg-[#0156BD] focus-visible:outline-offset-2 focus-visible:outline-neutral-300 active:text-gray-50 active:scale-95 '
								>
									<i className='fa-brands fa-google'></i>
									<p className='text-[14px] '>Google</p>
								</Clerk.Connection>
								<Clerk.Connection
									name='github'
									className='flex w-full items-center justify-center gap-x-3 rounded-md bg-transparent transition duration-300 border border-[#0156bd] backdrop-blur-lg  p-1.5 text-lg font-medium text-slate-100 shadow outline-none ring-1 ring-black/5 hover:bg-[#0156BD] focus-visible:outline-offset-2 focus-visible:outline-neutral-300 active:text-gray-50 active:scale-95 '
								>
									<i className='fa-brands fa-github'></i>
									<p className='text-sm '>Github</p>
								</Clerk.Connection>
							</div>
						</div>
						<div className="relative flex items-center before:content-[''] before:flex-1 before:border-t before:border-gray-600 after:content-[''] after:flex-1 after:border-t after:border-gray-600">
							<div className='px-4 text-gray-300 '>or</div>
						</div>
						<Clerk.GlobalError className='block text-sm text-red-600' />

						<div className='flex space-x-2 w-full justify-between items-center'>
							<Clerk.Field
								name='firstName'
								className='w-full relative [&>i]:hover:text-[#0156BD]'
							>
								<Clerk.Label className='sr-only'>
									First Name
								</Clerk.Label>
								<Clerk.Input
									required
									placeholder='First Name'
									className='w-full border-b border-neutral-400 bg-transparent shadow-gray-950 shadow-sm pb-2 text-sm/6 text-neutral-50 outline-none placeholder:text-neutral-300 hover:border-blue-600 focus:border-[#0156BD] data-[invalid]:border-red-600 data-[invalid]:text-red-600'
								/>
								<Clerk.FieldError className='mt-2 block text-xs text-red-600' />
							</Clerk.Field>

							<Clerk.Field
								name='lastName'
								className='w-full relative [&>i]:hover:text-[#0156BD]'
							>
								<Clerk.Label className='sr-only'>
									lastName
								</Clerk.Label>
								<Clerk.Input
									required
									placeholder='Last Name'
									className='w-full border-b border-neutral-400 bg-transparent shadow-gray-950 shadow-sm pb-2 text-sm/6 text-neutral-50 outline-none placeholder:text-neutral-300 hover:border-blue-600 focus:border-[#0156BD] data-[invalid]:border-red-600 data-[invalid]:text-red-600'
								/>

								<Clerk.FieldError className='mt-2 block text-xs text-red-600' />
							</Clerk.Field>
						</div>

						<Clerk.Field
							name='emailAddress'
							className='w-full relative [&>i]:hover:text-[#0156BD]'
						>
							<Clerk.Label className='sr-only'>Email</Clerk.Label>
							<Clerk.Input
								type='email'
								required
								placeholder='Email'
								className='w-full border-b border-neutral-400 bg-transparent shadow-gray-950 shadow-sm pb-2 text-sm/6 text-neutral-50 outline-none placeholder:text-neutral-300 hover:border-blue-600 focus:border-[#0156BD] data-[invalid]:border-red-600 data-[invalid]:text-red-600'
							/>
							<i className='fa-solid fa-envelope absolute right-2 top-1/2 -translate-y-1/2 hover:text-[#0156BD] transition'></i>
							<Clerk.FieldError className='mt-2 block text-xs text-red-600' />
						</Clerk.Field>

						<Clerk.Field
							name='password'
							className='w-full relative [&>i]:hover:text-[#0156BD]'
						>
							<Clerk.Label className='sr-only'>
								Password
							</Clerk.Label>
							<Clerk.Input
								type='password'
								required
								placeholder='Password'
								className='w-full border-b border-neutral-400 bg-transparent shadow-gray-950 shadow-sm pb-2 text-sm/6 text-neutral-50 outline-none placeholder:text-neutral-300 hover:border-blue-600 focus:border-[#0156BD] data-[invalid]:border-red-600 data-[invalid]:text-red-600'
							/>
							<i className='fa-solid fa-lock absolute right-2 top-1/2 -translate-y-1/2 hover:text-[#0156BD] transition'></i>
							<Clerk.FieldError className='mt-2 block text-xs text-red-600' />
						</Clerk.Field>

						<SignUp.Action
							submit
							className='w-full flex justify-center items-center bg-transparent'
							asChild
						>
							<HoverBorderGradient
								containerClassName='rounded-md w-full flex justify-center items-center bg-transparent rounded-md text-white  text-[14px] font-normal '
								as='button'
								className='bg-[#0156BD] hover:bg-black hover:border-[#0156BD] transition  text-white border text-[14px] font-norml rounded-md  border-slate-500  py-2.5'
							>
								Sign Up
							</HoverBorderGradient>
						</SignUp.Action>
						<p className='text-center text-sm text-neutral-300'>
							Already have an account?{" "}
							<button
								className='rounded px-1 py-0.5 text-blue-600 outline-none hover:bg-neutral-900 focus-visible:bg-neutral-950 cursor-pointer active:scale-95 transition-transform'
								onClick={() => router.push("/sign-in")}
							>
								Sign In
							</button>
						</p>
						<div className='flex   bottom-0 border-t border-gray-500 w-full bg-dark-1 p-1 py-2 text-gray-400 justify-between  items-center hover:text-slate-300 transition  mt-2 hover:border-[#0156BD]'>
							<div className=' text-[12px]       flex justify-center items-center  gap-1 '>
								<i className='fa-regular fa-copyright'></i>
								<p>Utkarsh Tiwari</p>
							</div>
							<div className='flex gap-3  text-[12px]  '>
								<a
									href='https://www.linkedin.com/in/DeveloperUtkarsh/'
									target='_blank'
								>
									<i className='fa-brands fa-linkedin-in  hover:text-[#0156BD] hover:transform hover:scale-110 transition cursor-pointer'></i>
								</a>
								<a
									href='https://github.com/Developer-Utkarsh'
									target='_blank'
								>
									<i className='fa-brands fa-github hover:text-[#0156BD]  hover:transform hover:scale-110 transition cursor-pointer'></i>
								</a>
								<a
									href='https://instagram.com/developer_utkarsh/'
									target='_blank'
								>
									<i className='fa-brands fa-instagram  hover:text-[#0156BD]  hover:transform hover:scale-110 transition cursor-pointer'></i>
								</a>
							</div>
						</div>
					</SignUp.Step>

					<SignUp.Step
						name='verifications'
						className='space-y-6 rounded-2xl px-4 py-10 pb-2 sm:w-[25rem] max-sm:w-[90%] sm:px-8 border shadow-gray-950  shadow-md bg-gradient-to-t from-gray-900/5 to-gray-950 border-zinc-900 relative'
					>
						<SignUp.Strategy name='email_code'>
							<header className='text-center w-full flex justify-center items-center flex-col'>
								<Image
									src='/blink.png'
									alt='logo'
									width={110}
									height={110}
									className=' '
								/>
								<h1 className='mt-2 text-lg font-bold tracking-tight text-neutral-100'>
									Create your{" "}
									<span className='font-bold text-[#0156BD] '>
										Account
									</span>
								</h1>
								<p className='text-[12px] font-medium tracking-tight mt-1 text-gray-400  '>
									Welcome! Please fill in the details to get
									started.
								</p>
							</header>
							<h1 className='mt-2 text-lg font-bold tracking-tight text-neutral-100'>
								Check your email
							</h1>

							<Clerk.Field
								name='code'
								className='relative w-full [&>i]:hover:text-[#0156BD]'
							>
								<Clerk.Label className='sr-only'>
									Email Code
								</Clerk.Label>
								<Clerk.Input
									type='text'
									required
									placeholder='Email Code'
									className='w-full border-b border-neutral-400 bg-transparent shadow-gray-950 shadow-sm pb-2 text-sm/6 text-neutral-50 outline-none placeholder:text-neutral-300 hover:border-blue-600 focus:border-[#0156BD] data-[invalid]:border-red-600 data-[invalid]:text-red-600'
								/>
								<i className='fa-solid fa-envelope absolute right-2 top-1/2 -translate-y-1/2 hover:text-[#0156BD] transition'></i>
								<Clerk.FieldError className='mt-2 block text-xs text-red-600' />
							</Clerk.Field>

							<SignUp.Action
								submit
								className='w-full flex justify-center items-center bg-transparent'
								asChild
							>
								<HoverBorderGradient
									containerClassName='rounded-md w-full flex justify-center items-center bg-transparent rounded-md text-white  text-[14px] font-normal '
									as='button'
									className='bg-[#0156BD] hover:bg-black hover:border-[#0156BD] transition  text-white border text-[14px] font-norml rounded-md  border-slate-500  py-2.5'
								>
									Sign Up
								</HoverBorderGradient>
							</SignUp.Action>
						</SignUp.Strategy>
						<p className='text-center text-sm text-neutral-300'>
							Already have an account?{" "}
							<button
								className='rounded px-1 py-0.5 text-blue-600 outline-none hover:bg-neutral-900 focus-visible:bg-neutral-950 cursor-pointer active:scale-95 transition-transform'
								onClick={() => router.push("/sign-in")}
							>
								Sign in
							</button>
						</p>
						<div className='flex   bottom-0 border-t border-gray-500 w-full bg-dark-1 p-1 py-2 text-gray-400 justify-between  items-center hover:text-slate-300 transition  mt-2 hover:border-[#0156BD]'>
							<div className=' text-[12px]       flex justify-center items-center  gap-1 '>
								<i className='fa-regular fa-copyright'></i>
								<p>Utkarsh Tiwari</p>
							</div>
							<div className='flex gap-3  text-[12px]  '>
								<a
									href='https://www.linkedin.com/in/DeveloperUtkarsh/'
									target='_blank'
								>
									<i className='fa-brands fa-linkedin-in  hover:text-[#0156BD] hover:transform hover:scale-110 transition cursor-pointer'></i>
								</a>
								<a
									href='https://github.com/Developer-Utkarsh'
									target='_blank'
								>
									<i className='fa-brands fa-github hover:text-[#0156BD]  hover:transform hover:scale-110 transition cursor-pointer'></i>
								</a>
								<a
									href='https://instagram.com/developer_utkarsh/'
									target='_blank'
								>
									<i className='fa-brands fa-instagram  hover:text-[#0156BD]  hover:transform hover:scale-110 transition cursor-pointer'></i>
								</a>
							</div>
						</div>
					</SignUp.Step>
					<SignUp.Step
						name='continue'
						className='space-y-6 rounded-2xl px-4 py-10 pb-2 sm:w-[25rem] max-sm:w-[90%] sm:px-8 border shadow-gray-950  shadow-md bg-gradient-to-t from-gray-900/5 to-gray-950 border-zinc-900 relative'
					>
						<header className='text-center w-full flex justify-center items-center flex-col'>
							<Image
								src='/blink.png'
								alt='logo'
								width={110}
								height={110}
								className=' '
							/>
							<h1 className='mt-2 text-lg font-bold tracking-tight text-neutral-100'>
								Create your{" "}
								<span className='font-bold text-[#0156BD] '>
									Account
								</span>
							</h1>
							<p className='text-[12px] font-medium tracking-tight mt-1 text-gray-400  '>
								Welcome! Please fill in the details to get
								started.
							</p>
						</header>

						<Clerk.Field
							name='username'
							className='w-full relative [&>i]:hover:text-[#0156BD]'
						>
							<Clerk.Label className='sr-only'>
								Username
							</Clerk.Label>
							<Clerk.Input
								type='text'
								required
								placeholder='Username'
								className='w-full border-b border-neutral-400 bg-transparent shadow-gray-950 shadow-sm pb-2 text-sm/6 text-neutral-50 outline-none placeholder:text-neutral-300 hover:border-blue-600 focus:border-[#0156BD] data-[invalid]:border-red-600 data-[invalid]:text-red-600'
							/>
							<i className='fa-solid fa-user absolute right-2 top-1/2 -translate-y-1/2 hover:text-[#0156BD] transition'></i>
							<Clerk.FieldError className='mt-2 block text-xs text-red-600' />
						</Clerk.Field>
						<SignUp.Action
							submit
							className='w-full flex justify-center items-center bg-transparent'
							asChild
						>
							<HoverBorderGradient
								containerClassName='rounded-md w-full flex justify-center items-center bg-transparent rounded-md text-white  text-[14px] font-normal '
								as='button'
								className='bg-[#0156BD] hover:bg-black hover:border-[#0156BD] transition  text-white border text-[14px] font-norml rounded-md  border-slate-500  py-2.5'
							>
								Sign Up
							</HoverBorderGradient>
						</SignUp.Action>
						<p className='text-center text-sm text-neutral-300'>
							Already have an account?{" "}
							<button
								className='rounded px-1 py-0.5 text-blue-600 outline-none hover:bg-neutral-900 focus-visible:bg-neutral-950 cursor-pointer active:scale-95 transition-transform'
								onClick={() => router.push("/sign-in")}
							>
								Sign in
							</button>
						</p>
						<div className='flex   bottom-0 border-t border-gray-500 w-full bg-dark-1 p-1 py-2 text-gray-400 justify-between  items-center hover:text-slate-300 transition  mt-2 hover:border-[#0156BD]'>
							<div className=' text-[12px]       flex justify-center items-center  gap-1 '>
								<i className='fa-regular fa-copyright'></i>
								<p>Utkarsh Tiwari</p>
							</div>
							<div className='flex gap-3  text-[12px]  '>
								<a
									href='https://www.linkedin.com/in/DeveloperUtkarsh/'
									target='_blank'
								>
									<i className='fa-brands fa-linkedin-in  hover:text-[#0156BD] hover:transform hover:scale-110 transition cursor-pointer'></i>
								</a>
								<a
									href='https://github.com/Developer-Utkarsh'
									target='_blank'
								>
									<i className='fa-brands fa-github hover:text-[#0156BD]  hover:transform hover:scale-110 transition cursor-pointer'></i>
								</a>
								<a
									href='https://instagram.com/developer_utkarsh/'
									target='_blank'
								>
									<i className='fa-brands fa-instagram  hover:text-[#0156BD]  hover:transform hover:scale-110 transition cursor-pointer'></i>
								</a>
							</div>
						</div>
					</SignUp.Step>
				</SignUp.Root>
			</div>
			<BackgroundBeams />
		</div>
	);
}
