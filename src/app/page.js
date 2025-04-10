const Home = () => {
	return (
		<main className="w-4/5 px-5">
			<img className="invisible" src="img/Logo.svg" alt="" />
			<section className="mt-5 flex justify-around">
				<div className="bg-white rounded-3xl shadow-md py-5 px-12 flex flex-col justify-center items-center">
					<img width="48" src="/icons/fi-rr-user-lg.svg" alt="" />
					<p className="my-4">تعداد کل پرسنل</p>
					<legend className="text-pred text-2xl font-bold">50 <span>نفر</span></legend>
				</div>
				<div className="bg-white rounded-3xl shadow-md py-5 px-12 flex flex-col justify-center items-center">
					<img width="48" src="/icons/fi-rr-user-remove.svg" alt="" />
					<p className="my-4">تعداد غایبین امروز</p>
					<legend className="text-pred text-2xl font-bold">50 <span>نفر</span></legend>
				</div>
				<div className="bg-white rounded-3xl shadow-md py-5 px-12 flex flex-col justify-center items-center">
					<img width="48" src="/icons/fi-rr-comment-check.svg" alt="" />
					<p className="my-4">تعداد پرسنل حاضر</p>
					<legend className="text-pred text-2xl font-bold">50 <span>نفر</span></legend>
				</div>
				<div className="bg-white rounded-3xl shadow-md py-5 px-12 flex flex-col justify-center items-center">
					<img width="48" src="/icons/fi-rr-dollar.svg" alt="" />
					<p className="my-4">میانگین حقوق پرداختی</p>
					<legend className="text-pred text-2xl font-bold">50 <span>نفر</span></legend>
				</div>
			</section>
			<section className="mt-5 flex">
				<div className="w-1/2 p-5 flex flex-col">
					<legend className="my-3">
						آمار حضور پرسنل در طول ماه جاری
					</legend>
					<canvas id="userChart"></canvas>
				</div>
				<div className="w-1/2 p-5 flex flex-col">
					<legend className="my-3">
						آمار حقوق پرداختی
					</legend>
					<canvas id="payChart"></canvas>
				</div>
			</section>
		</main>
	)
}

export default Home;