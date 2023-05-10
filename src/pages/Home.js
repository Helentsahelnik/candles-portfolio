import Header from './../components/header/Header'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Consist</h2>
							<p>
							Soy wax, coconut oil, shea butter, grapeseed oil, mango butter and aloe vera<br/>Quality fragrances<br/>
							Material production: USA, France, UK
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Cooperation programm</h2>
							<p>
							The most favorable and interesting conditions for cooperation</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;