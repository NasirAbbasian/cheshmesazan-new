
const Sidebar = () => {
    return (
        <aside className="w-1/5 flex flex-col items-center">
				<img src="/img/Logo.svg" alt=""/>
				<div className="bg-white p-3 shadow rounded-3xl w-full mt-5 h-full flex flex-col">
					<div className="flex flex-col">
						<a href="#"
							className="menu-item text-pzinc hover:text-white hover:bg-pzinc flex justify-start items-center p-3 my-[4px] rounded-2xl ">
							<img src="/icons/fi-rr-home.svg" className="ml-3" width="24" alt=""/>
							<span>صفحه اصلی</span>
						</a>
						<a href="personalManagement.html"
							className="menu-item text-pzinc hover:text-white hover:bg-pzinc flex justify-start items-center p-3 my-[4px] rounded-2xl ">
							<img src="/icons/fi-rr-user.svg" className="ml-3" width="24" alt=""/>
							<span>مدیریت پرسنل</span>
						</a>
						<a href="#"
							className="menu-item text-pzinc hover:text-white hover:bg-pzinc flex justify-start items-center p-3 my-[4px] rounded-2xl ">
							<img src="/icons/fi-rr-stats.svg" className="ml-3" width="24" alt=""/>
							<span> حضور وغیاب</span>
						</a>
						<a href="#"
							className="menu-item text-pzinc hover:text-white hover:bg-pzinc flex justify-start items-center p-3 my-[4px] rounded-2xl ">
							<img src="/icons/fi-rr-document-signed.svg" className="ml-3" width="24" alt=""/>
							<span> مشاهده فیش حقوقی</span>
						</a>
						<a href="#"
							className="menu-item text-pzinc hover:text-white hover:bg-pzinc flex justify-start items-center p-3 my-[4px] rounded-2xl ">
							<img src="/icons/fi-rr-star.svg" className="ml-3" width="24" alt=""/>
							<span> تشویقات و تنبیهات</span>
						</a>
						<a href="#"
							className="menu-item text-pzinc hover:text-white hover:bg-pzinc flex justify-start items-center p-3 my-[4px] rounded-2xl ">
							<img src="/icons/fi-rr-time-fast.svg" className="ml-3" width="24" alt=""/>
							<span>مرخصی‌ها</span>
						</a>

					</div>

					<div className="flex flex-col mt-auto mb-0">
						<a href="#"
							className="menu-item text-pzinc hover:text-white hover:bg-pzinc flex justify-start items-center p-3 my-[4px] rounded-2xl ">
							<img src="/icons/fi-rr-user.svg" className="ml-3" width="24" alt=""/>
							<span>پروفایل کاربری</span>
						</a>
						<a onclick="logout()"
							className="menu-item text-red-500 hover:text-white hover:bg-red-500 flex justify-start items-center p-3 my-[4px] rounded-2xl ">
							<img src="/icons/fi-rs-power.svg" className="ml-3" width="24" alt=""/>
							<span>خروج</span>
						</a>
					</div>
				</div>
			</aside>
    )
}

export default Sidebar;
