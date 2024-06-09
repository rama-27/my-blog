
export default function Home() {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-xl font-medium">
				Welcome to My blog
			</h1>
			<p className="mt-2 tracking-wide leading-relaxed">
				Nothing Here Thanks For visiting!!!
			</p>
			<div className="p-4 rounded-md bg-slate-200 mt-10 dark:bg-zinc-600">
				<code>
					Check me out in github click here ===&gt;&nbsp;<a href="https://www.github.com/rama-27" className="hover:decoration-black"> 
					<img className="inline-block"width={30} height={20} src="https://img.icons8.com/?size=100&id=zuHqpgzrusU5&format=png&color=000000"	alt="icon"/>	
					&nbsp;rama-27</a>
				</code>
			</div>
		</div>
	);
}
